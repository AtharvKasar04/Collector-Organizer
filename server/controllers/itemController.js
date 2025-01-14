const collections = require("../models/CollectionItem");
const userModel = require("../models/UserModel");

module.exports.createItem = async (req, res) => {
    let { title, description, category, tags, imageUrl } = req.body;
    const userId = req.user.id;

    try {
        const newItem = await collections.create({
            title,
            description,
            category,
            tags,
            imageUrl,
            createdBy: userId
        });
        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({ message: "Error creatint Item", error: error.message });
    }
};