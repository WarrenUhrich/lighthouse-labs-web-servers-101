const http = require('http');

const PORT = 5050;

// GET /
const getHome = (req, res) => {
    res.writeHead(200, {'Content-type': 'text/html'});
    res.end(`
        <!DOCTYPE html>
        <html>
            <head><title>Welcome Home</title></head>
            <body>
                <h1>
                    Welcome Home!
                </h1>
                <p>
                    You found our beautiful home page!
                </p>
            </body>
        </html>
    `);
};

// GET /about
const getAbout = (req, res) => {
    res.writeHead(200, {'Content-type': 'text/html'});
    res.end(`
        <!DOCTYPE html>
        <html>
            <head><title>All About Us!</title></head>
            <body>
                <h1>
                    All About Us!
                </h1>
                <p>
                    We are a web development school called Lighthouse Labs!
                </p>
            </body>
        </html>
    `);
};

// GET /
const get404 = (req, res) => {
    res.writeHead(404, {'Content-type': 'text/html'});
    res.end(`
        <!DOCTYPE html>
        <html>
            <head><title>404: Page Not Found</title></head>
            <body>
                <h1>
                    404: Page Not Found
                </h1>
                <p>
                    You failed to reach: ${req.method} ${req.url}
                </p>
                <nav>
                    <a href="/">Return Home</a>
                </nav>
            </body>
        </html>
    `);
};

// If we receive a request, our function will run:
const server = http.createServer((request, response) => {

    const method = request.method;
    const url = request.url;

    const route = `${method} ${url}`;

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
    console.log(
        `03-routes.js http server listening on http://localhost:${PORT}`
    );
});
