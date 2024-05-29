const axios = require('axios');

const getPopularRepos = async (username, sort = 'stars', perPage = 10) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`, {
            params: { sort, per_page: perPage }
        });
        return response.data;
    } catch (error) {
        throw new Error(`Error al obtener repositorios: ${error.message}`);
    }
};

module.exports = { getPopularRepos };
