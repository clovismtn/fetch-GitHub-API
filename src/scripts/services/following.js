import { baseUrl } from "../variables.js"

async function getFollowing(userName) {
    const followersResponse = await fetch(`${baseUrl}/${userName}/following`)
    return await followersResponse.json()
}



export{getFollowing}