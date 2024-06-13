const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer((req, res) =>{
    const url = (req.url);
    if (url === '/') {
        const content = fs.readFileSync(path.join(__dirname, './index.html'))
        res.writeHead(200, {'content-type': 'application/json'})
        res.write(content)
        res.end();
    } else if (url === '/about') {
        res.writeHead(200, {'content-type': 'text/plain'})
        res.write(`<h1> Hello this is the About-Page </h1>`)
        res.end();
    } else {
        res.writeHead(404, {'content-type': 'text/html'})
        res.write(`<h1> error!!! DUMB YOU</h1>`)
        res.end();
    }   
});
server.listen(5000, ()=>console.log("listening to port 5000..."));