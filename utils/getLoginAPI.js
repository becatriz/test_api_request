import xApiKeyCypress from "./xApiKeyCypress"

export function getLoginAPI({
  credential = "rebeca.cruz@vemqda.com.br",
  password = "vemqda@2020"
}) {
  return {
    method: "POST",
    url: `${Cypress.env("CYPRESS_URL_API")}v1/auth/sign-in`,
    headers: {
      "X-Api-Key": xApiKeyCypress().generateToken()
    },
    body: {
      credential,
      password
    }
  }
}

export default getLoginAPI
