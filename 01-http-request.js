const https = require('https');

const options = {
    hostname: 'duckduckgo.com',
    path: '/about',
    port: 443, // :80 for http, :443 for https
    method: 'GET'
};

const request = https.request(options, (response) => {
    // console.log(response);

    response.on('data', (data) => {
        // console.log(data);

        process.stdout.write(data);
    });
});

request.on('error', (error) => {
    console.error(error);
});

request.end();
