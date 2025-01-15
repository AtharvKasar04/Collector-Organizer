const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();
const { createItem, deleteItem } = require("../controllers/itemController");

router.post("/create-item", authMiddleware, createItem);
router.delete("/delete-item/:id", authMiddleware, deleteItem);

module.exports = router;