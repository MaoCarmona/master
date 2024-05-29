const { handleReposRoute } = require('./repos');

const router = {
    '/repos': handleReposRoute
};

const routeHandler = (req, res) => {
    const route = router[req.url];
    if (route && req.method === 'GET') {
        route(req, res);
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Página no encontrada.\n');
    }
};

module.exports = routeHandler;
