const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

// Load env vars
dotenv.config();

// Sample products data
// const products = [
//   {
//     name: "Wireless Bluetooth Headphones",
//     price: 79.99,
//     category: "Electronics",
//     description: "High-quality wireless headphones with noise cancellation",
//     image: "https://via.placeholder.com/300x300?text=Headphones",
//     stock: 50,
//     rating: 4.5
//   },
//   {
//     name: "Smartphone",
//     price: 599.99,
//     category: "Electronics",
//     description: "Latest smartphone with high-resolution camera",
//     image: "https://via.placeholder.com/300x300?text=Smartphone",
//     stock: 30,
//     rating: 4.8
//   },
//   {
//     name: "Running Shoes",
//     price: 89.99,
//     category: "Fashion",
//     description: "Comfortable running shoes for athletes",
//     image: "https://via.placeholder.com/300x300?text=Shoes",
//     stock: 100,
//     rating: 4.3
//   },
//   {
//     name: "Coffee Maker",
//     price: 49.99,
//     category: "Home",
//     description: "Automatic coffee maker for your morning brew",
//     image: "https://via.placeholder.com/300x300?text=Coffee+Maker",
//     stock: 40,
//     rating: 4.2
//   },
//   {
//     name: "Fitness Tracker",
//     price: 39.99,
//     category: "Electronics",
//     description: "Track your steps, heart rate, and sleep patterns",
//     image: "https://via.placeholder.com/300x300?text=Fitness+Tracker",
//     stock: 75,
//     rating: 4.0
//   },
//   {
//     name: "Cotton T-Shirt",
//     price: 19.99,
//     category: "Fashion",
//     description: "100% cotton t-shirt for everyday wear",
//     image: "https://via.placeholder.com/300x300?text=T-Shirt",
//     stock: 200,
//     rating: 4.1
//   },
//   {
//     name: "Desk Lamp",
//     price: 29.99,
//     category: "Home",
//     description: "LED desk lamp with adjustable brightness",
//     image: "https://via.placeholder.com/300x300?text=Desk+Lamp",
//     stock: 60,
//     rating: 4.4
//   },
//   {
//     name: "Backpack",
//     price: 59.99,
//     category: "Fashion",
//     description: "Durable backpack with laptop compartment",
//     image: "https://via.placeholder.com/300x300?text=Backpack",
//     stock: 80,
//     rating: 4.6
//   },
//   {
//     name: "Wireless Mouse",
//     price: 24.99,
//     category: "Electronics",
//     description: "Ergonomic wireless mouse for comfortable use",
//     image: "https://via.placeholder.com/300x300?text=Wireless+Mouse",
//     stock: 120,
//     rating: 4.3
//   },
//   {
//     name: "Water Bottle",
//     price: 14.99,
//     category: "Home",
//     description: "Insulated water bottle that keeps drinks cold for 24 hours",
//     image: "https://via.placeholder.com/300x300?text=Water+Bottle",
//     stock: 150,
//     rating: 4.7
//   }
// ];


// Alternative: Use reliable image URLs
export const sampleProducts = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 79.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
    description: "High-quality wireless headphones with noise cancellation"
  },
  {
    id: 2,
    name: "Smartphone",
    price: 599.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop",
    description: "Latest smartphone with high-resolution camera"
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 89.99,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
    description: "Comfortable running shoes for athletes"
  },
  {
    id: 4,
    name: "Coffee Maker",
    price: 49.99,
    category: "Home",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=300&fit=crop",
    description: "Automatic coffee maker for your morning brew"
  },
  {
    id: 5,
    name: "Fitness Tracker",
    price: 39.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=300&h=300&fit=crop",
    description: "Track your steps, heart rate, and sleep patterns"
  },
  {
    id: 6,
    name: "Cotton T-Shirt",
    price: 19.99,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop",
    description: "100% cotton t-shirt for everyday wear"
  },
  {
    id: 7,
    name: "Desk Lamp",
    price: 29.99,
    category: "Home",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    description: "LED desk lamp with adjustable brightness"
  },
  {
    id: 8,
    name: "Backpack",
    price: 59.99,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
    description: "Durable backpack with laptop compartment"
  }
];



// Connect to DB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const importData = async () => {
  try {
    // Clear existing products
    await Product.deleteMany();
    
    // Insert sample products
    await Product.insertMany(products);
    
    console.log('Data imported successfully');
    process.exit();
  } catch (error) {
    console.error('Error importing data:', error);
    process.exit(1);
  }
};

importData();