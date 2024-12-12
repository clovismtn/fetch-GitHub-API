import { baseUrl } from "../variables.js"

async function getFollowers(userName) {
    const followersResponse = await fetch(`${baseUrl}/${userName}/followers`)
    return await followersResponse.json()
}



export{getFollowers}