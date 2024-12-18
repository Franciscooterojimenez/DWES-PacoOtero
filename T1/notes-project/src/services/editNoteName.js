import * as fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const notesDirectory = path.join(__dirname, '../../notes/');

export function editNoteName(req, res) {
  const oldNoteName = req.params.noteName;
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: 'New title is required.' });
  }

  const oldNoteFileName = `${oldNoteName}.note`;
  const newNoteFileName = (`${title.replace(/\s+/g, '_')}.note`).toLowerCase();
  const oldNoteFilePath = path.join(notesDirectory, oldNoteFileName);
  const newNoteFilePath = path.join(notesDirectory, newNoteFileName);

  if (!fs.existsSync(oldNoteFilePath)) {
    return res.status(404).json({ message: 'Note not found.' });
  }

  if (fs.existsSync(newNoteFilePath)) {
    return res.status(409).json({ message: 'A note with the new title already exists.' });
  }

  try {
    fs.renameSync(oldNoteFilePath, newNoteFilePath);
    res.status(200).json({ oldName: oldNoteName, newName: title, message: 'Note name updated successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating the note name.', error: error.message });
  }
}
