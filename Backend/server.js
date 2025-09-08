// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

// CORS (allow your frontend)
const allowedOrigins = [
  'http://localhost:5173',
  'https://ecommerce-website-test-by-astrape-a.vercel.app'
];
app.use(cors({
  origin: (origin, cb) => {
    // allow non-browser tools with no origin
    if (!origin) return cb(null, true);
    if (allowedOrigins.includes(origin)) return cb(null, true);
    cb(new Error('Not allowed by CORS'));
  },
  credentials: true
}));

// routes
const auth = require('./routes/auth');
const products = require('./routes/products');
const cart = require('./routes/cart');

app.use('/api/auth', auth);
app.use('/api/products', products);
app.use('/api/cart', cart);

app.get('/', (req, res) => {
  res.json({ message: 'E-commerce API is running!' });
});

// error handler
app.use(errorHandler);

// ---- IMPORTANT: export the app for Vercel, only listen locally
const PORT = process.env.PORT || 5000;

if (require.main === module) {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;
