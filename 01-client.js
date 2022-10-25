const https = require('https');

const options = {
    hostname: 'duckduckgo.com',
    port: 443,
    path: '/',
    method: 'GET'
};

const request = https.request(options, (response) => {
    // console.log(response);
    response.on('data', (data) => {
        // console.log(data);
        data = String(data);
        console.log(data);
    });
});

request.on('error', (error) => {
    console.log(error);
});

request.end();
