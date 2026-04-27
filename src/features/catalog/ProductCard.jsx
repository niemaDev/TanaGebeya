import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const formattedPrice = product.price.toLocaleString();
  const oldPrice = (product.price * 1.15).toLocaleString(); // Mock 15% discount for UI

  return (
    <div className="group bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col relative h-full">
     
      <div className="absolute top-3 left-3 z-10 bg-red-500 text-white text-[10px] font-black px-2 py-1 rounded-sm uppercase tracking-tighter">
        Hot Deal
      </div>

      <Link to={`/product/${product.id}`} className="block relative h-52 overflow-hidden bg-gray-50">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="bg-white/90 text-gray-900 text-xs font-bold px-4 py-2 rounded-full shadow-lg">
            Quick View
          </span>
        </div>
      </Link>

      <div className="p-4 flex flex-col flex-grow">
        <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">
          {product.category}
        </span>
        
        <Link to={`/product/${product.id}`}>
          <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 h-10 mb-3 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
        </Link>

        <div className="mt-auto">
          <div className="flex items-baseline space-x-2">
            <span className="text-lg font-black text-gray-900 leading-none">
              Br {formattedPrice}
            </span>
            <span className="text-xs text-gray-400 line-through">
              Br {oldPrice}
            </span>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="flex text-yellow-400 text-xs">
              {/* Simple Static Stars for UI density */}
              ★★★★★ <span className="text-gray-300 ml-1">(12)</span>
            </div>
            
            <button 
              className="bg-yellow-400 hover:bg-slate-900 hover:text-white text-gray-900 p-2.5 rounded-lg shadow-sm transition-all duration-300 active:scale-90"
              title="Add to Shopping Cart"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2.5} 
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;