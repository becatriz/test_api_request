import xApiKeyCypress from "./xApiKeyCypress"

export function getRequestAPI({ token, endpoint = "offers", version = "v1" }) {
  return {
    method: "GET",
    url: `${Cypress.env("CYPRESS_URL_API")}${version}/${endpoint}`,
    headers: {
      "X-Api-Key": xApiKeyCypress().generateToken(),
      Authorization: `Bearer ${token}`
    }
  }
}

export default getRequestAPI
