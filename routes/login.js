const router = require("express").Router()
const { registerView, loginView } = require("../controllers/loginController")

router.get("/register", registerView)
router.get("/login", loginView)

module.exports = router
