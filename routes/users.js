<<<<<<< HEAD
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
=======
const express = require("express")
const router = express.Router()

/* GET users listing. */
router.get("/", (req, res, next) => {
  res.send("respond with a resource")
})

module.exports = router
>>>>>>> c42ca03f6ef5ee9f22006c1f6f4975affa530084
