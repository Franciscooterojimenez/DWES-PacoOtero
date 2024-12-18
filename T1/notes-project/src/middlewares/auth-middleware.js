import jwt from 'jsonwebtoken';

export const validateToken = (req, res, next) => {
    const token = req.headers['token'];
    if (!token) {
        return res.status(403).send('Token requerido.');
    }

    try {
        const decoded = jwt.verify(token, 'welcomebaby');
        req.usuario = decoded;
    } catch (err) {
        return res.status(401).send('Token inválido.');
    }
    next();
};
