const http = require('http');

const PORT = 8080;

const server = http.createServer((req, res) => {
    console.log('Request was received:', req.method, req.url);
    
    const formattedRequest = `${req.method} ${req.url}`;

    res.writeHead(200, {'Content-Type': 'text/html'});

    // ROUTES
    if ('GET /home' === formattedRequest) {
        res.end(`
            <html>
                <head><title>Welcome Home!</title></head>
                <body><h1>Welcome Home!</h1></body>
            </html>
        `);
    } else if ('GET /about' === formattedRequest) {
        res.end(`
            <html>
                <head><title>All About Me!</title></head>
                <body><h1>All About Me!</h1></body>
            </html>
        `);
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end(`
            <html>
                <head><title>404: Page Not Found</title></head>
                <body><h1>404: Page Not Found</h1></body>
            </html>
        `);
    }
});

server.listen(PORT, () => {
    console.log(
        '03-server-with-routes.js Server listening on port:',
        PORT
    );
});
