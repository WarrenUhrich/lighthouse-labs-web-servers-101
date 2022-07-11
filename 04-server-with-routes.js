const http = require('http');

const PORT = 5000;

const server = http.createServer((request, response) => {
    // Print info for debugging on server-side.
    console.log(
        'Request was received:',
        request.method, // GET / POST
        request.url // /home /about /blog/3
    );
    
    // Send response to the client.
    
    response.writeHead(200, {'Content-Type': 'text/html'});

    // Routes:
    const formattedRequest = `${request.method} ${request.url}`;
    switch(formattedRequest) {
        case 'GET /':
            response.end('<html><head><title>Home Page</title></head><body><h1>Home Page</h1></body></html>');
            break;
        case 'GET /about':
            response.end('<html><head><title>About Page</title></head><body><h1>About Page</h1></body></html>');
            break;
        case 'GET /contact':
            response.end('<html><head><title>Contact Page</title></head><body><h1>Contact Page</h1></body></html>');
            break;
        default:
            response.writeHead(404, {'Content-Type': 'text/html'});
            response.end('<html><head><title>404: Page Not Found</title></head><body><h1>404: Page Not Found</h1></body></html>');
            break;
    }
});

server.listen(PORT, () => {
    console.log('Node.js server is now listening on port:', PORT);
});
