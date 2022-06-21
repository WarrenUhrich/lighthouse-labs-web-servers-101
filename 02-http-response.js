// Web Server program!

const http = require('http');

const PORT = 3000;

// Callback here, runs when we receive a request.
const server = http.createServer((request, response) => {
    // Outputting client request data.
    console.log(
        Date(),
        'Request was received:',
        request.method,
        request.url
    );
    // Sending a response to the client.
    response.end('Hello, World!');
});

// The server must listen for requests.
server.listen(PORT, () => {
    console.log(
        '02-http-response.js Server listening on port:',
        PORT
    );
});
