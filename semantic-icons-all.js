const fs = require('fs');

const keywordMap = {
  Smartphone: ['app', 'mobile', 'ios', 'android', 'phone', 'tablet', 'cross-platform', 'flutter', 'react native'],
  Activity: ['health', 'medical', 'fitness', 'performance', 'monitor', 'hospital', 'care', 'doctor', 'patient'],
  BrainCircuit: ['ai', 'intelligence', 'smart', 'machine learning', 'brain', 'logic', 'data', 'algorithm', 'generative'],
  Network: ['blockchain', 'web3', 'network', 'connect', 'crypto', 'decentralized', 'p2p', 'exchange', 'node'],
  Component: ['nft', 'token', 'contract', 'modular', 'piece', 'component', 'architecture', 'microservice'],
  ShoppingCart: ['ecommerce', 'shop', 'retail', 'buy', 'commerce', 'store', 'cart', 'b2c'],
  DollarSign: ['finance', 'fintech', 'money', 'payment', 'invest', 'wallet', 'crypto', 'trading', 'exchange', 'roi'],
  Percent: ['discount', 'sale', 'analytics', 'rate', 'growth', 'conversion', 'profit'],
  Megaphone: ['marketing', 'seo', 'promote', 'campaign', 'social', 'audience', 'advertising'],
  Store: ['marketplace', 'b2b', 'vendor', 'retail', 'pos', 'inventory'],
  Car: ['automotive', 'logistics', 'transport', 'vehicle', 'drive', 'fleet', 'delivery', 'roadside'],
  CheckCircle2: ['qa', 'testing', 'quality', 'verify', 'approve', 'audit', 'security', 'compliance', 'guarantee'],
  LayoutDashboard: ['ui', 'ux', 'design', 'dashboard', 'panel', 'admin', 'frontend', 'interface', 'web'],
  Settings: ['configuration', 'maintenance', 'devops', 'backend', 'api', 'setup', 'system', 'integration', 'custom', 'support'],
  MapPin: ['location', 'gps', 'tracking', 'real estate', 'local', 'delivery', 'map'],
  Bell: ['notification', 'alert', 'reminder', 'communication', 'push'],
  Search: ['research', 'seo', 'find', 'discover', 'query', 'consultation', 'analysis', 'strategy'],
  User: ['consultant', 'team', 'hire', 'staff', 'resource', 'identity', 'developer', 'expert', 'dedicated'],
  FileText: ['documentation', 'contract', 'report', 'audit', 'content', 'planning', 'whitepaper'],
  Heart: ['dating', 'care', 'charity', 'support', 'favorite', 'engagement', 'loyalty'],
  Clock: ['fast', 'agile', 'time', 'schedule', 'real-time', 'deadline', 'delivery', 'efficient']
};

const ALL_ICONS = Object.keys(keywordMap);

function getSemanticIcon(title, description, usedIcons) {
  const text = ((title || "") + " " + (description || "")).toLowerCase();
  
  let scores = [];
  
  for (const [icon, keywords] of Object.entries(keywordMap)) {
    if (usedIcons.has(icon)) continue;
    
    let score = 0;
    for (const kw of keywords) {
      if (text.includes(kw.toLowerCase())) {
        score += 1;
        if ((title || "").toLowerCase().includes(kw.toLowerCase())) {
          score += 2;
        }
      }
    }
    scores.push({ icon, score });
  }
  
  scores.sort((a, b) => b.score - a.score);
  
  if (scores.length > 0 && scores[0].score > 0) {
    return scores[0].icon;
  }
  
  for (const icon of ALL_ICONS) {
    if (!usedIcons.has(icon)) {
      return icon;
    }
  }
  
  return 'Smartphone';
}

async function processCollection(collectionName, sectionName) {
  console.log(`Fetching ${collectionName} from Strapi...`);
  // using populate=* for the component level
  const res = await fetch(`https://cms.comfygen.com/api/${collectionName}?populate[${sectionName}][populate]=*&pagination[pageSize]=100`);
  const json = await res.json();
  
  if (!json.data) {
    console.log(`No data found for ${collectionName}`);
    return;
  }

  const pages = json.data;
  console.log(`Found ${pages.length} pages in ${collectionName}.`);

  for (const page of pages) {
    const section = page[sectionName];
    if (!section || !section.card || section.card.length === 0) {
      continue;
    }

    console.log(`Fixing icons semantically for ${collectionName} > ${page.slug}...`);
    
    try {
      const usedIcons = new Set();
      
      const updatedCards = section.card.map((card) => {
        const chosenIcon = getSemanticIcon(card.title, card.description || "", usedIcons);
        usedIcons.add(chosenIcon);
        return {
          title: card.title,
          description: card.description,
          icon: chosenIcon
        };
      });

      const updatedServiceSection = {
        heading: section.heading,
        subtitle: section.subtitle,
        card: updatedCards
      };

      const bodyData = { data: {} };
      bodyData.data[sectionName] = updatedServiceSection;

      const updateRes = await fetch(`https://cms.comfygen.com/api/${collectionName}/${page.documentId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyData)
      });

      if (!updateRes.ok) {
        console.error(`Failed to update ${page.slug}:`, await updateRes.text());
      } else {
        console.log(`✅ Fixed semantics & uniqueness for ${page.slug} in ${collectionName}`);
      }
    } catch (err) {
      console.error(`Error processing ${page.slug}:`, err.message);
    }
  }
}

async function run() {
  try {
    await processCollection('solutions', 'SolutionServiceSection');
    await processCollection('industries', 'IndustryServiceSection');
    console.log("🎉 All icons updated semantically and uniquely for solutions and industries!");
  } catch (error) {
    console.error("Fatal error:", error);
  }
}

run();
