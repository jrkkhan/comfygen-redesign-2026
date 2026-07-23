const https = require('https');

https.get('https://www.comfygen.com/', (res) => {
  let html = '';
  res.on('data', (chunk) => { html += chunk; });
  res.on('end', () => {
    // Basic regex to find script tags with JSON-LD
    const regex = /<script\s+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
    let match;
    let found = false;
    let schemas = [];
    while ((match = regex.exec(html)) !== null) {
      found = true;
      try {
        schemas.push(JSON.parse(match[1].trim()));
      } catch (e) {
        console.log("Found malformed JSON-LD:", match[1]);
      }
    }
    if(schemas.length > 0) {
      console.log(JSON.stringify(schemas, null, 2));
    } else if (!found) {
      console.log("No application/ld+json script tags found on the homepage.");
    }
  });
}).on('error', (e) => {
  console.error(e);
});
