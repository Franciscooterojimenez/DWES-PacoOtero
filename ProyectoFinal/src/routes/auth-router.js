const express = require("express");
const { check } = require("express-validator");
const { register, login } = require("../controllers/auth-controller");

const router = express.Router();

router.post("/register", [
  check("username", "El nombre de usuario es obligatorio").notEmpty(),
  check("email", "El email no es válido").isEmail(),
  check("password", "La contraseña debe tener al menos 6 caracteres").isLength({ min: 6 })
], register);

router.post("/login", [
  check("email", "El email no es válido").isEmail(),
  check("password", "La contraseña es obligatoria").notEmpty()
], login);

module.exports = router;
