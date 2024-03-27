const express = require('express');

///////////////////////////////////////////////////////////////////
// Configuration
///////////////////////////////////////////////////////////////////

const PORT = 8080;
const app = express();

///////////////////////////////////////////////////////////////////
// Middleware (Before checking routes)
///////////////////////////////////////////////////////////////////

/**
 * Logging Middleware
 * This middleware prints in the terminal which method / path is
 * being requested!
 */
app.use((req, res, next) => {
    console.log(`Request Received: ${req.method} ${req.url}`);
    next(); // Run next middleware (if there is one!)
});

///////////////////////////////////////////////////////////////////
// Listener
///////////////////////////////////////////////////////////////////

app.listen(PORT, () => {
    console.log(`05-express-middleware.js Express server is listening on http://localhost:${PORT}`);
});

///////////////////////////////////////////////////////////////////
// Routes (We want to be able to send our own responses!)
///////////////////////////////////////////////////////////////////

app.get('/display-array', (req, res) => {
    const animals = ['giraffe', 'rooster', 'tardigrade', 'wolf'];
    res.contentType('application/json');
    res.status(200)
    res.json(animals);
});

/**
 * Home Page
 * GET /
 */
app.get('/', (req, res) => {
    res.contentType('text/html');
    res.status(200);
    res.end(`<!DOCTYPE html>
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
        </html>`);
});

/**
 * About Page
 * GET /about
 */
app.get('/about', (req, res) => {
    res.contentType('text/html');
    res.status(200);
    res.end(`<!DOCTYPE html>
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
        </html>`);
});

///////////////////////////////////////////////////////////////////
// Middleware (Runs after checking routes...)
///////////////////////////////////////////////////////////////////

/**
 * 404: Page Not Found!
 */
app.use((req, res, next) => {
    res.contentType('text/html');
    res.status(404);
    res.end(`<!DOCTYPE html>
        <html>
            <head><title>404: Page Not Found</title></head>
            <body>
                <h1>
                    404: Page Not Found
                </h1>
                <p>
                    There was no page found at:
                    ${req.method} ${req.url}
                </p>
            </body>
        </html>`);
});
