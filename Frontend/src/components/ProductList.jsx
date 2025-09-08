import { useApp } from '../context/AppContext';
import ProductCard from './ProductCard';
import Filter from './Filter'; 

export default function ProductList() {
  const { state } = useApp();

  // Filter products based on filters
  const filteredProducts = state.products.filter(product => {
    // Category filter
    if (state.filters.category !== 'All' && product.category !== state.filters.category) {
      return false;
    }
    
    // Price range filter
    if (product.price < state.filters.minPrice || product.price > state.filters.maxPrice) {
      return false;
    }
    
    // Search filter
    if (state.filters.search && 
        !product.name.toLowerCase().includes(state.filters.search.toLowerCase()) &&
        !product.description.toLowerCase().includes(state.filters.search.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  return (
    <section id="products" className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Products</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Filters sidebar */}
          <div className="md:col-span-1">
            <Filter />
          </div>
          
          {/* Products grid */}
          <div className="md:col-span-3">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No products found matching your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}