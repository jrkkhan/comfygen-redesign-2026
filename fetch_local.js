const fs = require('fs');
async function testQuery(queryString) {
  const res = await fetch(`https://cms.comfygen.com/api/solutions?pagination[pageSize]=100&${queryString}`, {
    headers: {
      'Authorization': 'Bearer 05b641b6bd436ba37bf7c393f7adc1ddbf79ff5ed12a81df2eb18d524050229569fc9103c4be2013a26ea0f559904eeb5efe24e232f57181182e2e8ddbc62cc9e4510565c43f1a5ff792e42d190a2bd7785874a650c55c4e5a7f26e450c928ffaae757a5093ba9821d5490ebaab628b7d9ed1d3cdcda01b97eac177f3d6a52f8'
    }
  });
  console.log("Status:", res.status);
  const data = await res.json();
  if (data.data) {
     const delivery = data.data.find(d => d.slug === 'delivery-app-development');
     console.log(JSON.stringify(delivery.ClonesSection, null, 2));
  }
}
testQuery("populate[ClonesSection][populate][CloneItems][populate]=*").catch(console.error);
