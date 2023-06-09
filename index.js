const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000
require('./database/db') // database connecction

// set engine
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

//Routes
app.use(express.static(__dirname + '/public'))
app.use('/', require('./routes/note'))
app.use('/admin', require('./routes/admin'))

// listen to port
app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
