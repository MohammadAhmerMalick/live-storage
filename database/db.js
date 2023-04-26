const dotenv = require("dotenv")
const { mongoose } = require("mongoose")

dotenv.config()
const database = process.env.MONGOLAB_URI
mongoose
  .connect(database, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("DB connect"))
  .catch((err) => console.log({ dbError: err }))
