const userModel = require("../models/UserModel");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/generateToken");

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

module.exports.loginUser = async (req, res) => {
    let { email, password } = req.body;

    let foundUser = await userModel.findOne({ email });
    if(!foundUser) return res.status(404).json({ message: "User not found" });

    bcrypt.compare(password, foundUser.password, function(err, result){
        if (result){
            let token = generateToken(foundUser);
            res.cookie("token", token, {
                httpOnly: true
            });
            res.status(200).json({ message: "You can Login now" });
        }
        else{
            return res.status(401).json({ message: "Email or Password invalid." });
        }
    })
}

module.exports.logoutUser = async (req, res) => {
    res.cookie("token", "", {
        httpOnly: true,
        expires: new Date(0),
        path: "/",
        sameSite: 'strict'
    });
    res.status(200).json({ message: "User logged out successfully!" });
}