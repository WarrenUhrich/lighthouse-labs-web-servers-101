const http = require('http');

const PORT = 3000;

const server = http.createServer((request, response) => {
    // Print info for debugging on server-side.
    console.log(
        Date(),
        'Request was received:',
        request.method, // GET / POST
        request.url // /home /about /blog/3
    );
    // Send response to the client.
    response.end('Hello, World! This is a server response.');
});

server.listen(PORT, () => {
    console.log('Node.js server is now listening on port:', PORT);
});
