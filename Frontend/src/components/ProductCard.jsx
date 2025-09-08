import { useApp } from '../context/AppContext';
import { useState } from 'react';

export default function ProductCard({ product }) {
  const { state, dispatch } = useApp();
  const [imageError, setImageError] = useState(false);

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
        {imageError ? (
          <div className="text-gray-500 text-center p-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-sm mt-2">Image not available</p>
          </div>
        ) : (
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-48 object-cover"
            onError={handleImageError}
          />
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-gray-600 mt-1">${product.price.toFixed(2)}</p>
        <p className="text-sm text-gray-500 mt-2">{product.category}</p>
        <p className="text-sm text-gray-600 mt-2 line-clamp-2">{product.description}</p>
        <button 
          onClick={addToCart}
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}