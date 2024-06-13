const fs = require ('fs');
const path = require ('path');

const filepath = path.join(__dirname,'content','text.txt');
console.log(filepath);

try {
    const content = fs.readFileSync(filepath,'utf8');
    console.log(content);
} catch (error) {
   console.log(error, 'error reading the file'); 
}

