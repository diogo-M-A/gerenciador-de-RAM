const http = require('http');
const host = 'http://localhost';
const port = 3001;
const stats = require('./usoRAM.js');

http.createServer((req, res) => {
    let url = req.url;

    if (url == '/'){
        res.end(JSON.stringify(stats, null, 2));
    } else {
    res.write("<h1>Working</h1>");
    }
}).listen(3001, () => console.log('server is runing in ' + host + ':' + port + stats));