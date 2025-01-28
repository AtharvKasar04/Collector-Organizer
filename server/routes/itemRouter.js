const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();
const { createItem, deleteItem, editItem, fetchUserCollections, searchByCategory, upload } = require("../controllers/itemController");

router.post("/create-item", authMiddleware, upload, createItem);
router.delete("/delete-item/:id", authMiddleware, deleteItem);
router.put("/edit-item/:id", authMiddleware, upload, editItem);
router.get("/fetch-items", authMiddleware, fetchUserCollections);
router.get("/search", authMiddleware, searchByCategory);

module.exports = router;