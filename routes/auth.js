const router = require('express').Router()
const {
  loginView,
  registerView,
  registerUser,
} = require('../controllers/loginController')

router.get('/register', registerView)
router.post('/register', registerUser)
router.get('/login', loginView)

module.exports = router
