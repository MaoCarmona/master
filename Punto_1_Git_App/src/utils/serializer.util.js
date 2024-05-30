const serializeRepos = (repos) => {
    return repos.map(repo => ({
        owner: repo.owner.login,
        name: repo.name,
        description: repo.description,
        url: repo.html_url,
        stars: repo.stargazers_count,
        forks: repo.forks_count
    }));
};

module.exports = { serializeRepos };
