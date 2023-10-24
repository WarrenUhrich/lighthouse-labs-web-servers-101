const http = require('http');

const PORT = 7777;

// GET /
const getHome = (req, res) => {
    res.writeHead(200, {'Content-type': 'text/html'});
    res.end(`
        <html>
            <head><title>Home</title></head>
            <body><h1>Home</h1></body>
        </html>
    `);
};

// GET /about
const getAbout = (req, res) => {
    res.writeHead(200, {'Content-type': 'text/html'});
    res.end(`
        <html>
            <head><title>About</title></head>
            <body><h1>About</h1></body>
        </html>
    `);
};

// GET /* (that doesn't match a route)
const get404 = (req, res) => {
    res.writeHead(404, {'Content-type': 'text/html'});
    res.end(`
        <html>
            <head><title>404; Page Not Found: ${req.method} ${req.url}</title></head>
            <body><h1>404; Page Not Found: ${req.method} ${req.url}</h1></body>
        </html>
    `);
};

const server = http.createServer((request, response) => {
    const method = request.method;
    const url = request.url;
    const route = `${method} ${url}`;
    // Example: GET /about
    console.log(route);

    switch(route) {
        case 'GET /':
            getHome(request, response);
            break;
        case 'GET /about':
            getAbout(request, response);
            break;
        default:
            get404(request, response);
            break;
    }
});

server.listen(PORT, () => {
    console.log('NodeJS \'http\' server is listening on port:', PORT);
});
