const Product = require('../models/Product');

/**
 * @desc    Get all active products
 * @route   GET /api/products
 * @access  Public
 */
exports.getProducts = async (req, res) => {
    try {
        // Only fetch products that are marked as 'active'
        const products = await Product.find({ status: 'active' }).populate('seller', 'name');
        res.status(200).json(products);
    } catch (err) {
        console.error("Fetch Products Error:", err);
        res.status(500).json({ error: "Failed to fetch products" });
    }
};

/**
 * @desc    Create a new product
 * @route   POST /api/products
 * @access  Private (Vendor/Admin only)
 */
exports.createProduct = async (req, res) => {
    try {
        const { name, price, category, description } = req.body;

        // Validation
        if (!name || !price || !category) {
            return res.status(400).json({ error: "Please provide all required fields" });
        }

        const newProduct = new Product({
            name,
            price,
            category,
            description,
            seller: req.user._id, // Provided by the 'protect' middleware
            status: 'active'
        });

        const savedProduct = await newProduct.save();
        
        res.status(201).json({ 
            message: "Product Added Successfully!", 
            product: savedProduct 
        });
    } catch (err) {
        console.error("Create Product Error:", err);
        res.status(500).json({ error: "Server Error: Could not save product" });
    }
};