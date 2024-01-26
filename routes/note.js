const router = require('express').Router()
const upload = require('../config/multer')

const { noteView, createNote } = require('../controllers/NoteController')

router.get('/', noteView)
router.post('/', upload.single('file'), createNote)

module.exports = router
