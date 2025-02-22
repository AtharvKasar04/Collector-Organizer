const jwt = require('jsonwebtoken');
const userModel = require('../models/UserModel'); 

module.exports = async (req, res, next) => {
    const token = req.cookies.token
    
    if (!token) {
        return res.status(401).json({ message: "Access denied. No token provided." });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const email = decoded.email;

        if (!email) {
            return res.status(400).json({ message: "Invalid token: Email not found." });
        }

        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        req.user = { id: user._id, email: user.email }; 
        next();
    } catch (ex) {
        res.status(400).json({ message: "Invalid token." });
    }
};
