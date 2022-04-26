const http = require('http');

const port = 5000;

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

const getAbout = (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`<!DOCTYPE html>
        <html>
            <head>
                <title>About</title>
            </head>
            <body>
                <h1>About</h1>
                <p>
                    This is our test web server app! Congratulations.
                </p>
            </body>
        </html>
    `);
};

const get404 = (req, res) => {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end(`<!DOCTYPE html>
        <html>
            <head>
                <title>404: Resource Not Found</title>
            </head>
            <body>
                <h1>404: Resource Not Found</h1>
                <p>
                    We could not find what you are looking for!
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
    } else if(route === 'GET /about') {
        getAbout(req, res);
    } else {
        get404(req, res);
    }
});

server.listen(port, () => {
    console.log('HTTP server is now listening on port:', port);
});
