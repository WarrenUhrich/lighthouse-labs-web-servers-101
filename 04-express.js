const express = require('express');

const PORT = 7777;
const app = express();

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

app.listen(PORT, () => {
    console.log('Express app running on port:', PORT);
});
