const http = require('http');

const PORT = 5555;

const server = http.createServer((request, response) => {
    // console.log('request', request);
    // console.log('response', response);

    const method = request.method;
    const url = request.url;

    // Example: GET /about
    console.log(method, url);

    // Write status, and headers...
    response.writeHead(200, {'Content-type': 'text/html'});

    // let responseString = '<html>';
    // responseString += '<head>';

    // Write response string...
    response.end(`
        <html>
            <head><title>You asked for: ${method} ${url}</title></head>
            <body><h1>You asked for: ${method} ${url}</h1></body>
        </html>
    `);
});

server.listen(PORT, () => {
    console.log('NodeJS \'http\' server is listening on port:', PORT);
});
