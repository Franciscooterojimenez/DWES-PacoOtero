import * as fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const notesDirectory = path.join(__dirname, '../../notes/');

export function deleteNote(req, res, next) {
  const noteName = req.params.noteName;
  const noteFileName = `${noteName}.note`;
  const noteFilePath = path.join(notesDirectory, noteFileName);

  if (!fs.existsSync(noteFilePath)) {
    return next({ status: 404, message: 'Note not found.' });
  }

  try {
    fs.unlinkSync(noteFilePath);
    res.status(200).json({ message: 'Note deleted successfully.' });
  } catch (error) {
    return next({ status: 500, message: 'Error deleting note.' });
  }
}
