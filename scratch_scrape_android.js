const fs = require('fs');
const JSDOM = require('jsdom').JSDOM;
const html = fs.readFileSync('C:\\\\Users\\\\abbas\\\\.gemini\\\\antigravity-ide\\\\brain\\\\68b00810-c2a5-43fb-8c55-7c170355d80e\\\\.system_generated\\\\steps\\\\125\\\\content.md', 'utf8').replace(/^.*?---/s, '');
const dom = new JSDOM(html);
const document = dom.window.document;

const result = {
  herosection: [{
    heading: document.querySelector('h1')?.textContent || 'Top Android App Development Company in India & The USA',
    subtitle: document.querySelector('h1')?.nextElementSibling?.textContent || 'Comfygen is a top-tier Android app development company that helps you create robust, scalable, and feature-rich applications.'
  }],
  servicesection: [],
  aboutinfo: [],
  whychoose: [],
  solution: [],
  extracard: [],
  faqdata: []
};

const headings = Array.from(document.querySelectorAll('h2'));
const getSection = (titleSub) => headings.find(h => h.textContent.toLowerCase().includes(titleSub));

const srvH2 = getSection('services');
if (srvH2) {
  let cards = [];
  let srvTitle = srvH2.textContent;
  let srvSub = srvH2.nextElementSibling?.tagName === 'P' ? srvH2.nextElementSibling.textContent : '';
  let iter = srvH2.nextElementSibling;
  while(iter && iter.tagName !== 'H2') {
    const h3s = iter.querySelectorAll('h3');
    h3s.forEach(h3 => {
      let p = h3.nextElementSibling;
      while(p && p.tagName !== 'P') p = p.nextElementSibling;
      cards.push({ title: h3.textContent, description: p ? p.textContent : '' });
    });
    if(iter.tagName === 'H3') {
       let p = iter.nextElementSibling;
       while(p && p.tagName !== 'P') p = p.nextElementSibling;
       cards.push({ title: iter.textContent, description: p ? p.textContent : '' });
    }
    iter = iter.nextElementSibling;
  }
  cards = cards.filter((v,i,a)=>a.findIndex(t=>(t.title === v.title))===i);
  result.servicesection.push({ heading: srvTitle, subtitle: srvSub, card: cards });
}

// "Partner in India" for aboutinfo
const aboutH2 = getSection('trusted android app development partner');
if(aboutH2) {
   let p = aboutH2.nextElementSibling;
   let desc = '';
   while(p && p.tagName === 'P') {
     desc += p.textContent + '\n\n';
     p = p.nextElementSibling;
   }
   result.aboutinfo.push({ title: aboutH2.textContent, description: desc.trim(), buttontext: 'Consult Our Experts' });
}

// "ideal partner" for whychoose
const whyH2 = getSection('ideal partner');
if (whyH2) {
  let cards = [];
  let iter = whyH2.nextElementSibling;
  while(iter && iter.tagName !== 'H2') {
    const h3s = iter.querySelectorAll('h3');
    h3s.forEach(h3 => {
      let p = h3.nextElementSibling;
      while(p && p.tagName !== 'P') p = p.nextElementSibling;
      cards.push({ title: h3.textContent, description: p ? p.textContent : '' });
    });
    if(iter.tagName === 'H3') {
       let p = iter.nextElementSibling;
       while(p && p.tagName !== 'P') p = p.nextElementSibling;
       cards.push({ title: iter.textContent, description: p ? p.textContent : '' });
    }
    iter = iter.nextElementSibling;
  }
  cards = cards.filter((v,i,a)=>a.findIndex(t=>(t.title === v.title))===i);
  result.whychoose.push({ heading: whyH2.textContent, cards: cards });
}

// "process" for solution
const solH2 = getSection('process');
if (solH2) {
  let cards = [];
  let iter = solH2.nextElementSibling;
  let sub = '';
  if(iter && iter.tagName === 'P') { sub = iter.textContent; iter = iter.nextElementSibling; }
  while(iter && iter.tagName !== 'H2') {
    const h3s = iter.querySelectorAll('h3');
    h3s.forEach(h3 => {
      let p = h3.nextElementSibling;
      while(p && p.tagName !== 'P') p = p.nextElementSibling;
      cards.push({ title: h3.textContent, description: p ? p.textContent : '' });
    });
    if(iter.tagName === 'H3') {
       let p = iter.nextElementSibling;
       while(p && p.tagName !== 'P') p = p.nextElementSibling;
       cards.push({ title: iter.textContent, description: p ? p.textContent : '' });
    }
    iter = iter.nextElementSibling;
  }
  cards = cards.filter((v,i,a)=>a.findIndex(t=>(t.title === v.title))===i);
  result.solution.push({ heading: solH2.textContent, subheading: sub, cards: cards });
}

// "tech stack" for extracard
const techH2 = getSection('technology stack');
if (techH2) {
  let cards = [];
  let iter = techH2.nextElementSibling;
  while(iter && iter.tagName !== 'H2') {
    const h3s = iter.querySelectorAll('h3');
    h3s.forEach(h3 => {
      let p = h3.nextElementSibling;
      while(p && p.tagName !== 'P') p = p.nextElementSibling;
      cards.push({ title: h3.textContent, description: p ? p.textContent : '' });
    });
    if(iter.tagName === 'H3') {
       let p = iter.nextElementSibling;
       while(p && p.tagName !== 'P') p = p.nextElementSibling;
       cards.push({ title: iter.textContent, description: p ? p.textContent : '' });
    }
    iter = iter.nextElementSibling;
  }
  cards = cards.filter((v,i,a)=>a.findIndex(t=>(t.title === v.title))===i);
  if(cards.length === 0 && techH2.nextElementSibling?.tagName === 'P') {
     cards.push({ title: 'Tech Stack', description: techH2.nextElementSibling.textContent });
  }
  result.extracard.push({ heading: techH2.textContent, cards: cards });
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
           faqdata: faqPage.mainEntity.map(q => ({ quz: q.name, answer: q.acceptedAnswer.text }))
        });
      }
    } catch(e) {}
  }
}

fs.writeFileSync('C:\\\\Users\\\\abbas\\\\.gemini\\\\antigravity-ide\\\\brain\\\\68b00810-c2a5-43fb-8c55-7c170355d80e\\\\artifacts\\\\android-app-api-data.json', JSON.stringify(result, null, 2));
console.log('Saved to android-app-api-data.json');
