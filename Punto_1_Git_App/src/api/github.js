const axios = require('axios');

const getPopularRepos = async (username, sort = 'stars', order = 'desc', per_page =10) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`);
        const repos = response.data;
        
        /* Se realizo este tipo de ordenamiento ya que al realizar la peticion con:
         params :{ sort, order} no realizaba el ordenamiento por stars, ni por stargazers_count
         se valido con name y si respondia de manera correcta , entonces se supuso que los ordenamientos
         mencionados, no estaban definidos.*/
        if (sort === 'stars') {
            repos = repos.sort((a, b) => {
                if (order === 'desc') {
                    return b.stargazers_count - a.stargazers_count;
                } else {
                    return a.stargazers_count - b.stargazers_count;
                }
            });
        }
      
        return repos.slice(0 , per_page);
    } catch (error) {
        throw new Error(`Error al obtener repositorios: ${error.message}`);
    }
};

module.exports = { getPopularRepos };
