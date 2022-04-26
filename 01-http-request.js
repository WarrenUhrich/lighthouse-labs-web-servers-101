const https = require('https');

const options = {
    hostname: 'duckduckgo.com',
    path: '/',
    port: 443,
    method: 'GET'
};

// Making the request (requires req.end() to finalize and send.)
const req = https.request(options, (res) => {
    // console.log('HTTP request result object:', res);

    res.on('data', (data) => {
        process.stdout.write(data); // Writing data, if received, to the terminal.
    });
});

// Output any errors.
req.on('error', (error) => {
    console.error(error);
});

req.end(); // This ends and sends the request.
