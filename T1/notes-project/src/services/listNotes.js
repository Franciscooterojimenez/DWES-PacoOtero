import * as fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const notesDirectory = path.join(__dirname, "../../notes");

export function listNotes(req, res) {
  const sort = req.query.sort;
  const nameFilter = req.query.nameFilter;
  const page = parseInt(req.query.page || '1', 10);
  const pageSize = parseInt(req.query.pageSize || '5', 10);

  fs.readdir(notesDirectory, { withFileTypes: true }, (err, files) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading the notes directory.', error: err.message });
    }

    let noteFiles = files
      .filter(dirent => dirent.isFile() && dirent.name.endsWith('.note'))
      .map(dirent => {
        const filePath = path.join(notesDirectory, dirent.name);
        const stats = fs.statSync(filePath);
        return {
          noteName: dirent.name.replace('.note', ''),
          dateCreated: stats.birthtime,
          dateEdited: stats.mtime,
          size: stats.size
        };
      });

    // Filtrado por nombre
    if (nameFilter) {
      noteFiles = noteFiles.filter(note => note.noteName.includes(nameFilter));
    }

    // Ordenación
    switch (sort) {
      case 'dateCreated':
        noteFiles.sort((a, b) => a.dateCreated - b.dateCreated);
        break;
      case 'dateEdited':
        noteFiles.sort((a, b) => a.dateEdited - b.dateEdited);
        break;
      case 'title':
        noteFiles.sort((a, b) => a.noteName.localeCompare(b.noteName));
        break;
      case 'size':
        noteFiles.sort((a, b) => a.size - b.size);
        break;
    }

    // Paginación
    const totalNotes = noteFiles.length;
    const totalPages = Math.ceil(totalNotes / pageSize);
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    noteFiles = noteFiles.slice(startIndex, endIndex);

    if (noteFiles.length === 0 && totalNotes > 0) {
      return res.status(404).json({ message: 'No notes available on this page.' });
    }

    res.status(200).json({
      notes: noteFiles,
      pageInfo: {
        currentPage: page,
        totalPages: totalPages
      }
    });
  });
}
