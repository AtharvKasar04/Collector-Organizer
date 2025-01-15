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