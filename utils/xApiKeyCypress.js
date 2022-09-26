const CryptoJS = require("crypto-js")

function createXApiKey() {
  function getTimestamp() {
    return Math.round(new Date().getTime() / 1000)
  }

  function getSignature(publicSegment) {
    return CryptoJS.HmacSHA1(
      publicSegment,
      Cypress.env("CYPRESS_API_KEY_PRIVATE")
    )
  }

  function generateToken() {
    const timestamp = getTimestamp()

    const publicSegment = `${timestamp}:${Cypress.env(
      "CYPRESS_API_KEY_PUBLIC"
    )}`

    const signature = getSignature(publicSegment)

    return Buffer.from(`${publicSegment}:${signature}`).toString("base64")
  }

  return { generateToken }
}

module.exports = createXApiKey
