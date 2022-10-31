const express = require('express');

///////////////////////////////////////////////////////////////////////////////////
// Configuration
///////////////////////////////////////////////////////////////////////////////////

const PORT = 5555;
const app = express();

///////////////////////////////////////////////////////////////////////////////////
// Middleware
///////////////////////////////////////////////////////////////////////////////////

// Basic request logging middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

///////////////////////////////////////////////////////////////////////////////////
// Listener
///////////////////////////////////////////////////////////////////////////////////

app.listen(PORT, () => {
    console.log('Express server is running on port:', PORT);
});

///////////////////////////////////////////////////////////////////////////////////
// Routes
///////////////////////////////////////////////////////////////////////////////////

app.get('/', (req, res) => {
    res.status(200);
    res.contentType('text/html');
    res.end('<html><head><title>Home Page</title></head><body><h1>Home Page</h1></body></html>');
});

app.get(['/home', '/index'], (req, res) => {
    res.redirect('/');
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

// Using this wildcard to catch all other requests as a 404
app.get('*', (req, res) => {
    res.status(404);
    res.contentType('text/html');
    res.end('<html><head><title>404: Page Not Found</title></head><body><h1>404: Page Not Found</h1></body></html>');
});
