// login page
const loginView = (req, res) => {
  res.render("login", {})
}

// register page
const registerView = (req, res) => {
  res.render("register", {})
}

module.exports = { loginView, registerView }
