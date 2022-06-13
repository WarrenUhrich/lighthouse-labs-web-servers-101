const http = require('http');

const PORT = 8080;

const server = http.createServer((req, res) => {
    const currentRoute = `${req.method} ${req.url}`;
    
    console.log('Request Received:', currentRoute);

    res.writeHead(200, {'Content-Type': 'text/html'});
    
    if (currentRoute === 'GET /') {
        res.end('<html><head><title>Home</title></head><body><h1>Home</h1></body></html>');
    } else if (currentRoute === 'GET /about') {
        res.end('<html><head><title>About Page</title></head><body><h1>About Page</h1></body></html>');
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('<html><head><title>404: Page Not Found</title></head><body><h1>404: Page Not Found</h1></body></html>');
    }
});

server.listen(PORT, () => {
    console.log('HTTP server is now listening on port:', PORT);
});