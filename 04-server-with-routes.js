const http = require('http');

const PORT = 5000;

const server = http.createServer((request, response) => {
    // Server-side will log the request.
    console.log(
        request.method, // GET / POST
        request.url, // /home /about /blog/3 /
    );

    // Send a response to the client.
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('<html><head><title>Home Page</title></head><body><h1>Home Page</h1></body></html>');
});

server.listen(PORT, () => {
    console.log('Node.js server program is now listening on port:', PORT);
});
