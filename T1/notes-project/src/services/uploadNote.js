import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const notesDirectory = path.join(__dirname, '../../notes');

// Asegurarse de que el directorio de notas exista
if (!fs.existsSync(notesDirectory)) {
  fs.mkdirSync(notesDirectory, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, notesDirectory);
  },
  filename: (req, file, cb) => {
    if (!file.originalname) {
      return cb(new Error("No file name provided"));
    }
    const fileNameWithoutExt = path.parse(file.originalname).name;
    const newFileName = `${fileNameWithoutExt}.note`;
    cb(null, newFileName);
  }
});

const upload = multer({ storage }).single('note');

export const uploadNote = (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.log('Error en multer:', err);
      return res.status(500).json({ message: err.message });
    }
    if (!req.file) {
      console.log('Archivo no subido');
      return res.status(400).send('No file uploaded.');
    }
    console.log('Archivo subido:', req.file.filename);
    return res.status(200).json({
      message: 'File uploaded successfully',
      filename: req.file.filename
    });
  });
};
