import express from 'express';
import { validateToken } from './middlewares/tokenValidation.js';
import { getPublicAccess } from './controllers/publicController.js';
import { getVipAccess } from './controllers/vipController.js';
import { getAdminAccess } from './controllers/getAdminAccess.js';

const app = express();

app.get('/public', getPublicAccess);
app.get('/vip', validateToken, getVipAccess);
app.get('/admin', validateToken, getAdminAccess);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
