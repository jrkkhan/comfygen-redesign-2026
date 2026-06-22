const fs = require('fs');
const { JSDOM } = require('jsdom');

// ================= CONFIGURATION =================
const STRAPI_URL = 'https://cms.comfygen.com/api/pages';
const STRAPI_TOKEN = 'e415756aa624dd70482db19b8ea2a8cd6124748af0ff4467f95683848bc5134f243014d74e449b3b7987fa99cbd10be243d065a1eeaf195208df246c607e827a1f152313f79cf1661e43dbdd811db1089087b4fc04413227ae0305f604c4748fb4a24fbca729ddb84a28f2d5ad19abe2ebcf812f2991268d880fd4f52d921c88'; // Apna Strapi API Token yahan dalein
const OLD_PAGE_URL = 'https://www.comfygen.com/flutter-development-company'; // URL jise test karna hai
// =================================================

async function scrapeAndMigrate() {
  try {
    console.log(`⏳ Fetching data from: ${OLD_PAGE_URL}...`);
    const response = await fetch(OLD_PAGE_URL);
    const html = await response.text();
    const dom = new JSDOM(html);
    const document = dom.window.document;

    // Slug generation from URL (e.g., flutter-app-development)
    const slug = OLD_PAGE_URL.split('/').filter(Boolean).pop();

    console.log(`✅ Page fetched. Scraping data for slug: ${slug}...`);

    const result = {
      slug: slug,
      herosection: [{
        __component: 'shared.herosection',
        heading: document.querySelector('h1')?.textContent || '',
        subtitle: document.querySelector('h1')?.nextElementSibling?.textContent || ''
      }],
      servicesection: [],
      aboutinfo: [],
      whychoose: [],
      solution: [],
      faqdata: []
    };

    const headings = Array.from(document.querySelectorAll('h2'));
    const getSection = (titleSub) => headings.find(h => h.textContent.toLowerCase().includes(titleSub));

    // Services
    const srvH2 = getSection('services') || getSection('offer');
    if (srvH2) {
      let cards = [];
      let srvTitle = srvH2.textContent.trim();
      let srvSub = '';
      
      const allEls = Array.from(document.querySelectorAll('h2, h3, p'));
      const startIndex = allEls.indexOf(srvH2);
      if (startIndex !== -1) {
        if (allEls[startIndex+1] && allEls[startIndex+1].tagName === 'P') {
           srvSub = allEls[startIndex+1].textContent.trim();
        }
        for (let i = startIndex + 1; i < allEls.length; i++) {
          if (allEls[i].tagName === 'H2') break;
          if (allEls[i].tagName === 'H3') {
             let desc = '';
             let j = i + 1;
             while(j < allEls.length && allEls[j].tagName === 'P') {
                desc += allEls[j].textContent.trim() + ' ';
                j++;
             }
             cards.push({ title: allEls[i].textContent.trim(), description: desc.trim() });
          }
        }
      }
      
      // Remove duplicates
      cards = cards.filter((v, i, a) => a.findIndex(t => (t.title === v.title)) === i);
      result.servicesection.push({ __component: 'shared.service-component', heading: srvTitle, subtitle: srvSub, card: cards });
    }

    // Why Choose
    const whyH2 = getSection('choose') || getSection('why');
    if (whyH2) {
      let cards = [];
      const allEls = Array.from(document.querySelectorAll('h2, h3, p'));
      const startIndex = allEls.indexOf(whyH2);
      if (startIndex !== -1) {
        for (let i = startIndex + 1; i < allEls.length; i++) {
          if (allEls[i].tagName === 'H2') break;
          if (allEls[i].tagName === 'H3') {
             let desc = '';
             let j = i + 1;
             while(j < allEls.length && allEls[j].tagName === 'P') {
                desc += allEls[j].textContent.trim() + ' ';
                j++;
             }
             cards.push({ title: allEls[i].textContent.trim(), description: desc.trim() });
          }
        }
      }
      cards = cards.filter((v, i, a) => a.findIndex(t => (t.title === v.title)) === i);
      result.whychoose.push({ __component: 'shared.why-choose-us-component', heading: whyH2.textContent.trim(), cards: cards });
    }

    // Solution / Process
    const solH2 = getSection('process') || getSection('solution');
    if (solH2) {
      let cards = [];
      let sub = '';
      const allEls = Array.from(document.querySelectorAll('h2, h3, p'));
      const startIndex = allEls.indexOf(solH2);
      if (startIndex !== -1) {
        if (allEls[startIndex+1] && allEls[startIndex+1].tagName === 'P') {
           sub = allEls[startIndex+1].textContent.trim();
        }
        for (let i = startIndex + 1; i < allEls.length; i++) {
          if (allEls[i].tagName === 'H2') break;
          if (allEls[i].tagName === 'H3') {
             let desc = '';
             let j = i + 1;
             while(j < allEls.length && allEls[j].tagName === 'P') {
                desc += allEls[j].textContent.trim() + ' ';
                j++;
             }
             cards.push({ title: allEls[i].textContent.trim(), description: desc.trim() });
          }
        }
      }
      cards = cards.filter((v, i, a) => a.findIndex(t => (t.title === v.title)) === i);
      result.solution.push({ __component: 'shared.solution-component', heading: solH2.textContent.trim(), subtitle: sub, cards: cards });
    }

    // FAQ
    const faqScripts = document.querySelectorAll('script[type="application/ld+json"]');
    for (const script of faqScripts) {
      if (script.textContent.includes('FAQPage')) {
        try {
          const data = JSON.parse(script.textContent);
          const faqPage = Array.isArray(data) ? data.find(d => d['@type'] === 'FAQPage') : data;
          if (faqPage && faqPage.mainEntity) {
            result.faqdata.push({
              __component: 'shared.faq-component',
              faqdata: faqPage.mainEntity.map(q => ({ quz: q.name, answer: q.acceptedAnswer?.text || '' }))
            });
          }
        } catch (e) { }
      }
    }

    if (result.faqdata.length === 0) {
      const faqH2 = getSection('frequently asked questions') || getSection('faq');
      if (faqH2) {
        let faqs = [];
        const allEls = Array.from(document.querySelectorAll('h2, h3, p'));
        const startIndex = allEls.indexOf(faqH2);
        if (startIndex !== -1) {
          for (let i = startIndex + 1; i < allEls.length; i++) {
            if (allEls[i].tagName === 'H2') break;
            if (allEls[i].tagName === 'H3') {
               let ans = '';
               let j = i + 1;
               while(j < allEls.length && allEls[j].tagName === 'P') {
                  ans += allEls[j].textContent.trim() + ' ';
                  j++;
               }
               faqs.push({ quz: allEls[i].textContent.trim(), answer: ans.trim() });
            }
          }
        }
        if (faqs.length > 0) {
          result.faqdata.push({ __component: 'shared.faq-component', faqdata: faqs });
        }
      }
    }

    console.log('✅ Data scraped and formatted! Pushing to Strapi API...');

    // Push to Strapi
    const apiResponse = await fetch(STRAPI_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${STRAPI_TOKEN}`
      },
      body: JSON.stringify({ data: result }) // Strapi requires payload to be wrapped in "data" object
    });

    const apiResult = await apiResponse.json();

    if (apiResponse.ok) {
      console.log(`🎉 SUCCESS! Page "${slug}" has been successfully added to Strapi.`);
      console.log(`View it in Strapi Admin Panel under "Page" collection.`);
    } else {
      console.error('❌ ERROR pushing to Strapi:', JSON.stringify(apiResult, null, 2));
    }

  } catch (error) {
    console.error('❌ FATAL ERROR:', error);
  }
}

scrapeAndMigrate();
