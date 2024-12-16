function pingController(req, res) {
  res.send('pong');
}

function getUser(req, res) {
  res.send({ 'name': 'Manu' });
}

function postUser(req, res, next) {
  try {
    throw new Error('Unexpected error');
  } catch (err) {
    next(err);
  }
}

function adminAccessController(req, res) {
  res.status(200).send('Bienvenid@, disfrute del contenido');
}

export { pingController, getUser, postUser, adminAccessController };
