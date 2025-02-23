const jwt = require('jsonwebtoken');
const userModel = require('../models/UserModel');

module.exports = async (req, res, next) => {
    console.log("🔍 Cookies received:", req.cookies);  // ✅ Debugging log
    res.cookie("token-temp", "Temp", {
        httpOnly: true,
    })

    const token = req.cookies.token;  
    if (!token) {
        console.log("❌ No token found in cookies");
        return res.status(401).json({ message: "Access denied. No token provided." });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("✅ Token decoded:", decoded);  // ✅ Debugging log

        const email = decoded.email;
        if (!email) {
            console.log("❌ Invalid token: Email not found.");
            return res.status(400).json({ message: "Invalid token: Email not found." });
        }

        const user = await userModel.findOne({ email });
        if (!user) {
            console.log("❌ User not found in database.");
            return res.status(404).json({ message: "User not found." });
        }

        req.user = { id: user._id, email: user.email };
        console.log("✅ Authentication successful for:", email); // ✅ Debugging log
        next();
    } catch (ex) {
        console.log("❌ Invalid token:", ex.message);
        res.status(400).json({ message: "Invalid token." });
    }
};
