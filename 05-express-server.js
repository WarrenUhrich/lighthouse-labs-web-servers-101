const express = require('express');

const PORT = 8080;
const app = express();

app.get('/', (req, res) => {
    res.status(200);
    res.contentType('text/html');
    res.end('<html><head><title>Home Page</title></head><body><h1>Home Page</h1></body></html>');
});

app.get('/about', (req, res) => {
    res.status(200);
    res.contentType('text/html');
    res.end('<html><head><title>About Page</title></head><body><h1>About Page</h1></body></html>');
});

app.get('/contact', (req, res) => {
    res.status(200);
    res.contentType('text/html');
    res.end('<html><head><title>Contact Page</title></head><body><h1>Contact Page</h1></body></html>');
});

app.listen(PORT, () => {
    console.log('Express server is listening on port:', PORT);
});
