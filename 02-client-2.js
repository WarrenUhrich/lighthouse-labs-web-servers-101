const https = require('https');

const options = {
    hostname: 'the-cat-fact.herokuapp.com',
    path: '/api/randomfact', // (everything after host)
    port: 443,
    method: 'GET' // GET or POST
};

const request = https.request(options, (response) => {
    response.on('data', (data) => {
        process.stdout.write(data);
    });
});

request.on('error', (error) => {
    console.error(error);
});

request.end();
