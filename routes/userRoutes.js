const express = require("express")

const authController = require("../controllers/authController")

const router = express.Router()

//localhost:3000/
router.post("/signup", authController.signUp)

module.exports = router