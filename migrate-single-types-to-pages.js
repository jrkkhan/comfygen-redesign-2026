const qs = require('qs');

const STRAPI_URL = 'https://cms.comfygen.com/api';
const STRAPI_TOKEN = 'e415756aa624dd70482db19b8ea2a8cd6124748af0ff4467f95683848bc5134f243014d74e449b3b7987fa99cbd10be243d065a1eeaf195208df246c607e827a1f152313f79cf1661e43dbdd811db1089087b4fc04413227ae0305f604c4748fb4a24fbca729ddb84a28f2d5ad19abe2ebcf812f2991268d880fd4f52d921c88';

const endpoints = [
  { slug: 'application-consulting-services', documentId: 'kb8p0zpjwm4s3ajnrvcyr0pc' },
  { slug: 'mobile-app-development', documentId: 'waeolrpsrpobauqtjd57rlzl' },
  { slug: 'hybrid-mobile-app-development', documentId: 'sk2n3j19b3a84cn79h3mc517' },
  { slug: 'ios-app-development', documentId: 'egja4rlnyrf5skqe2hcdcr09' },
  { slug: 'android-app-development', documentId: 'k6hcfe2t3urviokngplayc7n' }
];

const populateQuery = {
  populate: {
    herosection: { populate: '*' },
    servicesection: { populate: '*' },
    aboutinfo: { populate: '*' },
    whychoose: { populate: '*' },
    solution: { populate: '*' },
    extracard: { populate: '*' },
    faqdata: { populate: '*' },
  }
};

const populateQueryFallback = {
  populate: {
    herosection: { populate: '*' },
    servicesection: { populate: '*' },
    aboutinfo: { populate: '*' },
    whychoose: { populate: '*' },
    solution: { populate: '*' },
    faqdata: { populate: '*' },
  }
};

const queryStr = qs.stringify(populateQuery, { encodeValuesOnly: true });

function removeIds(obj) {
  if (Array.isArray(obj)) {
    return obj.map(removeIds);
  } else if (obj !== null && typeof obj === 'object') {
    // Check if it's a media object
    if (obj.url && obj.mime && obj.id) {
      return obj.id;
    }
    const newObj = {};
    for (const key in obj) {
      if (!['id', 'documentId', 'createdAt', 'updatedAt', 'publishedAt'].includes(key)) {
        newObj[key] = removeIds(obj[key]);
      }
    }
    return newObj;
  }
  return obj;
}

async function migrate() {
  for (const endpoint of endpoints) {
    const slug = endpoint.slug;
    const documentId = endpoint.documentId;
    try {
      console.log(`\nFetching ${slug}...`);
      let getRes = await fetch(`${STRAPI_URL}/${slug}?${queryStr}`);
      let getData = await getRes.json();
      
      if (getData.error) {
        console.log(`Failed with default query for ${slug}, retrying without extracard...`);
        const queryStrFallback = qs.stringify(populateQueryFallback, { encodeValuesOnly: true });
        getRes = await fetch(`${STRAPI_URL}/${slug}?${queryStrFallback}`);
        getData = await getRes.json();
      }
      
      const data = getData.data;
      
      if (!data) {
        console.log(`No data found for ${slug}`);
        continue;
      }
      
      const cleanedData = removeIds(data);
      
      const payloadData = cleanedData;
      delete payloadData.extracard;
      
      const componentMapping = {
        'shared.aboutinfo': 'shared.about-info',
        'shared.whychoose': 'shared.why-choose-us-component',
        'shared.solution': 'shared.solution-component',
        'shared.faqdata': 'shared.faq-component'
      };

      const mapComponents = (obj) => {
        if (Array.isArray(obj)) return obj.map(mapComponents);
        if (obj !== null && typeof obj === 'object') {
          if (obj.url && obj.mime) return obj; // media
          const newObj = {};
          
          // Ensure __component is the first key if it exists
          if (obj['__component']) {
            newObj['__component'] = componentMapping[obj['__component']] || obj['__component'];
          }
          
          for (const key in obj) {
            if (key !== '__component') {
              newObj[key] = mapComponents(obj[key]);
            }
          }
          return newObj;
        }
        return obj;
      };

      const mappedPayload = mapComponents(payloadData);
      
      const testPayload = {
        slug: mappedPayload.slug,
        herosection: mappedPayload.herosection,
        servicesection: mappedPayload.servicesection,
        aboutinfo: mappedPayload.aboutinfo,
        whychoose: mappedPayload.whychoose,
        solution: mappedPayload.solution,
        faqdata: mappedPayload.faqdata
      };
      
      console.log(`Updating ${slug} (Document ID: ${documentId}) in pages with full components...`);
      
      const postRes = await fetch(`${STRAPI_URL}/pages/${documentId}`, {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${STRAPI_TOKEN}`
        },
        body: JSON.stringify({ data: testPayload })
      });
      const postData = await postRes.json();
      
      if (postRes.ok) {
        console.log(`✅ Successfully updated ${slug}`);
      } else {
        console.error(`❌ Failed to migrate ${slug}:`, postData.error);
        if (postData.error.details && postData.error.details.errors) {
            console.error(JSON.stringify(postData.error.details.errors, null, 2));
        }
      }
    } catch (e) {
      console.error(`❌ Failed to migrate ${slug}:`, e.message);
    }
  }
  console.log('\nMigration complete.');
}

migrate();
