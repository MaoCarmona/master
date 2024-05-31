const { getPopularRepos } = require('../api/github');
const { serializeRepos } = require('../utils/serializer.util');
const { handleError } = require('../utils/errorHandler.util');
const { githubUsername } = require('../config');

/**
 * Handles the route for fetching popular repositories.
 * 
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise} A promise that resolves when the route handling is complete.
 */
const handleReposRoute = async (req, res) => {
    try {
        const repos = await getPopularRepos(req.user || githubUsername);
        const serializedResponse = serializeRepos(repos);

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ repositories: serializedResponse }));
    } catch (error) {
        handleError(res, error);
    }
};

module.exports = { handleReposRoute };
