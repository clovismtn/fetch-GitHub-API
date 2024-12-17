const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML =    `<div class="info">
                                         <img src="${user.avatarUrl}" alt ='foto de perfil'/>
                                        <h1>${user.name ?? 'não possui nome'}</h1>
                                        <p>${user.bio ?? 'nao possui bio'}
                                        </div>
                                        <div class="followersection">
                                        <h2>followers</h2>
                                        <h2>${user.followers}</h2>
                                        </div>
                                        <div class="followingSection"
                                        <h2>following</h2>
                                        <h2>${user.following}</h2>
                                        </div>`
        
        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}"target="_blank">${repo.name}</a></li>` );

        if(user.repositories.length > 0){
            this.userProfile.innerHTML +=       `<div class="repositories section">
            <h2>Repositoires</h2>
            <ul>${repositoriesItens}</ul>
            </div>`
        }

        let eventsItens = ''
        user.events.forEach(getEvents => eventsItens += `<li><a href="${getEvents.html_url}"target="_blank">${getEvents.name}</a></li>` );

        if(user.events.length > 0){
            this.userProfile.innerHTML +=       `<div class="events section">
            <h2>events</h2>
            <ul>${eventsItens}</ul>
            </div>`
        }


    },
    renderNotFound(){
        this.userProfile.innerHTML = '<h3>Usuario não encontrado</h3>'
    }
}

export { screen }