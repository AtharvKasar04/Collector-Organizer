const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();
const { createItem } = require("../controllers/itemController");

router.post("/create-item", authMiddleware, createItem);

module.exports = router;