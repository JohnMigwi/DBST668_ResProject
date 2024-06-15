//why we dont prefer http servers

const http = require('http');
const fs = require('fs');
const path = require('path');


const styles = fs.readFileSync('../node-express-course/02-express-tutorial/navbar-app/styles.css')
const image = fs.readFileSync('../node-express-course/02-express-tutorial/navbar-app/logo.svg')

const server = http.createServer((req, res) =>{
    const url = (req.url);
    console.log(url);
    if (url === '/') {
        const content = fs.readFileSync(path.join(__dirname, '../node-express-course/02-express-tutorial/navbar-app/index.html'))
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(content)
        res.end();

    } else if (url === '/styles.css') {
        res.writeHead(200, {'content-type': 'text/css'})
        res.write(styles)
        res.end();

    } else if (url === '/log.csv') {
        res.writeHead(200, {'content-type': 'svg/xml'})
        res.write(image)
        res.end();


    } else {
        res.writeHead(404, {'content-type': 'text/html'})
        res.write(`<h1> error!!! DUMB YOU</h1>`)
        res.end();
    }   
});
server.listen(5000, ()=>console.log("listening to port 5000..."));