const http = require ('http')
const fs= require ('fs')
const { error } = require('console')

const server = http.createServer()
server.on('request', (req, res)=>{
    const stream = fs.createReadStream('./content/big-file.txt', 'utf8')
    stream.on('open', ()=>{
       stream.pipe(res);
    })
    stream.on('error', ()=>console.log(error))   
})

server.listen(5000);
