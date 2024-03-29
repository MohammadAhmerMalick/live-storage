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
  fileLinks: {
    type: [String],
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
})

const Note = mongoos.model('Note', NoteSchema)
module.exports = Note
