import { useApp } from '../context/AppContext';
import CartItem from './CartItem';

export default function Cart() {
  const { state, dispatch } = useApp();

  const total = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (state.cart.length === 0) {
    return (
      <section id="cart" className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Your cart is empty.</p>
            <a 
              href="#products"
              className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
            >
              Continue Shopping
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="cart" className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {state.cart.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
          
          <div className="p-4 border-t">
            <div className="flex justify-between items-center">
              <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
              <button 
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
                onClick={() => alert('Checkout functionality will be implemented with backend')}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}