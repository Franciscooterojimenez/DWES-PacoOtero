import * as fs from 'fs';
import { fileURLToPath } from 'url';
import * as path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const notesDirectory = path.join(__dirname, '../../notes');

export function createNote(req, res) {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ message: 'Title and content are required.' });
  }

  const noteFileName = (title.replace(/\s+/g, '_') + '.note').toLowerCase();
  const noteFilePath = path.join(notesDirectory, noteFileName);

  try {
    if (fs.existsSync(noteFilePath)) {
      return res.status(409).json({ message: 'Note already exists.' });
    }

    fs.writeFileSync(noteFilePath, content, 'utf8');
    res.status(201).json({ fileName: noteFileName, noteName: title, message: 'Note created successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating the note.', error: error.message });
  }
}
