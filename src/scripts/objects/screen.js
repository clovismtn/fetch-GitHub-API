const screen = {
    userProfile: document.querySelector('.profile-data'),

    renderUser(user) {
        this.userProfile.innerHTML = `
            <div class="info">
                <img src="${user.avatarUrl}" alt="foto de perfil" />
                <h1>${user.name ?? 'não possui nome'}</h1>
                <p>${user.bio ?? 'não possui bio'}</p>
            </div>
            <div class="followersection">
                <h2>Followers</h2>
                <h2>${user.followers}</h2>
            </div>
            <div class="followingSection">
                <h2>Following</h2>
                <h2>${user.following}</h2>
            </div>`;

        let repositoriesItens = '';
        user.repositories.forEach(repo => {
            repositoriesItens += `<li>
                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                <span>Watchers: ${repo.watchers_count}</span>
                <span>Forks: ${repo.forks_count}</span>
                <span>Stars: ${repo.stargazers_count}</span>
                <span>Language: ${repo.language ?? 'N/A'}</span>
            </li>`;
        });

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `
                <div class="repositories section">
                    <h2>Repositories</h2>
                    <ul>${repositoriesItens}</ul>
                </div>`;
        }

        let eventsItens = '';
        user.events
            .filter(event => event.type === 'PushEvent' || event.type === 'CreateEvent')
            .forEach(event => {
                eventsItens += `<li>
                    <a href="${event.html_url}" target="_blank">${event.type}</a>
                </li>`;
            });

        if (eventsItens) {
            this.userProfile.innerHTML += `
                <div class="events section">
                    <h2>Events</h2>
                    <ul>${eventsItens}</ul>
                </div>`;
        }
    },

    renderNotFound() {
        this.userProfile.innerHTML = '<h3>Usuário não encontrado</h3>';
    }
};

export { screen };