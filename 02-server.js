const http = require('http');

const PORT = 7777;

// When a request comes in, our function will be run.
// request: object with info about what the client is requesting
// response: object with features to help us send a response
const server = http.createServer((request, response) => {
    // console.log('request:', request);
    // console.log('response:', response);

    const method = request.method; // METHOD (GET/POST)
    const url = request.url;       // PATH // url the client is asking for
    console.log(`${method} ${url}`);

    // Write status and headers...
    response.writeHead(200, {
        'Content-type': 'text/html'
    });

    // Write a body of content, and send the response...
    response.end(`
        <!DOCTYPE html>
        <html>
            <head><title>You asked for: ${method} ${url}</title></head>
            <body>
                <h1>
                    You asked for: ${method} ${url}
                </h1>
            </body>
        </html>
    `);
});

server.listen(PORT, () => {
    console.log('NodeJS http server now listening on PORT:', PORT);
});
