require("dotenv").config()
const express = require("express")
const path = require("path")
const cookieParser = require("cookie-parser")
const logger = require("morgan")
const { auth } = require("express-openid-connect")
const auth0Config = require("./auth0/config")

const indexRouter = require("./routes/index")
const usersRouter = require("./routes/users")

const app = express()

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
// app.use(express.static(path.join(__dirname, "public")))

app.use(auth(auth0Config))
app.use("/", indexRouter)
app.use("/users", usersRouter)

module.exports = app
