import getRequestAPI from "./utils/getRequestAPI"
import getLoginAPI from "./utils/getLoginAPI"
import { ENDPOINTS } from "./utils/endpoints"

describe("Test for API", () => {
  ENDPOINTS.forEach(endpoint => {
    it(`Test GET ${endpoint}`, () => {
      cy.request(getLoginAPI({})).then(response => {
        const token = response.body.data.access_token

        cy.request(getRequestAPI({ token, endpoint })).then(resp => {
          expect(resp.status).to.eq(200)
        })
      })
    })
  })
})
