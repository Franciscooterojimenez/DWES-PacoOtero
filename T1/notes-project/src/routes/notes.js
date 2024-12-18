import express from 'express';
import * as notes from '../controllers/notes-controller.js';
import { validateToken } from '../middlewares/auth-middleware.js';

const router = express.Router();

router.use(validateToken);

router.get('', notes.listNotes);
router.get('/:noteName', notes.listNote);
router.post('', notes.createNote);
router.patch('/:noteName', notes.editNote);
router.patch('/:noteName/name', notes.editNoteName);
router.delete('/:noteName', notes.deleteNote);
router.post('/upload', notes.uploadNote)

export default router;