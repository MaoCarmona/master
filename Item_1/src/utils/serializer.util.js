/**
 * Transforms an array of repository objects into a simplified format.
 * @param {Array} repos - An array of github repository objects.
 * @returns {Array} - An array of simplified repository objects.
 */
const serializeRepos = (repos) => {
    return repos.map(({ owner: { login }, name, description, html_url, stargazers_count, forks_count }) => ({
        owner: login,
        name,
        description,
        url: html_url,
        stars: stargazers_count,
        forks: forks_count
    }));
};

module.exports = { serializeRepos };
