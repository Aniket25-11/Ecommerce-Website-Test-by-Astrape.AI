import { useApp } from '../context/AppContext';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';

export default function Home() {
  const { state } = useApp();

  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <ProductList />
        <Cart />
      </main>
    </div>
  );
}