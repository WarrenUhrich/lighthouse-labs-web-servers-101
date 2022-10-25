const https = require('https');

const options = {
    hostname: 'the-cat-fact.herokuapp.com',
    port: 443,
    path: '/api/randomFact',
    method: 'GET'
};

const request = https.request(options, (response) => {
    // console.log(response);
    response.on('data', (data) => {
        // console.log(data);
        data = String(data);
        // console.log(data);
        const dataObj = JSON.parse(data);
        // console.log(dataObj);
        console.log('Cat Fact:', dataObj.data[0].fact);
    });
});

request.on('error', (error) => {
    console.log(error);
});

request.end();
