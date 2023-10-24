const express = require('express');

////////////////////////////////////////////////////////////////////////////////////
// Configuration
////////////////////////////////////////////////////////////////////////////////////

const PORT = 8080;
const app = express();

////////////////////////////////////////////////////////////////////////////////////
// Listener
////////////////////////////////////////////////////////////////////////////////////

app.listen(PORT, () => {
    console.log('Express app is listening on port:', PORT);
});

////////////////////////////////////////////////////////////////////////////////////
// Routes
////////////////////////////////////////////////////////////////////////////////////

app.get('/sample-json', (req, res) => {
    res.contentType('application/json');
    res.status(200);
    // res.end(`{"message": "Hello, World!"}`);
    res.json({message: 'Hello, World!'});
});

app.get('/', (req, res) => {
    res.contentType('text/html');
    res.status(200);
    // res.send('<html>');
    // res.send('<head>');
    // res.send('<title>Home</title>');
    // res.send('</head>');
    // res.send('<body>');
    // res.send('<h1>Home</h1>');
    // res.send('</body>');
    // res.send('</html>');
    res.end(`
        <html>
            <head>
                <title>Home</title>
            </head>
            <body>
                <h1>Home</h1>
            </body>
        </html>
    `);
});

app.get('/about', (req, res) => {
    res.contentType('text/html');
    res.status(200);
    res.end(`
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

app.get('/weather', (req, res) => {
    const weatherData = null;

    if(weatherData) {
        res.status(200).end('<html></html>');
    } else {
        res.status(500).end('<html><head><title>500 Server Error - Oh no!</title></head><body><h1>500 Server Error - Oh no!</h1></body></html>');
    }
});

// 404 - non-existant pages.
app.get('/*', (req, res) => {
    res.status(404);
    res.contentType('text/html');
    res.end(`
        <html>
            <head>
                <title>404 PAGE NOT FOUND: ${req.method} ${req.url}</title>
            </head>
            <body>
                <h1>404 PAGE NOT FOUND: ${req.method} ${req.url}</h1>
            </body>
        </html>
    `);
});
