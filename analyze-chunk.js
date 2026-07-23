const fs = require('fs');
const content = fs.readFileSync('.next/static/chunks/0pxe0xudhx0ax.js', 'utf8');
const words = content.split(/[^\w\-]+/);
const counts = {};
words.forEach(w => {
  if (w.length > 5) {
    counts[w] = (counts[w] || 0) + 1;
  }
});
const sorted = Object.entries(counts).sort((a,b) => b[1] - a[1]);
console.log(sorted.slice(0, 30));
