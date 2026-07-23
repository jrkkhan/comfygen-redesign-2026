const fs = require('fs');
const path = 'src/components/common/MegaMenu.tsx';
let content = fs.readFileSync(path, 'utf8');

// replace <a with <Link onClick={handleClose}
content = content.replace(/<a /g, '<Link onClick={handleClose} ');
content = content.replace(/<a\n/g, '<Link\nonClick={handleClose}\n');

// replace </a> with </Link>
content = content.replace(/<\/a>/g, '</Link>');

fs.writeFileSync(path, content);
console.log('Successfully replaced links.');
