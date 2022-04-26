const https = require('https');

const options = {
    hostname: 'cat-fact.herokuapp.com',
    path: '/facts',
    port: 443,
    method: 'GET'
};

const req = https.request(options, (res) => {
    res.on('data', (data) => {
        process.stdout.write(data);
    });
});

req.on('error', (error) => {
    console.error(error);
});

req.end();
