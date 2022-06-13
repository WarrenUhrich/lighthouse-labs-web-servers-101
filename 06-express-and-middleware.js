const express = require('express');

const PORT = 7777;
const app = express();

// Middleware!
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`, Date());
    next();
});

app.get('/', (req, res) => {
    res.write(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>Home</title>
            </head>
            <body>
                <h1>Home</h1>
            </body>
        </html>
    `);
    res.send();
});

app.get('/about', (req, res) => {
    res.end(`
        <!DOCTYPE html>
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

app.listen(PORT, () => {
    console.log(
        'Express application is running on port:',
        PORT
    );
});
