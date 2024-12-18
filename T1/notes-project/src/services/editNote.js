import * as fs from 'fs';
import { fileURLToPath } from 'url';
import * as path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const notesDirectory = path.join(__dirname, '../../notes/');

export function editNote(req, res) {
  const noteName = req.params.noteName;
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ message: 'Content is required.' });
  }

  const noteFileName = `${noteName}.note`;
  const noteFilePath = path.join(notesDirectory, noteFileName);

  if (!fs.existsSync(noteFilePath)) {
    return res.status(404).json({ message: 'Note not found.' });
  }

  try {
    fs.writeFileSync(noteFilePath, content, 'utf8');
    res.status(200).json({ message: 'Note updated successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating the note.', error: error.message });
  }
}
