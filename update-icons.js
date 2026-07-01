require('dotenv').config({ path: '.env.local' });
const { GoogleGenAI } = require('@google/genai');

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const ICON_LIST = [
  "Smartphone", "Activity", "BrainCircuit", "Network", "Component", "ShoppingCart", 
  "DollarSign", "Percent", "Megaphone", "Store", "Car", "CheckCircle2", 
  "LayoutDashboard", "Settings", "MapPin", "Bell", "Search", "User", "FileText", "Heart", "Clock"
];

async function assignIcons(cards) {
  // Fallback to local assignment because Gemini Free Tier quota is exhausted
  return cards.map(c => {
    // simple hash based on title to pick a deterministic icon
    let hash = 0;
    for (let i = 0; i < c.title.length; i++) {
      hash += c.title.charCodeAt(i);
    }
    return ICON_LIST[hash % ICON_LIST.length];
  });
}

async function run() {
  try {
    console.log("Fetching pages from Strapi...");
    const res = await fetch('https://cms.comfygen.com/api/pages?populate[servicesection][populate]=*&pagination[pageSize]=100');
    const json = await res.json();
    
    const pages = json.data;
    console.log(`Found ${pages.length} pages.`);

    for (const page of pages) {
      if (!page.servicesection || !page.servicesection.card || page.servicesection.card.length === 0) {
        continue;
      }

      // Check if icons are already assigned (and not null)
      const needsUpdate = page.servicesection.card.some(c => !c.icon);
      if (!needsUpdate) {
        console.log(`Skipping ${page.slug}, icons already present.`);
        continue;
      }

      console.log(`Processing ${page.slug}...`);
      
      try {
        const iconNames = await assignIcons(page.servicesection.card);
        
        // Map icons back to cards
        const updatedCards = page.servicesection.card.map((card, index) => {
          return {
            title: card.title,
            description: card.description,
            icon: iconNames[index] || "Smartphone"
          };
        });

        const updatedServiceSection = {
          heading: page.servicesection.heading,
          subtitle: page.servicesection.subtitle,
          card: updatedCards
        };

        const updateRes = await fetch(`https://cms.comfygen.com/api/pages/${page.documentId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            data: {
              servicesection: updatedServiceSection
            }
          })
        });

        if (!updateRes.ok) {
          console.error(`Failed to update ${page.slug}:`, await updateRes.text());
        } else {
          console.log(`✅ Updated ${page.slug}`);
        }

        // Sleep to avoid Gemini 429 Rate Limit
        await new Promise(r => setTimeout(r, 3500));
      } catch (err) {
        console.error(`Error processing ${page.slug}:`, err.message);
      }
    }
    
    console.log("🎉 All icons updated successfully!");
  } catch (error) {
    console.error("Fatal error:", error);
  }
}

run();
