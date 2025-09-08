const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a product name'],
    trim: true,
    maxlength: 100
  },
  price: {
    type: Number,
    required: [true, 'Please provide a product price'],
    min: 0
  },
  category: {
    type: String,
    required: [true, 'Please provide a product category'],
    enum: ['Electronics', 'Fashion', 'Home', 'Sports', 'Books', 'Other']
  },
  description: {
    type: String,
    required: [true, 'Please provide a product description'],
    maxlength: 1000
  },
  image: {
    type: String,
    default: 'https://via.placeholder.com/300x300?text=Product+Image'
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
    default: 0
  },
  featured: {
    type: Boolean,
    default: false
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  }
}, {
  timestamps: true
});

// Create index for better search performance
productSchema.index({ name: 'text', description: 'text' });
productSchema.index({ category: 1, price: 1 });

module.exports = mongoose.model('Product', productSchema);