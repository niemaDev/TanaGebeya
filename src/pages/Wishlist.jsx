import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Trash2, ShoppingCart, Star, ChevronRight, ShoppingBag } from 'lucide-react';

export default function Wishlist() {
  // Sample wishlist data
  const [wishlistItems, setWishlistItems] = useState([
    { id: 1, name: "G-Tab 10000mAh Power Bank Fast Charge", price: 3999, oldPrice: 4500, category: "Power Bank", image: "/apple-collection.jpg", stars: 5 },
    { id: 2, name: "Premium Toilet Storage Rack", price: 2200, category: "Home & Bath", image: "/apple-collection.jpg", stars: 4 },
    { id: 3, name: "HainoTeko SQ-15 Smartwatch Series", price: 6500, category: "Smartwatches", image: "/gadgets.jpg", stars: 5 },
  ]);

  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  return (
    <div className="bg-[#f4f4f4] min-h-screen py-16 px-4">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header and Breadcrumbs */}
        <div className="flex items-center justify-between mb-12 pb-4 border-b border-gray-100">
          <div className='flex items-center gap-3'>
             <div className="bg-yellow-400 p-2 rounded-lg mr-1 shadow-sm hidden md:block">
              <Heart size={20} className="text-slate-900" />
            </div>
            <h1 className="text-3xl font-black uppercase text-gray-900 tracking-tight">Your Wishlist</h1>
          </div>
          <div className="text-xs font-medium text-gray-500 flex items-center gap-2">
            <Link to="/" className="hover:text-yellow-600 transition-colors">Home</Link>
            <ChevronRight size={12} className="text-gray-300" />
            <span className="text-yellow-600">Wishlist ({wishlistItems.length})</span>
          </div>
        </div>

        {/* Wishlist Items List */}
        {wishlistItems.length === 0 ? (
          <div className="text-center py-20 bg-white p-10 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center gap-6">
             <div className="bg-gray-100 p-6 rounded-full inline-block">
               <Heart size={48} className="text-gray-300" />
             </div>
            <h2 className="text-2xl font-black text-gray-900 uppercase">Your wishlist is empty</h2>
            <p className="text-sm text-gray-600 max-w-md mb-6">Looks like you haven't added any favorite products to your wishlist yet. Explore our latest deals and add some items!</p>
            <Link to="/shop" className="bg-[#34495e] text-white px-8 py-3 rounded-lg font-bold text-sm uppercase flex items-center justify-center gap-2 hover:bg-slate-700 transition-colors group relative shadow-md">
                <ShoppingBag size={18} />
                Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistItems.map((product) => (
              <div key={product.id} className="p-4 border-r border-b border-gray-100 hover:shadow-2xl hover:z-20 transition-all group relative bg-white rounded-lg">
                
                {/* Trash Button */}
                <button 
                  onClick={() => removeFromWishlist(product.id)}
                  className="absolute top-2 right-2 bg-gray-100 text-gray-400 p-2 rounded-full hover:bg-red-50 hover:text-red-500 transition-all z-20 group-hover:opacity-100 opacity-0 md:opacity-100"
                  aria-label="Remove from wishlist"
                >
                  <Trash2 size={16} />
                </button>

                {/* Product Image */}
                <div className="relative mb-4">
                  <img src={product.image} alt={product.name} className="w-full h-48 aspect-square object-contain mx-auto" />
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className={`${i < product.stars ? 'fill-orange-500 text-orange-500' : 'fill-gray-100 text-gray-100'}`} />
                  ))}
                </div>

                {/* Product Info */}
                <p className="text-[9px] text-gray-400 uppercase font-black mb-1">{product.category}</p>
                <h4 className="text-[11px] font-bold text-blue-700 hover:underline cursor-pointer line-clamp-2 h-8 leading-tight mb-3">
                  {product.name}
                </h4>
                
                {/* Price */}
                <div className="flex items-center justify-between mb-4 mt-2">
                   <div className="flex flex-col">
                    <span className="text-sm font-black text-slate-800">Br {product.price.toLocaleString()}</span>
                    {product.oldPrice && (
                      <span className="text-[10px] text-gray-400 line-through">Br {product.oldPrice.toLocaleString()}</span>
                    )}
                  </div>
                  <span className="text-[9px] text-yellow-600 font-black tracking-widest uppercase">Limited Offer</span>
                </div>

                {/* Add to Cart Button */}
                <button 
                  className="w-full bg-[#34495e] text-white py-3 rounded-lg font-bold text-xs uppercase flex items-center justify-center gap-2 hover:bg-slate-700 transition-colors active:scale-95 group relative shadow-md"
                >
                  <ShoppingCart size={16} />
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}