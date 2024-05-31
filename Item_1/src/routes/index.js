/* eslint-disable no-console */
const { handleReposRoute } = require('./repos.route');

const routes = {
    '/repos': {
        'GET': handleReposRoute
    }
};

/**
 * Processes incoming HTTP requests by matching the request URL and method to predefined routes.
 * If a match is found, it executes the corresponding handler function; otherwise, it returns a 404 error.
 * It also handles any errors that occur during the execution of the handler function by returning a 500 error.
 * @param {object} req - The HTTP request object containing details about the client's request.
 * @param {object} res - The HTTP response object used to send a response back to the client.
 */
const routeHandler = (req, res) => {
    const { url, method } = req;
    const route = routes[url];

    if (route && route[method]) {
        try {
            route[method](req, res);
        } catch (error) {
            console.error('Error handling the route:', error);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal server error.\n');
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found.\n');
    }
};

module.exports = routeHandler;
