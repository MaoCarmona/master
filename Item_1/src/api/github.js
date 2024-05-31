const axios= require('axios');


/**
 * Fetches repositories of a given GitHub user, sorts them by the number of stars, and returns a specified number of top repositories.
 * @param {string} username - GitHub username whose repositories are to be fetched.
 * @param {string} sort - Criteria to sort the repositories (default is 'stars').
 * @param {string} order - Order of sorting, either 'asc' or 'desc' (default is 'desc').
 * @param {number} per_page - Number of repositories to return (default is 10).
 * @returns {Promise<Array>} - Array of repositories sorted by the specified criteria and limited to the specified number.
 */
async function getPopularRepos(username, sort = 'stars', order = 'desc', per_page = 10) {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`);
        let repos = response.data;

        if (sort === 'stars') {
            repos.sort((a, b) => (order === 'desc' ? b.stargazers_count - a.stargazers_count : a.stargazers_count - b.stargazers_count));
        }

        return repos.slice(0, per_page);
    } catch (error) {
        throw new Error(`Error fetching repositories: ${error.message}`);
    }
}

module.exports = {getPopularRepos};
