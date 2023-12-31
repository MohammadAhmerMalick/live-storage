const Note = require('../models/Note')

const noteView = (req, res) => {
  return res.render('note/note')
}

const createNote = async (req, res) => {
  const { title, note } = req.body

  if (!note) return res.render('note/note', { reqStatus: 'error', reqMessage: 'Note is required' })

  const newNote = new Note({ title, note })
  await newNote.save()
  return res.render('note/note', { reqStatus: 'success', reqMessage: 'Note Saved' })
}

module.exports = { noteView, createNote }
