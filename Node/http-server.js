const http = require('http');

const server = http.createServer((req, res) =>{
     res.writeHead(200, {
        'encoding':'utf8',
        'content-type': 'text/html'
     })
     res.write(`<h1>The real hello world</h1>`)
     res.end();
});

server.listen(5000, ()=>console.log("listening to port 5000..."));