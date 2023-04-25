// Our goal will be to receive a web page:
// duckduckgo.com/

const https = require('https');

const options = {
    hostname: 'duckduckgo.com',
    path: '/',
    port: 443, // http:80, https:443
    method: 'GET',
};

const request = https.request(options, (response) => {
    // console.log(response);
    response.on('data', (data) => {
        // console.log(data);
        data = String(data); // Convert to JS string from raw binary
        console.log(data);
    });
});

request.end();
