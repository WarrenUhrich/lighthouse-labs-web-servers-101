const http = require('http');

const PORT = 3000;

const server = http.createServer((request, response) => {
    // console.log(request);
    console.log(
        Date(),
        'Request was received:',
        request.method, // GET / POST
        request.url, // /home /about /blog/3 /
    );
});

server.listen(PORT, () => {
    console.log('Node.js server program is now listening on port:', PORT);
});
