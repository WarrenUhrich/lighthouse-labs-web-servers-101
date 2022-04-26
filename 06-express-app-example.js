const express = require('express');

const app = express();
const port = 8000;

// Custom middleware!
app.use((req, res, next) => {
    console.log(Date(), 'Request Received:', '\n', req.method, req.url);
    next(); // Run the next middleware (if there is one.)
});

app.get('/', (req, res) => {
    res.write(`<!DOCTYPE html>
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
    res.send();
});

app.get('/about', (req, res) => {
    res.write(`<!DOCTYPE html>
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
    res.send();
});

app.listen(port, () => {
    console.log('Express app is listening on port:', port);
});
