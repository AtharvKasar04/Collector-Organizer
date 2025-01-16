const mongoose = require("mongoose");

const collectionSchema = mongoose.Schema({
    title: String,
    description: String,
    category: String,
    yearOfManufacture: String,
    purchasePrice: String,
    purchaseDate: String,
    rarity: String,
    tags: [String],
    imageUrl: String,
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('collections', collectionSchema);