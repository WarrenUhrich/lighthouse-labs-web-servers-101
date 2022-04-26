const http = require('http');

const port = 8080;

const server = http.createServer((req, res) => {
    console.log(Date(), 'Request Received:', '\n', req.method, req.url);

    res.end('Hello, World!');
});

server.listen(port, () => {
    console.log('HTTP server is now listening on port:', port);
});
