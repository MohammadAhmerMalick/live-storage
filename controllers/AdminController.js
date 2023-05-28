const User = require('../models/User')
const Note = require('../models/Note')

const getAdminPanel = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) return res.render('login', { email, password })

  const user = await User.findOne({ email })

  if (user?.isActive) {
    const notes = await Note.find()

    return res.render('dashboard/dashboard', { notes })
  }

  return res.render('login', { email, password })
}

module.exports = { getAdminPanel }
