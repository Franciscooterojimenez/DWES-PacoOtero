const express = require("express");
const router = express.Router();
const { getAllOrders, createOrder } = require("../controllers/orders-controller");
const { verifyToken } = require("../middlewares/auth-middleware");

router.get("/", verifyToken, getAllOrders);
router.post("/", verifyToken, createOrder);

module.exports = router;