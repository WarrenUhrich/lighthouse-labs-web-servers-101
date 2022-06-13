const http = require('http');

const PORT = 8000;

const server = http.createServer((request, response) => {
    console.log(
        Date(),
        'Request was received:',
        request.method,
        request.url
    );

    response.end('Hello, World!');
});

server.listen(PORT, () => {
    console.log('HTTP server is now listening on port:', PORT);
});
