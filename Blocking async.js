const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end("Home");
    }
    //BLOCKING CODE
    else if (req.url === '/about'){

        res.end("about");
    }
    else
     res.end('error');
});
server.listen(5000, ()=>{
    console.log("server is listening to port 5000");
});