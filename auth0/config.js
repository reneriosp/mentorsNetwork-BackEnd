module.exports = {
  authRequired: process.env.AUTH0_AUTH_REQUIRED === "true",
  auth0Logout: process.env.AUTH0_AUTH0_LOGOUT === "true",
  secret: process.env.AUTH0_SECRET,
  baseURL: process.env.AUTH0_BASE_URL,
  clientID: process.env.AUTH0_CLIENT_ID,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASEURL
}
