const http = require('http');

const PORT = 3007;

const server = http.createServer((request, response) => {
    const requestString = `${request.method} ${request.url}`;
    console.log(requestString);

    // Decision: if or switch
    switch(requestString) {
        case 'GET /':
            response.writeHead(200, {'Content-type': 'text/html'});
            response.end('<html><head><title>Home Page</title></head><body><h1>Home Page</h1></body></html>');
            break;
        case 'GET /about':
            response.writeHead(200, {'Content-type': 'text/html'});
            response.end('<html><head><title>All About Me!</title></head><body><h1>All About Me!</h1></body></html>');
            break;
        case 'GET /contact':
            response.writeHead(200, {'Content-type': 'text/html'});
            response.end('<html><head><title>Contact Us</title></head><body><h1>Contact Us</h1></body></html>');
            break;
        default:
            response.writeHead(404, {'Content-type': 'text/html'});
            response.end('<html><head><title>404: Page Not Found</title></head><body><h1>404: Page Not Found</h1></body></html>');
            break;
    }
});

server.listen(PORT, () => {
    console.log('NodeJS http server listening on port:', PORT);
});
