const fs = require('fs')
const admin = require('firebase-admin')
const { getStorage, getDownloadURL } = require('firebase-admin/storage')

const serviceAccountKey = require('../cloud-storage--firebase-adminsdk.json')

//initialize the app
admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKey),
  storageBucket: `gs://${serviceAccountKey.project_id}.appspot.com`,
})

// remove the file from local
const removeFileFromLocal = (filePath) => fs.unlink(filePath, (err) => console.log({ err }))

const getBucketImageDownloadableLink = async (filePath) => {
  const fileRef = getStorage().bucket().file(filePath)
  return getDownloadURL(fileRef)
}
//function to upload file
const uploadFileToBucket = async (fileName, filePath) => {
  //get your bucket
  const bucket = admin.storage().bucket()
  const bucketFolderName = 'uploads/'

  if (fileName && filePath)
    try {
      // upload to bucket
      await bucket.upload(filePath, {
        gzip: true,
        destination: bucketFolderName + fileName,
      })

      // remove the file from local which was stored by multer
      removeFileFromLocal(filePath)

      // return the public link
      return { url: await getBucketImageDownloadableLink(bucketFolderName + fileName) }
    } catch (error) {
      console.log({ error })
      return { error }
    }

  return { error: 'Unable to process the file' }
}

module.exports = uploadFileToBucket
