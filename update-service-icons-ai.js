const { GoogleGenAI } = require('@google/genai');

require('dotenv').config({ path: '.env.local' });

// ================= CONFIGURATION =================
const STRAPI_URL = 'https://cms.comfygen.com/api/pages'; 
const STRAPI_TOKEN = process.env.STRAPI_TOKEN || 'e415756aa624dd70482db19b8ea2a8cd6124748af0ff4467f95683848bc5134f243014d74e449b3b7987fa99cbd10be243d065a1eeaf195208df246c607e827a1f152313f79cf1661e43dbdd811db1089087b4fc04413227ae0305f604c4748fb4a24fbca729ddb84a28f2d5ad19abe2ebcf812f2991268d880fd4f52d921c88';
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

const SCHEMA_INSTRUCTION = `
You are an expert UX Designer. 
I am providing you an array of service cards (title and description).
Your ONLY job is to return a JSON array containing the exact Lucide React icon name that best represents each service card.
DO NOT return any other text, ONLY a raw JSON array matching this exact schema:

[
  "string (Valid Lucide-React icon name e.g., Smartphone, Activity, Box, Code, Globe, Shield, ShoppingCart, Users, Database, etc.)"
]
`;

async function generateIconsForCards(topic, cards) {
  console.log(`\n🤖 Generating icons for: ${topic}...`);
  const prompt = `Topic: "${topic}"\n\nCards data:\n${JSON.stringify(cards, null, 2)}\n\n${SCHEMA_INSTRUCTION}`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-flash-lite-latest',
      contents: prompt,
      config: { responseMimeType: 'application/json' }
    });
    return JSON.parse(response.text);
  } catch (error) {
    console.error("AI Generation Error:", error.message);
    return null;
  }
}

async function fetchAllPages() {
  console.log(`\n🔍 Fetching all pages from Strapi to find missing icons...`);
  try {
    const getRes = await fetch(`${STRAPI_URL}?pagination[limit]=100&populate[servicesection][populate]=*`, {
      headers: { 'Authorization': `Bearer ${STRAPI_TOKEN}` }
    });
    const data = await getRes.json();
    return data?.data || [];
  } catch (err) {
    console.error("Failed to fetch pages from Strapi:", err);
    return [];
  }
}

async function updateMissingIconsAutomatically() {
  const allPages = await fetchAllPages();
  console.log(`Found ${allPages.length} total pages in Strapi.`);

  for (const entry of allPages) {
    const attributes = entry.attributes || entry;
    const finalSlug = attributes.slug;
    const topic = attributes.title || finalSlug;
    const updateId = entry.documentId || entry.id;
    
    // Some pages might not have a servicesection
    const serviceSection = attributes.servicesection?.[0];
    
    if (!serviceSection || !serviceSection.card || serviceSection.card.length === 0) {
      continue; // No cards to update
    }

    const cards = serviceSection.card;
    
    // Check if any card is missing an icon
    const needsUpdate = cards.some(c => !c.icon);

    if (!needsUpdate) {
      // Already has icons
      continue;
    }

    console.log(`\n⚠️ Missing icons detected for "${finalSlug}". Processing...`);
    
    const iconNames = await generateIconsForCards(topic, cards.map(c => ({ title: c.title, description: c.description })));

    if (!iconNames || iconNames.length !== cards.length) {
      console.log(`❌ Failed to generate exactly ${cards.length} icons for: ${finalSlug}`);
      continue;
    }

    const updatedCards = cards.map((card, index) => ({
      ...card,
      icon: iconNames[index] || 'Smartphone' // Fallback if AI skips
    }));

    console.log(`♻️ Pushing updated icons to Strapi for "${finalSlug}"...`);
    
    const payload = {
      data: {
        servicesection: [{
          __component: serviceSection.__component || 'shared.service-component',
          heading: serviceSection.heading,
          subtitle: serviceSection.subtitle,
          card: updatedCards.map(c => ({
            title: c.title,
            description: c.description,
            icon: c.icon
          }))
        }]
      }
    };

    try {
      const putRes = await fetch(`${STRAPI_URL}/${updateId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${STRAPI_TOKEN}`
        },
        body: JSON.stringify(payload)
      });

      if (putRes.ok) {
        console.log(`✅ SUCCESS! Icons updated for "${finalSlug}".`);
      } else {
        const errorText = await putRes.text();
        console.error(`❌ Strapi PUT failed for "${finalSlug}":`, errorText);
      }
    } catch (error) {
      console.error(`❌ Error processing "${finalSlug}":`, error.message);
    }
    
    // Respect Gemini API Rate limits
    console.log(`⏳ Waiting 5 seconds before the next request to avoid API rate limits...`);
    await new Promise(resolve => setTimeout(resolve, 5000));
  }
  
  console.log("\n🎉 All updates finished! No more missing icons.");
}

updateMissingIconsAutomatically();
