const express = require('express');
const router = express.Router();

// CONTROLLERS
const {
  getProducts,
  createProduct
} = require('../controllers/productController');

// MIDDLEWARE (ONLY ONCE)
const {
  protect,
  authorize
} = require('../middleware/authMiddleware');

/**
 * PUBLIC ROUTE - GET PRODUCTS
 */
router.get('/products', getProducts);

/**
 * PROTECTED ROUTE - CREATE PRODUCT
 * Only vendor & admin allowed
 */
router.post(
  '/products',
  protect,
  authorize('vendor', 'admin'),
  createProduct
);

module.exports = router;