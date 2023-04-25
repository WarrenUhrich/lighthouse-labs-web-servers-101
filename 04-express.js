const express = require('express');

/////////////////////////////////////////////////////////////////////
// Configuration
/////////////////////////////////////////////////////////////////////

const PORT = 7777;
const app = express();

/////////////////////////////////////////////////////////////////////
// Listener
/////////////////////////////////////////////////////////////////////

app.listen(PORT, () => {
    console.log('Express app listening on:', PORT);
});

/////////////////////////////////////////////////////////////////////
// Routes
/////////////////////////////////////////////////////////////////////

app.get('/', (req, res) => {
    res.status(200);
    res.contentType('text/html');
    res.end('<html><head><title>Home Page</title></head><body><h1>Home Page</h1></body></html>');
});

app.get('/about', (req, res) => {
    res.status(200);
    res.contentType('text/html');
    res.end('<html><head><title>All About Me!</title></head><body><h1>All About Me!</h1></body></html>');
});

app.get('/contact', (req, res) => {
    res.status(200);
    res.contentType('text/html');
    res.end('<html><head><title>Contact Us!</title></head><body><h1>Contact Us!</h1></body></html>');
});

app.get('*', (req, res) => {
    res.status(404);
    res.contentType('text/html');
    res.end('<html><head><title>404: Page Not Found</title></head><body><h1>404: Page Not Found</h1></body></html>');
});
