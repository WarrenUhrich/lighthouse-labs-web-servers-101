const https = require('https');

const options = {
    hostname: 'duckduckgo.com',
    path: '/', // (everything after host)
    port: 443,
    method: 'GET' // GET or POST
};

const request = https.request(options, (response) => {
    // console.log(response);
    response.on('data', (data) => {
        console.log(String(data));
        // process.stdout.write(data);
    });
});

request.on('error', (error) => {
    console.error(error);
});

request.end();
