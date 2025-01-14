const jwt = require('jsonwebtoken');
const userModel = require('../models/UserModel'); // Adjust the path as needed

module.exports = async (req, res, next) => {
    const token = req.cookies.token || req.headers['authorization'];
    if (!token) {
        return res.status(401).json({ message: "Access denied. No token provided." });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const email = decoded.email; // Extract the email from the token

        if (!email) {
            return res.status(400).json({ message: "Invalid token: Email not found." });
        }

        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        req.user = { id: user._id, email: user.email }; // Attach user info to the request
        next();
    } catch (ex) {
        res.status(400).json({ message: "Invalid token." });
    }
};
