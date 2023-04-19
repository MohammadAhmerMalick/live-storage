const express = require("express")

const PORT = process.env.PORT || 8000
const app = express()

// set engine
app.set("view engine", "ejs")
// listen to port
app.listen(PORT, () => console.log(`http://localhost:${PORT}`))

//Routes
app.use("/", require("./routes/login"))

app.use("/", (req, res) => {
  res.send("we are on server")
})
