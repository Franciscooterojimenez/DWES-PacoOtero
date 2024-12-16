import express from 'express';
import {deleteUser, getUser, getUsers, postUser, updateUser} from '../controllers/users-controller.js';

const router = express.Router();

router.get('', getUsers);
router.get('/:id', getUser);
router.post('', postUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;