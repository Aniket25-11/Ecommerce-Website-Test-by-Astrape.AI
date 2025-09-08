# E-Commerce MERN Stack Application

## 📋 Project Overview

This project is a full-stack e-commerce web application built as part of a technical assessment for **Astrape.AI Company**. The application demonstrates proficiency in the MERN stack (MongoDB, Express.js, React.js, Node.js) and includes user authentication, product management, shopping cart functionality, and responsive design.

## 🎯 Project Requirements

### Backend Requirements:
- ✅ Authentication APIs using JWT
- ✅ CRUD APIs for items with filters (price, categories)
- ✅ Add to cart APIs

### Frontend Requirements:
- ✅ Signup and login pages
- ✅ Product listing page with filters
- ✅ Cart page with add/remove items functionality
- ✅ Cart items persistence after logging out
- ✅ Responsive design using Tailwind CSS
- ✅ React.js with Vite

## 🚀 Features Implemented

### 🔐 Authentication System
- User registration and login with JWT tokens
- Protected routes requiring authentication
- Persistent sessions with secure token storage
- Password hashing with bcryptjs

### 🛍️ Product Management
- Product catalog with filtering by category, price range, and search
- Product detail views
- Admin product CRUD operations (create, read, update, delete)
- Sample products pre-loaded in database

### 🛒 Shopping Cart
- Add/remove items from cart
- Update item quantities
- Persistent cart using localStorage
- Cart total calculation
- Checkout process (simulated)

### 🎨 User Interface
- Modern, responsive design with Tailwind CSS
- Mobile-first approach with responsive breakpoints
- Professional authentication pages
- Loading states and error handling
- Toast notifications for user feedback

## 🛠️ Technology Stack

### Frontend:
- **React.js** (v18) with Vite
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Context API** for state management
- **Custom hooks** for API calls

### Backend:
- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **JWT** for authentication
- **bcryptjs** for password hashing
- **CORS** for cross-origin requests

### Development Tools:
- **Nodemon** for automatic server restarts
- **MongoDB Compass** for database management
- **Postman/Thunder Client** for API testing

## 📦 Project Structure

```
ecommerce-app/
├── frontend/                 # React.js frontend application
│   ├── public/
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   ├── context/          # React context for state management
│   │   ├── hooks/            # Custom React hooks
│   │   ├── pages/            # Page components
│   │   ├── config/           # Configuration files
│   │   └── data/             # Sample data
│   ├── .env                  # Environment variables
│   └── package.json
│
└── backend/                  # Node.js backend application
    ├── config/               # Database configuration
    ├── controllers/          # Route controllers
    ├── middleware/           # Custom middleware
    ├── models/               # MongoDB models
    ├── routes/               # API routes
    ├── .env                  # Environment variables
    ├── server.js             # Entry point
    └── package.json
```

## 🚀 Installation & Setup

### Prerequisites:
- Node.js (v14 or higher)
- MongoDB (local or Atlas cloud)
- npm or yarn package manager

### Backend Setup:

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the backend directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/ecommerce
   JWT_SECRET=your_super_secret_jwt_key_here
   JWT_EXPIRE=7d
   ```

4. **Start MongoDB service** (if using local MongoDB)

5. **Seed the database with sample products:**
   ```bash
   npm run seed
   ```

6. **Start the development server:**
   ```bash
   npm run dev
   ```
   Backend will run on http://localhost:5000

### Frontend Setup:

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the frontend directory:
   ```env
   VITE_API_BASE_URL=http://localhost:5000/api
   VITE_APP_NAME=ShopEasy
   VITE_DEPLOYMENT_ENV=development
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   Frontend will run on http://localhost:5173

## 📡 API Endpoints

### Authentication:
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user (protected)

### Products:
- `GET /api/products` - Get all products (with filtering)
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (admin)
- `PUT /api/products/:id` - Update product (admin)
- `DELETE /api/products/:id` - Delete product (admin)

### Cart:
- `GET /api/cart` - Get user cart (protected)
- `POST /api/cart/items` - Add item to cart (protected)
- `PUT /api/cart/items/:itemId` - Update cart item (protected)
- `DELETE /api/cart/items/:itemId` - Remove item from cart (protected)
- `DELETE /api/cart` - Clear cart (protected)

## 🎨 UI/UX Features

- **Responsive Design**: Fully responsive across mobile, tablet, and desktop
- **Modern Authentication Flow**: Separate login/signup pages with form validation
- **Product Filtering**: Filter by category, price range, and search terms
- **Shopping Cart**: Persistent cart with quantity management
- **Loading States**: Visual feedback during API calls
- **Error Handling**: User-friendly error messages and toast notifications
- **Professional Styling**: Clean, modern interface with Tailwind CSS

## 🔒 Security Features

- JWT-based authentication with secure token storage
- Password hashing with bcryptjs
- Protected API routes with authentication middleware
- Input validation and sanitization
- CORS configuration for secure cross-origin requests

## 🧪 Testing

### Manual Testing:
1. User registration and login
2. Product browsing with filters
3. Adding/removing items from cart
4. Cart persistence after logout/login
5. Responsive design on different screen sizes

### API Testing:
Use Postman or Thunder Client to test:
- Authentication endpoints
- Product CRUD operations
- Cart management endpoints

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify):
1. Set environment variables in deployment platform
2. Connect GitHub repository
3. Deploy automatically on push to main branch

### Backend Deployment (Render/Railway):
1. Set environment variables in deployment platform
2. Connect GitHub repository
3. Specify build command (`npm install`) and start command (`npm start`)

### Database Deployment:
- Use MongoDB Atlas for cloud database
- Update `MONGODB_URI` in backend environment variables

## 📝 Future Enhancements

- [ ] Payment integration (Stripe/PayPal)
- [ ] Order management system
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Admin dashboard
- [ ] Email notifications
- [ ] Advanced search with filters
- [ ] Product image upload
- [ ] Social media authentication
- [ ] Unit and integration tests

## 👨‍💻 Developer Notes

This project demonstrates:
- Full-stack development capabilities with MERN stack
- RESTful API design and implementation
- Modern React patterns (hooks, context API)
- Responsive UI design with Tailwind CSS
- Authentication and authorization implementation
- Database design with MongoDB/Mongoose
- Environment configuration for different deployment stages

## 📞 Support

For any questions or issues regarding this project, please contact the development team or refer to the documentation in the respective frontend and backend directories.

---

**Built with ❤️ for Astrape.AI Company Technical Assessment**