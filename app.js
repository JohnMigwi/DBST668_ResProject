const fs = require('fs');

const getText = (path) =>{
    return new Promise((resolve, reject)=>{

        fs.readFile('./content/text.txt', 'utf8', (err, data) =>{
            if (err) {
               reject(err);
            } else {
               resolve(data);
            }
        });
    })
}


getTex('./content/text.txt').then(result =>console.log(result))