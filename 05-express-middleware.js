const express = require('express');

////////////////////////////////////////////////////////////////////////////////////
// Configuration
////////////////////////////////////////////////////////////////////////////////////

const PORT = 5050;
const app = express();

////////////////////////////////////////////////////////////////////////////////////
// Middleware
////////////////////////////////////////////////////////////////////////////////////

// Traffic logger middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); // Please keep going to the next middleware...
});

////////////////////////////////////////////////////////////////////////////////////
// Listener
////////////////////////////////////////////////////////////////////////////////////

app.listen(PORT, () => {
    console.log('Express app is listening on port:', PORT);
});

////////////////////////////////////////////////////////////////////////////////////
// Routes
////////////////////////////////////////////////////////////////////////////////////

app.get('/api/users', (req, res) => {
    const users = [
        {user: 'john'},
        {user: 'quinn'},
        {user: 'jane'},
        {user: 'bob'},
        {user: 'sam'},
        {user: 'timothy'},
    ];

    res.contentType('application/json');
    res.json(users);
});

app.get('/', (req, res) => {
    res.contentType('text/html');
    res.status(200);
    res.end(`
        <html>
            <head>
                <title>Home</title>
            </head>
            <body>
                <h1>Home</h1>
            </body>
        </html>
    `);
});

app.get('/about', (req, res) => {
    res.contentType('text/html');
    res.status(200);
    res.end(`
        <html>
            <head>
                <title>About</title>
            </head>
            <body>
                <h1>About</h1>
            </body>
        </html>
    `);
});

// 404 - non-existant pages.
app.get('/*', (req, res) => {
    res.status(404);
    res.contentType('text/html');
    res.end(`
        <html>
            <head>
                <title>404 PAGE NOT FOUND: ${req.method} ${req.url}</title>
            </head>
            <body>
                <h1>404 PAGE NOT FOUND: ${req.method} ${req.url}</h1>
            </body>
        </html>
    `);
});
