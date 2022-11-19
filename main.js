const http = require('http'); 
const fs = require('fs');
const path = require('path');

const server = http.createServer ((req, res)=> {
 console.log('server works');

const createPath = (page) => path.resolve(__dirname, 'views', `${page}.html`);

let basePath = '';

switch(req.url) {
    case '/home':
    case "/index.html":
    case '/':
        basePath = createPath('index');
        res.statusCode = 200;
    break;
    case '/about':
        res.statusCode = 301;
        res.setHeader('Location', '/contacts');
        res.end();
    case '/contacts':
        basePath = createPath('contacts');
        res.statusCode = 200;
    break;
    default:
        basePath = createPath('error');
        res.statusCode = 404;
    break;
}

fs.readFile (basePath, (err,data) => {
    if (err) {
        console.log(err);
        res.statusCode = 500;
        res.end();
    }
    res.write(data);
    res.end;
    });
});

server.listen (3000, 'localhost', (error)=>{
    error ? console.log('error') : console.log('server listening port 3000');
});