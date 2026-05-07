const mongoose = require('mongoose');

/**
 * PRODUCT SCHEMA
 * TanaGebeya Shopping System
 */
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Product name is required'],
      trim: true,
      maxlength: 100
    },

    description: {
      type: String,
      required: [true, 'Product description is required'],
      trim: true,
      maxlength: 2000
    },

    price: {
      type: Number,
      required: [true, 'Product price is required'],
      min: 0
    },

    category: {
      type: String,
      required: [true, 'Product category is required'],
      trim: true
    },

    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },

    status: {
      type: String,
      enum: ['active', 'inactive', 'out_of_stock'],
      default: 'active'
    },

    imageUrl: {
      type: String,
      default: ''
    },

    stock: {
      type: Number,
      default: 1,
      min: 0
    },

    ratings: {
      type: Number,
      default: 0,
      min: 0,
      max: 5
    },

    numReviews: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

/**
 * INDEXES
 * Faster searching/filtering
 */
productSchema.index({ category: 1 });
productSchema.index({ seller: 1 });
productSchema.index({ status: 1 });

module.exports = mongoose.model('Product', productSchema);  