const http = require('http');

const PORT = 8080;

const server = http.createServer((req, res) => {
    console.log('Request was received:', req.method, req.url);
    
    const formattedRequest = `${req.method} ${req.url}`;

    // ROUTES
    if ('GET /home' === formattedRequest) {
        res.end('Home Page');
    } else if ('GET /about' === formattedRequest) {
        res.end('All About Me!');
    } else {
        res.end('Page Not Found');
    }
});

server.listen(PORT, () => {
    console.log(
        '03-server-with-routes.js Server listening on port:',
        PORT
    );
});
