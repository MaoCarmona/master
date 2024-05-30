const { getPopularRepos } = require('../api/github');
const { serializeRepos } = require('../utils/serializer.util');
const { handleError } = require('../utils/errorHandler.util');
const config = require('../config');

const handleReposRoute = async (req, res) => {
    try {
        const repos = await getPopularRepos(config.githubUsername);
        const serializedResponse = serializeRepos(repos);

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ repositories: serializedResponse }));
    } catch (error) {
        handleError(res, error);
    }
};

module.exports = { handleReposRoute };
