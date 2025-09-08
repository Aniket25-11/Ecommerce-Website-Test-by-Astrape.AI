import { useApp } from '../context/AppContext';

export default function CartItem({ item }) {
  const { dispatch } = useApp();

  const updateQuantity = (newQuantity) => {
    if (newQuantity < 1) return;
    dispatch({ 
      type: 'UPDATE_CART_QUANTITY', 
      payload: { id: item.id, quantity: newQuantity } 
    });
  };

  const removeItem = () => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item.id });
  };

  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-16 h-16 object-cover rounded"
        />
        <div className="ml-4">
          <h3 className="text-lg font-medium">{item.name}</h3>
          <p className="text-gray-500">${item.price.toFixed(2)}</p>
        </div>
      </div>
      
      <div className="flex items-center">
        <div className="flex items-center mr-4">
          <button 
            onClick={() => updateQuantity(item.quantity - 1)}
            className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-l"
          >
            -
          </button>
          <span className="w-10 h-8 flex items-center justify-center border-t border-b">
            {item.quantity}
          </span>
          <button 
            onClick={() => updateQuantity(item.quantity + 1)}
            className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-r"
          >
            +
          </button>
        </div>
        
        <p className="w-20 text-right font-medium">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
        
        <button 
          onClick={removeItem}
          className="ml-4 text-red-500 hover:text-red-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  );
}