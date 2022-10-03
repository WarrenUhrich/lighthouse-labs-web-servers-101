const http = require('http');

const PORT = 5050;

const server = http.createServer((request, response) => {
    // console.log('request', request);
    // console.log('response', response);

    console.log(
        request.method,
        request.url
    );

    response.writeHead(200, {'Content-Type': 'text/html'});
    // response.send();
    response.end('<html><head><title>Test</title></head><body><h1>Just Testing</h1></body></html>');
});

server.listen(PORT, () => {
    console.log('Node.js HTTP server now listening on port:', PORT);
});
