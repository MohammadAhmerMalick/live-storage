const User = require('../models/User')

// login page
const loginView = (req, res) => {
  res.render('login', { email: '', password: '' })
}

// register page
const registerView = (req, res) => {
  res.render('register', { name: '', email: '', password: '' })
}

// register
const registerUser = async (req, res) => {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    return res.render('register', {
      name,
      email,
      password,
      error: 'fields are missing',
    })
  }

  const user = await User.findOne({ email })

  // if user exists
  if (user) {
    return res.render('register', {
      name,
      email,
      password,
      error: 'User already exists',
    })
  }

  const newUser = new User({
    name,
    email,
    password,
  })

  try {
    await newUser.save()
  } catch (error) {
    console.log({ errorWhileCreatingUser: error })
  }

  return res.render('register', {
    name: '',
    email: '',
    password: '',
    error: '',
  })
}

module.exports = { loginView, registerView, registerUser }
