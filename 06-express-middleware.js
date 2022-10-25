const express = require('express');

///////////////////////////////////////////////////////////////////////////////////
// Configuration
///////////////////////////////////////////////////////////////////////////////////

const PORT = 7777; // Is this the Minecraft port?
const app = express();

///////////////////////////////////////////////////////////////////////////////////
// Middleware
// This will be functions that run before handling a response.
///////////////////////////////////////////////////////////////////////////////////

// Our logger!
app.use((req, res, next) => {
    console.log(`Request Received: ${req.method} ${req.url}`);
    next();
});

///////////////////////////////////////////////////////////////////////////////////
// Listener
///////////////////////////////////////////////////////////////////////////////////

app.listen(PORT, () => {
    console.log('Express server running on:', PORT);
});

///////////////////////////////////////////////////////////////////////////////////
// Routes
///////////////////////////////////////////////////////////////////////////////////

app.get('/', (req, res) => {
    res.status(200); // 200 is success
    res.contentType('text/html');
    res.end('<html><head><title>Home Page</title></head><body><h1>Home Page</h1></body></html>');
});

app.get('/about', (req, res) => {
    res.status(200);
    res.contentType('text/html');
    res.end('<html><head><title>About Page</title></head><body><h1>About Page</h1></body></html>');
});

app.get('*', (req, res) => {
    res.status(404);
    res.contentType('text/html');
    res.end('<html><head><title>404: Page Not Found</title></head><body><h1>404: Page Not Found</h1></body></html>');
});
