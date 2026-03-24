const http = require('http');

const createServer = (res) => {
    res.end("Hello, welcome to DevOps");
};

const h = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    createServer(res);
});

h.listen(4000, () => {
    console.log("Server is running at http://localhost:4000");
});