/* eslint-disable no-console */
const { createServer } = require('http');

const routeHandler = require('./routes');
const { port, hostname } = require('./config');

const server = createServer((req, res) => {
    routeHandler(req, res);
});

server.listen(port, hostname, () => {
    console.log(`Servidor corriendo en http://${hostname}:${port}/`);
});
