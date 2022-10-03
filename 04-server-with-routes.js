const http = require('http');

const PORT = 8080;

const server = http.createServer((request, response) => {

    const requestString = `${request.method} ${request.url}`;

    console.log(requestString);

    // How do I make decisions based on the request string?
    response.writeHead(200, {'Content-Type': 'text/html'});
    switch (requestString) {
        case 'GET /': // if (requestString === 'GET /')
            response.end('<html><head><title>Homepage</title></head><body><h1>Homepage</h1></body></html>');
            break;
        case 'GET /about': // if (requestString === 'GET /about')
            response.end('<html><head><title>About Page</title></head><body><h1>About Page</h1></body></html>');
            break;
        default:
            response.writeHead(404, {'Content-Type': 'text/html'});
            response.end('<html><head><title>404 Page Not Found</title></head><body><h1>404 Page Not Found</h1></body></html>');
            break;
    }
});

server.listen(PORT, () => {
    console.log('Node.js HTTP server now listening on port:', PORT);
});
