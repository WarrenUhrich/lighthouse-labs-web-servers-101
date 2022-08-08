const http = require('http');

const PORT = 8080;

const server = http.createServer((request, response) => {
    // Server-side will log the request.
    console.log(
        request.method, // GET / POST
        request.url, // /home /about /blog/3 /
    );

    const requestString = `${request.method} ${request.url}`;

    response.writeHead(200, {'Content-Type': 'text/html'});

    switch(requestString) {
        case 'GET /':
        case 'GET /home': // if requestString === 'GET /home'
            response.end('<html><head><title>Home Page</title></head><body><h1>Home Page</h1></body></html>');
            break;
        case 'GET /about':
            response.end('<html><head><title>About Page</title></head><body><h1>About Page</h1></body></html>');
            break;
        default:
            response.writeHead(404, {'Content-Type': 'text/html'});
            response.end('<html><head><title>404: Page Not Found</title></head><body><h1>404: Page Not Found</h1></body></html>');
            break;
    }
});

server.listen(PORT, () => {
    console.log('Node.js server program is now listening on port:', PORT);
});
