const multer = require('multer')
const routeList = require('../routes/routesList')
const UPLOAD_FILE_SIZE = require('../config/constants')

// Express error handler
const errorHandler = (err, req, res, next) => {
  // on multer error
  if (err instanceof multer.MulterError) {
    // no file size exceed the defined limit
    if (err.code === 'LIMIT_FILE_SIZE')
      return res.render(routeList[req.url], {
        ...req.body,
        reqStatus: 'error',
        reqMessage: `File should be less than ${UPLOAD_FILE_SIZE / 1000000}MB`,
      })

    // return mutler unknown error
    return res.render(routeList[req.url], { ...req.body, reqStatus: 'error', reqMessage: 'Unable to upload the file' })
  }

  console.log({ err })
  // return servier unknown error
  res.status(500).send('Something Went Wrong!')
}

module.exports = errorHandler
