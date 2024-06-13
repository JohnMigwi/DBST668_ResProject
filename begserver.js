const http = require ('http');

const server = http.createServer((req, res) =>{
if (req.url === '/') {
  res.end('HI JOHN');
  return
}
else 
    res.end(`
    <h1>What do you want , go make what you want then return to homepage! </h1>
    <a href='/'> Home </a>
    `)
});

server.listen(6001);