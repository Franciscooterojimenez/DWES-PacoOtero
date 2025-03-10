const express = require("express");
const router = express.Router();
const { getAllProducts, createProduct } = require("../controllers/products-controller");
const { verifyToken } = require("../middlewares/auth-middleware");

router.get("/", getAllProducts);
router.post("/", verifyToken, createProduct);

module.exports = router;