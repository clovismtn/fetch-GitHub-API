import { getUser } from './services/users.js'
import { repos } from "./services/repositories.js"
import {user} from './objects/user.js'
import {screen} from './objects/screen.js'
import { getFollowers } from './services/followers.js'
import { getFollowing } from './services/following.js'
import { getEvents } from './services/events.js'

function validateEmptyInput(userName){
    if(userName.length === 0){
        alert('Preencha o campo com o nome de usuario do GitHub')
        return true
    }
}

document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value
    if(validateEmptyInput(userName)) return
    getUserData(userName)
})

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13
    if (isEnterKeyPressed) {
        if(validateEmptyInput(userName)) return
        getUserProfile(userName)
    }
})

async function getUserData(userName) {

    const userResponse = await getUser(userName)

    if(userResponse.message === 'Not Found'){
        screen.renderNotFound()
        return
    }

    const repositoriesResponse = await repos(userName)
    const followersResponse = await getFollowers(userName)
    const numberOfFollowers = followersResponse.length
    const followingResponse = await getFollowing(userName)
    const numberOfFollows = followingResponse.length
    const eventsResponse = await getEvents(userName)
    


    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)
    user.setFollowers(numberOfFollowers)
    user.setFollowing(numberOfFollows)
    user.setEvents(eventsResponse)
    screen.renderUser(user)
    console.log(eventsResponse)
}

console.log(user)