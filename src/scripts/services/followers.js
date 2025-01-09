import { baseUrl } from "../variables.js"

async function getFollowers(userName) {
    const followersResponse = await fetch(`${baseUrl}/${userName}`)
    return await followersResponse.json()
}

export{getFollowers}