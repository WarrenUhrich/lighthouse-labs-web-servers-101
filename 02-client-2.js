const https = require('https');

// https://the-cat-fact.herokuapp.com/api/randomfact

const options = {
    hostname: 'the-cat-fact.herokuapp.com',
    path: '/api/randomfact',
    port: 443, // http: 80; https: 443
    method: 'GET'
};

const request = https.request(options, (response) => {
    response.on('data', (data) => {
        const catFactObj = JSON.parse(data);

        // const fact = catFactObj.data[0].fact;

        const facts = catFactObj.data;

        const fact = facts[0].fact;

        console.log(fact);
    });
});

request.on('error', (error) => {
    console.log(error);
});

request.end();
