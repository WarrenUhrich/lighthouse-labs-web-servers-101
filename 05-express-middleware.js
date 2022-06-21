const express = require('express');

const PORT = 7777;
const app = express();

// Logging Middleware.
app.use((req, res, next) => {
    console.log(`REQUEST: ${req.method} ${req.url}`);
    next(); // Next middleware!
});

// Redirect to Home.
// app.use((req, res, next) => {
//     console.log(`REQUEST: ${req.method} ${req.url}`);
//     if ('GET /' === `${req.method} ${req.url}`) {
//         res.redirect('/home');
//     } else {
//         next(); // Next middleware!
//     }
// });

app.get(['/', '/index', '/homes'], (req, res) => {
    res.status(301);
    res.redirect('/home');
});

app.get('/home', (req, res) => {
    res.status(200);
    res.contentType('text/HTML');
    res.end(`
        <html>
            <head><title>Welcome Home!</title></head>
            <body><h1>Welcome Home!</h1></body>
        </html>
    `);
});

app.get('/about', (req, res) => {
    res.status(200);
    res.contentType('text/HTML');
    res.end(`
        <html>
            <head><title>About Me!</title></head>
            <body><h1>About Me!</h1></body>
        </html>
    `);
});

// 404 Catch-all (not found) middleware.
app.use((req, res, next) => {
    res.status(404);
    res.contentType('text/html');
    res.end(`
        <html>
            <head><title>404: Page Not Found</title></head>
            <body><h1>404: Page Not Found</h1></body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log('Express app running on port:', PORT);
});
