import { baseUrl } from "../variables.js"

async function getFollowing(userName) {
    const followingResponse = await fetch(`${baseUrl}/${userName}`)
    return await followingResponse.json()
}

export{getFollowing}