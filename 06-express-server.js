const express = require('express');

const PORT = 5050;
const app  = express();

app.listen(PORT, () => {
    console.log(`Express application is now listening: http://localhost:${PORT}`);
});

app.get(['/', '/home'], (req, res) => {
    res.status(200);
    res.contentType('text/html');
    res.end('<html><head><title>Home Page</title></head><body><h1>Home Page</h1></body></html>');
});

app.get('/about', (req, res) => {
    res.status(200);
    res.contentType('text/html');
    res.end('<html><head><title>About Page</title></head><body><h1>About Page</h1></body></html>');
});
