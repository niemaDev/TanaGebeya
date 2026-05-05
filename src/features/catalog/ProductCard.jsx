import { ShoppingCart, Eye } from 'lucide-react';

export default function ProductCard({ product }) {
  return (
    <div className="bg-white group relative flex flex-col h-full border border-gray-100 hover:border-blue-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 rounded-xl overflow-hidden">
      {/* Image Container with Hover Actions */}
      <div className="relative aspect-square bg-white flex items-center justify-center p-4 overflow-hidden">
        <img 
          src={product?.image || "https://via.placeholder.com/300"} 
          alt={product?.name} 
          className="max-h-full max-w-full object-contain transform transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Quick View Overlay (Modern Touch) */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
           <button className="p-2 bg-white rounded-full shadow-md hover:bg-yellow-400 transition-colors">
              <Eye size={18} className="text-slate-700" />
           </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col flex-grow">
        <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-1">
          {product?.subCategory || "General"}
        </span>
        
        <h3 className="text-[14px] font-bold text-slate-800 leading-snug mb-4 line-clamp-2 hover:text-blue-600 cursor-pointer transition-colors">
          {product?.name || "Product Name"}
        </h3>
        
        {/* Price and Cart Row */}
        <div className="mt-auto flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-400 font-bold uppercase">Price</span>
            <span className="text-lg font-black text-slate-900">
              Br{product?.price?.toLocaleString() || "0.00"}
            </span>
          </div>
          
          <button className="bg-yellow-400 hover:bg-slate-800 text-white p-3 rounded-xl transition-all duration-300 shadow-md shadow-yellow-100 active:scale-90">
            <ShoppingCart size={20} fill="currentColor" />
          </button>
        </div>
      </div>
    </div>
  );
}