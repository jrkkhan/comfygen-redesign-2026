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
  const text = (title + " " + description).toLowerCase();
  
  // Array of { icon, score }
  let scores = [];
  
  for (const [icon, keywords] of Object.entries(keywordMap)) {
    if (usedIcons.has(icon)) continue; // skip already used icons on this page
    
    let score = 0;
    for (const kw of keywords) {
      if (text.includes(kw.toLowerCase())) {
        score += 1;
        // Boost score if keyword is in the title
        if (title.toLowerCase().includes(kw.toLowerCase())) {
          score += 2;
        }
      }
    }
    scores.push({ icon, score });
  }
  
  // Sort by score descending
  scores.sort((a, b) => b.score - a.score);
  
  if (scores.length > 0 && scores[0].score > 0) {
    return scores[0].icon;
  }
  
  // Fallback if no keywords matched and all mapped ones are taken
  // Just pick the first available icon that hasn't been used
  for (const icon of ALL_ICONS) {
    if (!usedIcons.has(icon)) {
      return icon;
    }
  }
  
  // Absolute fallback (should not happen since we have 21 icons and 6 cards)
  return 'Smartphone';
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

      console.log(`Fixing icons semantically for ${page.slug}...`);
      
      try {
        const usedIcons = new Set();
        
        const updatedCards = page.servicesection.card.map((card) => {
          const chosenIcon = getSemanticIcon(card.title, card.description || "", usedIcons);
          usedIcons.add(chosenIcon);
          return {
            title: card.title,
            description: card.description,
            icon: chosenIcon
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
          console.log(`✅ Fixed semantics & uniqueness for ${page.slug}`);
        }
      } catch (err) {
        console.error(`Error processing ${page.slug}:`, err.message);
      }
    }
    
    console.log("🎉 All icons updated semantically and uniquely!");
  } catch (error) {
    console.error("Fatal error:", error);
  }
}

run();
