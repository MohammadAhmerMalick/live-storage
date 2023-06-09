const mongoos = require('mongoose')

const NoteSchema = new mongoos.Schema({
  title: {
    type: String,
  },
  note: {
    type: String,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
})

const Note = mongoos.model('Note', NoteSchema)
module.exports = Note
