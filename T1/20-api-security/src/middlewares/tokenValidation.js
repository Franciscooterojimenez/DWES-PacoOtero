import bcrypt from 'bcrypt';

export const validateToken = (req, res, next) => {
    const authentication = req.headers['authorization'];
		const token = authentication.split(" ")[1];

    bcrypt.compare('I know your secret', token, (err, result) => {
        if (err) {
            return res.status(403).send('Acceso denegado');
        }
        if (result) {
            next();
        } else {
            return res.status(403).send('Acceso denegado');
        }
    });
};
