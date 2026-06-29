const qs = require('qs');
fetch('https://cms.comfygen.com/api/industries?'+qs.stringify({filters:{slug:{'$eq':'healthcare-app-development'}},populate:{IndustryProblemsSection:{populate:'*'}}})).then(r=>r.json()).then(j=>console.log(j.data[0].IndustryProblemsSection[0].items[0]));
