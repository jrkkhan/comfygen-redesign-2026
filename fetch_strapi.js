const fs = require('fs');

async function main() {
  let allSolutions = [];
  let page = 1;
  let pageCount = 1;

  do {
    const res = await fetch(`https://cms.comfygen.com/api/solutions?populate[ClonesSection][populate]=*&pagination[page]=${page}&pagination[pageSize]=100`, {
      headers: {
        'Authorization': 'Bearer 05b641b6bd436ba37bf7c393f7adc1ddbf79ff5ed12a81df2eb18d524050229569fc9103c4be2013a26ea0f559904eeb5efe24e232f57181182e2e8ddbc62cc9e4510565c43f1a5ff792e42d190a2bd7785874a650c55c4e5a7f26e450c928ffaae757a5093ba9821d5490ebaab628b7d9ed1d3cdcda01b97eac177f3d6a52f8'
      }
    });
    const data = await res.json();
    allSolutions = allSolutions.concat(data.data);
    pageCount = data.meta.pagination.pageCount;
    page++;
  } while (page <= pageCount);

  let found = false;
  for (const item of allSolutions) {
    if (item.ClonesSection) {
      console.log(`ClonesSection for slug ${item.slug}:`);
      console.log(JSON.stringify(item.ClonesSection, null, 2));
      found = true;
    }
  }
  if (!found) console.log("No ClonesSection found in any solution across all pages.");
}

main().catch(console.error);
