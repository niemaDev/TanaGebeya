const User = require('../models/User');
const Product = require('../models/Product');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

/**
 * GENERATE TOKEN
 */
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d'
  });
};

/**
 * REGISTER USER
 */
exports.register = async (req, res) => {
  try {

    const { name, email, password, role } = req.body;

    // Validate input
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill all fields"
      });
    }

    // Check existing user
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists"
      });
    }

    // Hash password here (SAFE GUARANTEE)
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      token: generateToken(user._id),
      user
    });

  } catch (err) {
    console.log("REGISTER ERROR:", err);
    res.status(500).json({
      success: false,
      message: "Server error during registration"
    });
  }
};

/**
 * LOGIN USER
 */
exports.login = async (req, res) => {
  try {

    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide email and password"
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password"
      });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password"
      });
    }

    res.status(200).json({
      success: true,
      message: "Login successful",
      token: generateToken(user._id),
      user
    });

  } catch (err) {
    console.log("LOGIN ERROR:", err);
    res.status(500).json({
      success: false,
      message: "Server error during login"
    });
  }
};

/**
 * GET PRODUCTS
 */
exports.getProducts = async (req, res) => {
  try {

    const products = await Product.find({ status: 'active' })
      .populate('seller', 'name email')
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: products.length,
      products
    });

  } catch (err) {
    console.error('GET PRODUCTS ERROR:', err);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch products'
    });
  }
};

/**
 * CREATE PRODUCT
 */
exports.createProduct = async (req, res) => {
  try {

    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized'
      });
    }

    const { name, price, category, description } = req.body;

    if (!name || !price || !category || !description) {
      return res.status(400).json({
        success: false,
        message: 'Please fill all fields'
      });
    }

    const newProduct = await Product.create({
      name,
      price,
      category,
      description,
      seller: req.user._id,
      status: 'active'
    });

    res.status(201).json({
      success: true,
      message: 'Product Added Successfully!',
      product: newProduct
    });

  } catch (err) {
    console.error('CREATE PRODUCT ERROR:', err);
    res.status(500).json({
      success: false,
      message: 'Server Error: Could not save product'
    });
  }
};