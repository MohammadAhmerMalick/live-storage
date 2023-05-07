const router = require('express').Router()
const { noteView, createNote } = require('../controllers/NoteController')

router.get('/', noteView)
router.post('/', createNote)

module.exports = router
