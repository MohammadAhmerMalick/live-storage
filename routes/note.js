const router = require('express').Router()
const upload = require('../config/multer')

const { noteView, createNote, updateNote } = require('../controllers/NoteController')

router.get('/', noteView)
router.post('/', upload.single('file'), createNote)
router.put('/:noteId', updateNote)

module.exports = router
