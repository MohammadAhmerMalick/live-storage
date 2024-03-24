const fs = require('fs')
const multer = require('multer')
const UPLOAD_FILE_SIZE = require('./constants')

const uploadDir = 'uploads'

const storageConfig = () => {
  // create uploadDir in doesn't exists
  if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir)

  return (storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, uploadDir)
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname) //Appending extension
    },
  }))
}
const upload = multer({
  storage: storageConfig(),
  limits: { fileSize: UPLOAD_FILE_SIZE }, // limit to 100 bites
})
module.exports = upload
