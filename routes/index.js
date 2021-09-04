const express = require("express")
const router = express.Router()
const { requiresAuth } = require("express-openid-connect")

router.get("/", (req, res, next) => {
  res.send({ message: "public get success" })
})

// req.isAuthenticated is provided from the auth router (app.js)
router.get("/status", (req, res, next) => {
  res.send({ loggedIn: req.oidc.isAuthenticated() })
})

router.get("/private", requiresAuth(), (req, res, next) => {
  res.send({ message: "private get success" })
})

router.get("/profile", requiresAuth(), (req, res) => {
  res.send(req.oidc.user)
})

module.exports = router
