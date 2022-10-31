const http = require('http');

const PORT = 3000;

const server = http.createServer((request, response) => {
    // console.log('request:', request);
    // console.log('response:', response);

    console.log(request.method, request.url);

    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('<html><head><title>Hello, World!</title></head><body><h1>Hello, World!</h1></body></html>');
});

server.listen(PORT, () => {
    console.log('HTTP server listening on port:', PORT);
});
