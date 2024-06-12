const {writeFileSync} = require('fs');
 for (let i = 0; i < 1000; i++) {
    const write = writeFileSync('./content/big-file.txt', 
        `Hello world ${i} \n`, {flag:'a'}, 'utf8'
    )
 }
