import express from 'express';
import { pingController, getUser, postUser, adminAccessController } from './controller.js';
import { printDateMiddleware, validateAdminMiddleware, errorMiddleware } from './middleware.js';

const router = express.Router();

router.get('/ping', pingController);
router.get('/user', getUser);
router.post('/user', postUser);
router.get('/admin', validateAdminMiddleware, adminAccessController);

router.use(printDateMiddleware);
router.use(errorMiddleware);

export { router };
