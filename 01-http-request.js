const https = require('https');

const options = {
    hostname: 'duckduckgo.com',
    path: '/',
    port: 80,
    method: 'GET'
};

const req = https.request(options, (res) => {
    console.log('HTTP request result object:', res);
});
