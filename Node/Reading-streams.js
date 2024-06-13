const {createReadStream} = require ('fs')

const stream = createReadStream('./content/create-big-file.js')

stream.on('data', (result)=>{
  console.log(result);
});