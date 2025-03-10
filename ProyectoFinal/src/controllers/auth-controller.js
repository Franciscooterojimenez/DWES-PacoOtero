const { registerUser, loginUser } = require("../services/auth-service");
const { validationResult } = require("express-validator");

exports.register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const newUser = await registerUser(req.body);
    res.status(201).json({ message: "Usuario registrado con éxito", user: newUser });
  } catch (error) {
    res.status(400).json({ message: "Error en el registro", error: error.message });
  }
};

exports.login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const { user, token } = await loginUser(req.body);
    res.json({ message: "Inicio de sesión exitoso", user, token });
  } catch (error) {
    res.status(400).json({ message: "Error en el login", error: error.message });
  }
};