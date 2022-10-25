const http = require('http');

const PORT = 3333;

const server = http.createServer((request, response) => {
    const requestString = `${request.method} ${request.url}`;
    console.log('Request Received:', requestString);

    response.writeHead(200, {
        'Content-Type': 'text/html'
    });

    switch(requestString) {
        case 'GET /':
            response.end('<html><head><title>Home Page</title></head><body><h1>Home Page</h1></body></html>');
            break;
        case 'GET /about':
            response.end('<html><head><title>About Page</title></head><body><h1>About Page</h1></body></html>');
            break;
        default:
            response.writeHead(404, {
                'Content-Type': 'text/html'
            });
            response.end('<html><head><title>404: Page Not Found</title></head><body><h1>404: Page Not Found</h1></body></html>');
            break;
    }
});

server.listen(PORT, () => {
    console.log('Server listening on port:', PORT);
});
