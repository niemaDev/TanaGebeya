const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    orderItems: [
        {
            name: { type: String, required: true },
            qty: { type: Number, required: true },
            price: { type: Number, required: true },
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
            seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // To track which vendor gets paid
        }
    ],
    shippingAddress: {
        city: { type: String, default: "Bahir Dar" },
        address: { type: String, required: true },
        phone: { type: String, required: true }
    },
    paymentMethod: { type: String, required: true, default: "Chapa" }, // or Telebirr/CBE
    totalPrice: { type: Number, required: true },
    isPaid: { type: Boolean, default: false },
    paidAt: { type: Date },
    status: { type: String, default: 'Processing' } // Processing, Shipped, Delivered
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);