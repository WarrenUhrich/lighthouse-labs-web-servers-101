const http = require('http');

const port = 8080;

const getHome = (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`<!DOCTYPE html>
        <html>
            <head>
                <title>Home</title>
            </head>
            <body>
                <h1>Home</h1>
                <p>
                    Welcome to the homepage!
                </p>
            </body>
        </html>
    `);
};

const server = http.createServer((req, res) => {
    console.log(Date(), 'Request Received:', '\n', req.method, req.url);

    const route = `${req.method} ${req.url}`;

    if(route === 'GET /') {
        getHome(req, res);
    }
});

server.listen(port, () => {
    console.log('HTTP server is now listening on port:', port);
});
