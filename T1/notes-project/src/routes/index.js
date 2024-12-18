import express from 'express';
import notesRouter from './notes.js';
import { login } from '../controllers/users-controller.js'

const router = express.Router();

router.use('/notes', notesRouter);
router.use('/login', login)

export default router;
