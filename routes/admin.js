const { getAdminPanel } = require('../controllers/AdminController')
const { loginView } = require('../controllers/AuthController')

const route = require('express').Router()

route.get('/', loginView)
route.post('/', getAdminPanel)

module.exports = route
