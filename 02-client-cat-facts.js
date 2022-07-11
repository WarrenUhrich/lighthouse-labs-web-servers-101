// Client program developed in Node.js!

const https = require('https'); // Require the HTTPS module.

// Let the module know which resource we want (form our request.)
const options = {
    hostname: 'cat-fact.herokuapp.com',
    path: '/facts',
    port: 443, // http is :80; https is :443
    method: 'GET'
};

// Submit the request!
const request = https.request(options, (response) => {
    // Listen for data; if data, print it to the terminal.
    response.on('data', (data) => {
        process.stdout.write(data); // Write response string to terminal.
    });
});

// If there is an error, print it in the console.
request.on('error', (error) => {
    console.error(error);
});

// End the request (or the program will continue listening for response data.)
request.end();
