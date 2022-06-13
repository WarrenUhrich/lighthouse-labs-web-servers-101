const http = require('http');

const PORT = 5000;

const server = http.createServer((req, res) => {
    const currentRoute = `${req.method} ${req.url}`;
    
    console.log('Request Received:', currentRoute);
    
    if (currentRoute === 'GET /') {
        res.end('Home');
    } else if (currentRoute === 'GET /about') {
        res.end('About Page!!!');
    } else {
        res.end('Not found :(');
    }
});

server.listen(PORT, () => {
    console.log('HTTP server is now listening on port:', PORT);
});