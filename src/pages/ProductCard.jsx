// src/features/catalog/ProductCard.jsx
const ProductCard = ({ product }) => {
  return (
    <div className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 relative">
     
      <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
        -10%
      </div>

      <div className="h-48 overflow-hidden bg-gray-50 flex items-center justify-center p-4">
        <img 
          src={product.image} 
          alt={product.name} 
          className="max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="p-4">
        <p className="text-xs text-gray-400 uppercase font-medium mb-1">{product.category}</p>
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 h-10 mb-2 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-between mt-4">
          <div className="flex flex-col">
            <span className="text-lg font-bold text-gray-900">Br{product.price.toLocaleString()}</span>
            <span className="text-xs text-gray-400 line-through">Br{(product.price * 1.1).toFixed(0)}</span>
          </div>
          
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 p-2 rounded-full shadow-sm transition-transform active:scale-95">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;