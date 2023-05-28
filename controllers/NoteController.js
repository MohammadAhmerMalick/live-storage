const Note = require('../models/Note')

const noteView = (req, res) => {
  return res.render('note/note')
}

const createNote = async (req, res) => {
  const { title, note } = req.body

  if (!note) return res.render('note')

  const newNote = new Note({ title, note })
  await newNote.save()
  return res.render('note/note')
}

module.exports = { noteView, createNote }
