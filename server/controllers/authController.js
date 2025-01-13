const userModel = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

module.exports.registerUser = async (req, res) => {
    let { username, name, email, password } = req.body;

    if (!username || !name || !email || !password) {
        return res.send("All fields are required");
    }

    let foundUser = await userModel.findOne({ email: email });

    if (foundUser) return res.status(401).json({ message: "User already registered, Please Log in" });

    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, async function(err, hash) {
            if (err) return res.send(err.message);
            else {
                let createdUser = await userModel.create({
                    username,
                    email,
                    name,
                    password: hash,
                });

                res.status(201).send("User created successfully!");
            }
        })
    })
}