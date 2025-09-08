import { useApp } from '../context/AppContext';
import { categories } from '../data/sampleProducts';

export default function Filter() {
  const { state, dispatch } = useApp();

  const handleFilterChange = (filterType, value) => {
    dispatch({ type: 'SET_FILTERS', payload: { [filterType]: value } });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>
      
      <div className="space-y-4">
        {/* Category filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
          <select 
            value={state.filters.category}
            onChange={(e) => handleFilterChange('category', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        {/* Price range filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
          <div className="flex items-center space-x-2">
            <input 
              type="number"
              placeholder="Min"
              value={state.filters.minPrice}
              onChange={(e) => handleFilterChange('minPrice', Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <span className="text-gray-500">to</span>
            <input 
              type="number"
              placeholder="Max"
              value={state.filters.maxPrice}
              onChange={(e) => handleFilterChange('maxPrice', Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        {/* Search filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
          <input 
            type="text"
            placeholder="Search products..."
            value={state.filters.search}
            onChange={(e) => handleFilterChange('search', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>
    </div>
  );
}