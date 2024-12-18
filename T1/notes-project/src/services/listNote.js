import * as fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const notesDirectory = path.join(__dirname, '../../notes/');

export function listNote(req, res) {
  const noteName = req.params.noteName;
  const noteFileName = `${noteName}.note`;
  const noteFilePath = path.join(notesDirectory, noteFileName);

  if (!fs.existsSync(noteFilePath)) {
    return res.status(404).json({ message: 'Note not found.' });
  }

  try {
    const content = fs.readFileSync(noteFilePath, 'utf8');
    res.status(200).json({ noteName, content });
  } catch (error) {
    res.status(500).json({ message: 'Error reading the note.', error: error.message });
  }
}
