const { ObjectId } = require('mongodb')
const Note = require('../models/Note')
const uploadFileToBucket = require('../models/UploadFile')

const noteView = (req, res) => {
  return res.render('note/note')
}

const createNote = async (req, res) => {
  const { title, note } = req.body

  if (!note) return res.render('note/note', { reqStatus: 'error', reqMessage: 'Note is required' })

  let fileLinks = []

  // handle file
  const file = req.file
  if (file) {
    const uploadRes = await uploadFileToBucket(file.filename, file.path)
    if (uploadRes.error) return res.json({ error: uploadRes.error })
    fileLinks = [uploadRes.url]
  }

  const newNote = new Note({ title, note, fileLinks })
  await newNote.save()
  return res.render('note/note', { reqStatus: 'success', reqMessage: 'Note Saved' })
}

const moveNoteToTrash = async (req, res) => {
  const { noteId } = req.params

  try {
    const update = await Note.updateOne({ _id: new ObjectId(noteId) }, { $set: { isDeleted: true } })

    if (update.acknowledged) {
      res.statusMessage = 'success'
      return res.json({ message: 'Moved to trash' })
    }
    throw ''
  } catch (error) {
    res.statusMessage = 'error'
    return res.json({ message: 'Unable to updated' })
  }
}

module.exports = { noteView, createNote, moveNoteToTrash }
