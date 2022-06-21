// node.js client program!

// Require the module.
const https = require('https');

const options = {
    hostname: 'duckduckgo.com',
    path: '/about',
    port: 443, // Use :80 if it is http
    method: 'GET'
};

// Send the request!
const request = https.request(options, (response) => {
    console.log(response);
});

// Check for errors.
request.on('error', (error) => {
    console.error(error);
});

// End the request.
request.end();
