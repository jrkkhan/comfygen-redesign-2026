const fs = require('fs');
const path = require('path');

const walk = (dir) => {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx')) {
      results.push(file);
    }
  });
  return results;
};

const files = walk('src/components');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  
  // Replace <h1, <h2, <h3 className="..." with className="text-balance ..."
  // Exclude those that already have text-balance
  content = content.replace(/<(h[1-6])\s+className=(["`'])((?:(?!\btext-balance\b).)*?)\2/g, '<$1 className=$2text-balance $3$2');
  
  // Specifically target headings that might use string literals or template literals
  
  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log('Updated ' + file);
  }
});
console.log('Done');
