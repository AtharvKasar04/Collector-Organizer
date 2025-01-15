const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();
const { createItem, deleteItem, editItem } = require("../controllers/itemController");

router.post("/create-item", authMiddleware, createItem);
router.delete("/delete-item/:id", authMiddleware, deleteItem);
router.put("/edit-item/:id", authMiddleware, editItem);

module.exports = router;