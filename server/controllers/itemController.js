const collections = require("../models/CollectionItem");
const userModel = require("../models/UserModel");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname) );
    },
});

const upload = multer({ storage });

module.exports.upload = upload.single('image'); //File upload Middleware

module.exports.createItem = async (req, res) => {
    let { title, description, category, yearOfManufacture, purchasePrice, purchaseDate, tags, rarity, imageUrl } = req.body;
    const userId = req.user.id;

    try {
        const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

        const newItem = await collections.create({
            title,
            description,
            category,
            yearOfManufacture,
            purchasePrice,
            purchaseDate,
            rarity,
            tags: tags ? tags.split(',') : [],
            imageUrl,
            createdBy: userId
        });
        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({ message: "Error creating Item", error: error.message });
    }
};

module.exports.deleteItem = async (req, res) => {
    let { id } = req.params;
    let userId = req.user.id;

    try {
        const item = await collections.findOneAndDelete({ _id: id, createdBy: userId });
        if (!item) {
            return res.status(404).json({ message: "Item not found or unauthorized" });
        }
        res.status(200).json({ message: "Item deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting item", error: error.message });
    }
}

module.exports.editItem = async (req, res) => {
    const { id } = req.params; 
    const { title, description, category, tags, imageUrl, rarity, purchaseDate, purchasePrice } = req.body; 
    const userId = req.user.id; 

    try {
        const item = await collections.findOne({ _id: id, createdBy: userId });
        if (!item) {
            return res.status(404).json({ message: "Item not found or unauthorized" });
        }

        item.title = title || item.title;
        item.description = description || item.description;
        item.category = category || item.category;
        item.rarity = rarity || item.rarity;
        item.tags = tags || item.tags;
        item.purchaseDate = purchaseDate || item.purchaseDate;
        item.purchasePrice = purchasePrice || item.purchasePrice;
        item.imageUrl = imageUrl || item.imageUrl;
        item.updatedAt = Date.now();

        await item.save();
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ message: "Error updating item", error: error.message });
    }
};

module.exports.fetchUserCollections = async (req, res) => {
    const userId = req.user.id;

    try {
        const items = await collections.find({ createdBy: userId });
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: "Error fetching collections", error: error.message });
    }
};

module.exports.searchByCategory = async (req, res) => {
    const { category } = req.query; 
    const userId = req.user.id; 

    try {
        const items = await collections.find({
            createdBy: userId,
            category: { $regex: new RegExp(category, 'i') } 
        });

        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: "Error fetching items by category", error: error.message });
    }
};
