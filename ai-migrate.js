const fs = require('fs');
const { JSDOM } = require('jsdom');
const { GoogleGenAI } = require('@google/genai');

// ================= CONFIGURATION =================
const STRAPI_URL = 'https://cms.comfygen.com/api/pages';
const STRAPI_TOKEN = 'e415756aa624dd70482db19b8ea2a8cd6124748af0ff4467f95683848bc5134f243014d74e449b3b7987fa99cbd10be243d065a1eeaf195208df246c607e827a1f152313f79cf1661e43dbdd811db1089087b4fc04413227ae0305f604c4748fb4a24fbca729ddb84a28f2d5ad19abe2ebcf812f2991268d880fd4f52d921c88'; // Strapi Token
const GEMINI_API_KEY = 'AIzaSyBu8TU1EhpmP21YVdVZzSs0tULGO6dLlzA'; // Apna Gemini API Key yahan dalein

const URLS_TO_MIGRATE = [
  'https://www.comfygen.com/flutter-development-company',
  'https://www.comfygen.com/react-native-development',
];
// =================================================

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

const SEO_RULES = `
Strict SEO & UI Length Standards:
- Hero Section: Heading (50-60 chars), Subtitle (150-160 chars).
- About Info: Title (50-70 chars), Description (300-400 chars, max 2 short paragraphs), buttontext MUST be "Consult Our Experts".
- Cards (Services, WhyChoose, Solution): Exactly 6 cards. Heading (40-70 chars), Subtitle (120-160 chars). Each Card Title (30-50 chars), Each Card Description (100-120 chars, 2-3 short sentences).
- FAQs: Exactly 6 to 8 questions. Question (40-80 chars), Answer (150-250 chars).
`;

async function refineContentWithAI(topic, sectionName, scrapedData, schemaString) {
  const isDataMissing = !scrapedData || (Array.isArray(scrapedData) && scrapedData.length === 0) || Object.keys(scrapedData).length === 0;

  let userInstruction = isDataMissing
    ? `The website has no data for the '${sectionName}' section. Generate highly professional, conversion-optimized content for this section from scratch based on the topic: "${topic}".`
    : `I have scraped some raw data for the '${sectionName}' section of a page about "${topic}". The raw data is too long and messy. Summarize, rewrite, and standardize this raw data to fit the strict SEO lengths. If cards are missing, generate them to reach the required number. \n\nRAW DATA:\n${JSON.stringify(scrapedData)}`;

  const prompt = `
You are an expert SEO Web Copywriter. 
${SEO_RULES}

Task: ${userInstruction}

Return ONLY a valid JSON object matching this exact schema:
${schemaString}
`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: { responseMimeType: 'application/json' }
    });
    return JSON.parse(response.text);
  } catch (error) {
    console.error(`❌ AI Generation Failed for ${sectionName} on ${topic}:`, error);
    return null;
  }
}

async function scrapeAndMigrate(url) {
  try {
    console.log(`\n⏳ Scraping: ${url}`);
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 sec timeout
    
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);
    
    const html = await response.text();
    const dom = new JSDOM(html);
    const document = dom.window.document;

    const slug = url.split('/').filter(Boolean).pop();
    const topic = slug.replace(/-/g, ' ');

    let rawData = {
      herosection: {},
      servicesection: {},
      aboutinfo: {},
      whychoose: {},
      solution: {},
      faqdata: []
    };

    const headings = Array.from(document.querySelectorAll('h2'));
    const getSection = (titleSub) => headings.find(h => h.textContent.toLowerCase().includes(titleSub));

    // 1. Scrape Hero
    rawData.herosection = {
      heading: document.querySelector('h1')?.textContent?.trim() || '',
      subtitle: document.querySelector('h1')?.nextElementSibling?.textContent?.trim() || ''
    };

    // Helper to scrape cards dynamically
    const scrapeCardsFromH2 = (h2Element) => {
      let cards = [];
      let subtitle = '';
      const allEls = Array.from(document.querySelectorAll('h2, h3, p'));
      const startIndex = allEls.indexOf(h2Element);
      if (startIndex !== -1) {
        if (allEls[startIndex + 1] && allEls[startIndex + 1].tagName === 'P') subtitle = allEls[startIndex + 1].textContent.trim();
        for (let i = startIndex + 1; i < allEls.length; i++) {
          if (allEls[i].tagName === 'H2') break;
          if (allEls[i].tagName === 'H3') {
            let desc = '';
            let j = i + 1;
            while (j < allEls.length && allEls[j].tagName === 'P') { desc += allEls[j].textContent.trim() + ' '; j++; }
            cards.push({ title: allEls[i].textContent.trim(), description: desc.trim() });
          }
        }
      }
      return { heading: h2Element.textContent.trim(), subtitle, cards };
    };

    // 2. Scrape Services
    const srvH2 = getSection('services') || getSection('offer');
    if (srvH2) rawData.servicesection = scrapeCardsFromH2(srvH2);

    // 3. Scrape Why Choose
    const whyH2 = getSection('choose') || getSection('why');
    if (whyH2) rawData.whychoose = scrapeCardsFromH2(whyH2);

    // 4. Scrape Solution
    const solH2 = getSection('process') || getSection('solution');
    if (solH2) rawData.solution = scrapeCardsFromH2(solH2);

    // 5. Scrape About Info (Usually comes before services or has 'about'/'who we are' in title)
    const aboutH2 = getSection('about') || getSection('who we are') || getSection('partner');
    if (aboutH2) {
      let desc = '';
      let el = aboutH2.nextElementSibling;
      while (el && el.tagName === 'P') { desc += el.textContent.trim() + '\n'; el = el.nextElementSibling; }
      rawData.aboutinfo = { title: aboutH2.textContent.trim(), description: desc.trim() };
    }

    // 6. Scrape FAQ
    const faqH2 = getSection('frequently asked questions') || getSection('faq');
    if (faqH2) {
      let { cards } = scrapeCardsFromH2(faqH2); // Reuse card scraper logic
      rawData.faqdata = cards.map(c => ({ quz: c.title, answer: c.description }));
    }

    console.log(`🤖 Scraping done. Sending to AI Refiner to apply SEO standards...`);

    // ================= AI REFINER PHASE =================
    console.log(`   -> Refining Hero Section...`);
    const finalHero = await refineContentWithAI(topic, 'herosection', rawData.herosection, '{"heading": "string", "subtitle": "string"}');
    
    console.log(`   -> Refining Services Section...`);
    const finalServices = await refineContentWithAI(topic, 'servicesection', rawData.servicesection, '{"heading": "string", "subtitle": "string", "card": [{"title": "string", "description": "string"}]}');
    
    console.log(`   -> Refining About Info Section...`);
    const finalAbout = await refineContentWithAI(topic, 'aboutinfo', rawData.aboutinfo, '{"title": "string", "description": "string", "buttontext": "string"}');
    
    console.log(`   -> Refining Why Choose Us Section...`);
    const finalWhy = await refineContentWithAI(topic, 'whychoose', rawData.whychoose, '{"heading": "string", "cards": [{"title": "string", "description": "string"}]}');
    
    console.log(`   -> Refining Solution Section...`);
    const finalSolution = await refineContentWithAI(topic, 'solution', rawData.solution, '{"heading": "string", "subtitle": "string", "cards": [{"title": "string", "description": "string"}]}');
    
    console.log(`   -> Refining FAQs...`);
    const finalFaq = await refineContentWithAI(topic, 'faqdata', rawData.faqdata, '{"faqdata": [{"quz": "string", "answer": "string"}]}');

    // ================= ASSEMBLE FINAL STRAPI PAYLOAD =================
    const finalResult = {
      slug: slug,
      herosection: finalHero ? [{ __component: 'shared.herosection', ...finalHero }] : [],
      servicesection: finalServices ? [{ __component: 'shared.service-component', ...finalServices }] : [],
      aboutinfo: finalAbout ? [{ __component: 'shared.about-info', ...finalAbout }] : [],
      whychoose: finalWhy ? [{ __component: 'shared.why-choose-us-component', ...finalWhy }] : [],
      solution: finalSolution ? [{ __component: 'shared.solution-component', ...finalSolution }] : [],
      faqdata: finalFaq ? [{ __component: 'shared.faq-component', ...finalFaq }] : []
    };

    // Push to Strapi
    console.log(`🚀 Sending Standardized SEO JSON to Strapi...`);
    const apiResponse = await fetch(STRAPI_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${STRAPI_TOKEN}` },
      body: JSON.stringify({ data: finalResult })
    });

    const apiResult = await apiResponse.json();
    if (apiResponse.ok) {
      console.log(`✅ SUCCESS! "${slug}" fully standardized and added to Strapi.`);
    } else {
      console.error(`❌ ERROR for "${slug}":`, JSON.stringify(apiResult, null, 2));
    }
  } catch (error) {
    console.error(`❌ FATAL ERROR for ${url}:`, error);
  }
}

async function runAll() {
  for (const url of URLS_TO_MIGRATE) {
    await scrapeAndMigrate(url);
    await new Promise(res => setTimeout(res, 2000));
  }
  console.log('\n🎉 ALL URLS PROCESSED!');
}

runAll();
