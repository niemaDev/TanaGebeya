const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET || 'secret123', { expiresIn: '30d' });
};

exports.register = async (req, res) => {
    try {
        const { name, email, password, role, vendorProfile } = req.body;
        
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ error: "EXISTING_USER" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role: role || 'customer',
            vendorProfile: role === 'vendor' ? {
                storeName: vendorProfile?.storeName || "",
                businessDescription: vendorProfile?.businessDescription || "",
                isApproved: false
            } : {}
        });

        return res.status(201).json({
            success: true,
            user: { _id: user._id, role: user.role }
        });
    } catch (err) {
        console.error("CRITICAL BACKEND ERROR:", err);
        // We use a hardcoded string here to ensure no 'next' leaks out
        return res.status(500).json({ error: "SERVER_ERROR" });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (user && (await bcrypt.compare(password, user.password))) {
            res.json({
                token: generateToken(user._id),
                user: { 
                    _id: user._id, 
                    name: user.name, 
                    role: user.role, 
                    vendorProfile: user.vendorProfile 
                }
            });
        } else {
            res.status(401).json({ error: "Invalid email or password" });
        }
    } catch (err) {
        console.error("Login Error Logged:", err.message);
        res.status(500).json({ error: "Login failed" });
    }
};