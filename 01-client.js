// Our goal is to reach example.com

const http = require('http');

const options = {
    hostname: 'example.com',
    path: '/',
    port: 80, // http:80, https:443
    method: 'GET' // GET or POST
};

const request = http.request(options, (response) => {
    // console.log(response);
    response.on('data', (webPage) => {
        // console.log(webPage);
        const htmlString = String(webPage);
        console.log(htmlString);
    });
});

request.end();
