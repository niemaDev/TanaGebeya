import { useState } from 'react';
import CategorySidebar from '../features/catalog/CategorySidebar';
import ProductCard from '../features/catalog/ProductCard';

export default function Home() {
 
  const [products] = useState([
    { id: 1, name: "Rechargeable Mini Fan", price: 1200, category: "Electronics", image: "https://via.placeholder.com/200" },
    { id: 2, name: "Wireless Bluetooth Speaker", price: 3500, category: "Computing", image: "https://via.placeholder.com/200" },
    { id: 3, name: "Smart LED Desk Lamp", price: 2100, category: "Home & Office", image: "https://via.placeholder.com/200" },
    { id: 4, name: "Waterproof Sports Watch", price: 5400, category: "Sports", image: "https://via.placeholder.com/200" },
    { id: 5, name: "Portable Power Bank 20k", price: 4200, category: "Electronics", image: "https://via.placeholder.com/200" },
    { id: 6, name: "Ergonomic Office Chair", price: 18500, category: "Furniture", image: "https://via.placeholder.com/200" },
  ]);

  return (
    <div className="max-w-[1440px] mx-auto px-4 py-6">
      
      <div className="flex flex-col lg:flex-row gap-6 mb-12">
        <aside className="hidden lg:block lg:w-1/4">
          <CategorySidebar />
        </aside>

        <div className="flex-grow">
         
          <div className="relative h-[400px] bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl overflow-hidden shadow-lg flex items-center px-12 text-white">
            <div className="z-10 max-w-lg">
              <h1 className="text-5xl font-black mb-4 leading-tight">THE BEST DEALS START HERE</h1>
              <p className="text-lg opacity-90 mb-8 font-medium">Explore top-quality products with competitive prices in Ethiopia.</p>
              <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-md">
                Shop Now
              </button>
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[url('https://via.placeholder.com/600x400')] bg-cover bg-center opacity-40"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
        <div className="flex space-x-6 border-b-2 border-gray-100 flex-grow">
          <button className="pb-3 border-b-4 border-yellow-400 font-bold text-lg text-gray-900">Featured</button>
          <button className="pb-3 text-gray-400 font-bold text-lg hover:text-blue-600 transition">On Sale</button>
          <button className="pb-3 text-gray-400 font-bold text-lg hover:text-blue-600 transition">Best Selling</button>
        </div>
        <div className="text-sm font-medium text-blue-600 cursor-pointer hover:underline">
          View All Products →
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 bg-white p-10 rounded-2xl border border-gray-100 shadow-sm">
        <div className="flex flex-col items-center text-center">
          <span className="text-3xl mb-2">🚚</span>
          <h4 className="font-bold text-gray-900">Fast Delivery</h4>
          <p className="text-xs text-gray-500">Across Ethiopia</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <span className="text-3xl mb-2">💳</span>
          <h4 className="font-bold text-gray-900">Safe Payment</h4>
          <p className="text-xs text-gray-500">On Delivery</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <span className="text-3xl mb-2">🏆</span>
          <h4 className="font-bold text-gray-900">Quality Assurance</h4>
          <p className="text-xs text-gray-500">Inspected Items</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <span className="text-3xl mb-2">📞</span>
          <h4 className="font-bold text-gray-900">24/7 Support</h4>
          <p className="text-xs text-gray-500">Always Ready</p>
        </div>
      </div>
    </div>
  );
}