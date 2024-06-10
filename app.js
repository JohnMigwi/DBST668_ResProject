const http = require ('http');

const server = http.createServer((req, res) => {
   if(req.url === '/'){
    res.end('HOMEPAGE')
   }
  else if(req.url === '/about'){
    res.end('ABOUT PAGE')
   }
   else if (req.url === '/check'){
    res.end('make payments')
   }
   else
    res.end(
        `
         <h1>ERROR !</h1>
         <p>page not found</p>  `
    )
   
});

server.listen(5000);