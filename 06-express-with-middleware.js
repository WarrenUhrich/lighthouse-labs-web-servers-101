const express = require('express');

/////////////////////////////////////////////////////////////////////////////////////
// Configuration
/////////////////////////////////////////////////////////////////////////////////////

const PORT = 7777;
const app = express();

/////////////////////////////////////////////////////////////////////////////////////
// Middleware
/////////////////////////////////////////////////////////////////////////////////////

// Logging middleware.
app.use((req, res, next) => {
    console.log(
        'Request was received:',
        req.method, // GET / POST
        req.url // /home /about /blog/3
    );
    next(); // Continue to next middleware!
});

/////////////////////////////////////////////////////////////////////////////////////
// Routes
/////////////////////////////////////////////////////////////////////////////////////

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

app.get('/contact', (req, res) => {
    res.status(200);
    res.contentType('text/html');
    res.end('<html><head><title>Contact Page</title></head><body><h1>Contact Page</h1></body></html>');
});

/////////////////////////////////////////////////////////////////////////////////////
// 404: Page Not Found
/////////////////////////////////////////////////////////////////////////////////////

app.use((req, res) => {
    res.status(404);
    res.contentType('text/html');
    res.end('<html><head><title>404: Page Not Found</title></head><body><h1>404: Page Not Found</h1></body></html>');

});

/////////////////////////////////////////////////////////////////////////////////////
// Server Listener
/////////////////////////////////////////////////////////////////////////////////////

app.listen(PORT, () => {
    console.log('Express server is listening on port:', PORT);
});
