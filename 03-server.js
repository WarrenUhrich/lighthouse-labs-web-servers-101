const http = require('http');

const PORT = 6100;

const server = http.createServer((request, response) => {
    // console.log(request);
    const requestString = `${request.method} ${request.url}`;
    console.log('Request Received:', requestString);

    // Write headers / status code.
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });

    // Send the reponse.
    response.end('<html><head><title>Hello, World!</title></head><body><h1>Hello, World!</h1></body></html>');
});

server.listen(PORT, () => {
    console.log('Server listening on port:', PORT);
});
