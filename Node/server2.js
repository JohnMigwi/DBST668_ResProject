const http = require ('http')

const server = http.createServer()

server.on('request',(req, res)=>{
    res.end(`Hello world`)
})

server.listen(5000);