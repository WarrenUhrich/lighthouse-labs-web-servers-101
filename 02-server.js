const http = require('http');

const PORT = 8080;

const server = http.createServer((request, response) => {
    // console.log('request', request);
    // console.log('response', response);

    console.log(request.method, request.url);

    // Status code, headers object
    response.writeHead(200, {'Content-type': 'text/html'});
    response.end('<html><head><title>Hello, World!</title></head><body><h1>Hello, World!</h1></body></html>');
});

server.listen(PORT, () => {
    console.log('NodeJS http server listening on port:', PORT);
});
