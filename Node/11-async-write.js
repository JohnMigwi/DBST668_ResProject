const {writeFileSync} = require ('fs');
const path = require ('path');

const filepath = path.join(__dirname, 'content', 'text2.txt');

try {
    const result = writeFileSync(filepath, 'My name is John \n', {flag : 'a'}, 'utf8')
    console.log("success");    
} catch (error) {
    console.log(error, 'error Writing on file');
}