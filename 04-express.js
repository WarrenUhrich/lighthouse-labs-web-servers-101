const express = require('express');

///////////////////////////////////////////////////////////////////
// Configuration
///////////////////////////////////////////////////////////////////

const PORT = 8080;
const app = express();

///////////////////////////////////////////////////////////////////
// Listener
///////////////////////////////////////////////////////////////////

app.listen(PORT, () => {
    console.log(`04-express.js Express server is listening on http://localhost:${PORT}`);
});

///////////////////////////////////////////////////////////////////
// Routes (We want to be able to send our own responses!)
///////////////////////////////////////////////////////////////////

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
