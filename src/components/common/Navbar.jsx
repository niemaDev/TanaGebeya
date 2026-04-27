import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full shadow-md">
      <div className="bg-slate-900 text-white py-2 px-4 hidden md:block">
        <div className="container mx-auto flex justify-between items-center text-xs font-medium">
          <div className="flex items-center space-x-4">
            <span>📞 Support: +251 900 000000</span>
            <span>📍 Store Locator</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="cursor-pointer hover:text-yellow-400">Amharic</span>
            <span className="cursor-pointer text-yellow-400">English</span>
          </div>
        </div>
      </div>

      <div className="bg-white py-4 border-b border-gray-100">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-4">
          <Link to="/" className="text-3xl font-black tracking-tighter text-slate-900 flex-shrink-0">
            ETHIO<span className="text-yellow-500">SUQ</span>
          </Link>

          <div className="flex-grow w-full max-w-2xl relative group">
            <div className="flex">
              <input 
                type="text" 
                placeholder="Search for products, categories..." 
                className="w-full px-6 py-3 bg-gray-100 rounded-l-full border-none focus:ring-2 focus:ring-yellow-400 outline-none transition-all"
              />
              <button className="bg-yellow-400 px-8 py-3 rounded-r-full font-bold hover:bg-yellow-500 transition shadow-sm">
                Search
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-6 flex-shrink-0">
            <Link to="/login" className="flex items-center space-x-2 group">
              <div className="p-2 rounded-full bg-gray-50 group-hover:bg-yellow-50 transition">
                👤
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-500 font-bold uppercase">Account</span>
                <span className="text-sm font-bold text-gray-800">Login</span>
              </div>
            </Link>

            <Link to="/cart" className="flex items-center space-x-2 group relative">
              <div className="p-2 rounded-full bg-gray-50 group-hover:bg-yellow-50 transition relative">
                🛒
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center">
                  0
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-500 font-bold uppercase">My Cart</span>
                <span className="text-sm font-bold text-gray-800">Br 0.00</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}