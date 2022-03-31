import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/profiles`

async function getAllProfiles() {
  const res = await fetch(BASE_URL, {
    headers: { Authorization: `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}

function addRecipeToDay(recipe, profile, day) {
  return fetch(`${BASE_URL}/${profile}/${day}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'content-type': 'application/json'
    },
    body: JSON.stringify(recipe)

  })
  .then(res => res.json())
}

async function getProfile(profileId) {
  const res = await fetch(`${BASE_URL}/${profileId}`, {
    headers: { Authorization: `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}

export { getAllProfiles, addRecipeToDay, getProfile }
