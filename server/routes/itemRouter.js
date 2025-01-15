const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();
const { createItem, deleteItem, editItem, fetchUserCollections, searchByCategory } = require("../controllers/itemController");

router.post("/create-item", authMiddleware, createItem);
router.delete("/delete-item/:id", authMiddleware, deleteItem);
router.put("/edit-item/:id", authMiddleware, editItem);
router.get("/fetch-items", authMiddleware, fetchUserCollections);
router.get("/search", authMiddleware, searchByCategory);

module.exports = router;