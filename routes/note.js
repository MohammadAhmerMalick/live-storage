const router = require('express').Router()
const upload = require('../config/multer')

const { noteView, createNote, moveNoteToTrash } = require('../controllers/NoteController')

router.get('/', noteView)
router.post('/', upload.single('file'), createNote)
router.patch('/delete/:noteId', moveNoteToTrash)

module.exports = router
