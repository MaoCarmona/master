const http = require('http');
const routeHandler = require('./routes');
const config = require('./config');

const server = http.createServer((req, res) => {
    routeHandler(req, res);
});

server.listen(config.port, config.hostname, () => {
    console.log(`Servidor corriendo en http://${config.hostname}:${config.port}/`);
});
