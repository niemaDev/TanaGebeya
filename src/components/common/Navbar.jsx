import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, Search, User, ShoppingBag, 
  ChevronDown, Phone, Mail, 
  Store, LayoutDashboard, UserPlus, LogIn,
  Truck, Heart
} from 'lucide-react';
import MobileDrawer from './MobileDrawer';

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <header className="w-full bg-white font-sans text-[#333] relative shadow-sm">
     
      <div className="border-b border-gray-100 py-1.5 px-4 hidden lg:block bg-gray-50/50">
        <div className="container mx-auto flex justify-between items-center text-[11px] font-medium text-gray-600">
          <div className="flex items-center space-x-6">
            <Link to="/track" className="hover:text-yellow-600 flex items-center gap-1 transition-colors">
              <Truck size={12} /> Track Your Order
            </Link>
            
            <div 
              className="relative cursor-pointer flex items-center gap-1 py-1"
              onMouseEnter={() => setActiveDropdown('suq')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Store size={12} /> 
              <span>ሱቅ ይክፈቱ</span> 
              <ChevronDown size={10} className={`transition-transform duration-300 ${activeDropdown === 'suq' ? 'rotate-180' : ''}`} />
              
              {activeDropdown === 'suq' && (
                <div className="absolute top-full left-0 w-72 bg-white shadow-xl border border-gray-100 z-50 py-2 rounded-md text-sm text-gray-700 animate-in fade-in zoom-in duration-150">
                  <div className="px-4 py-2 hover:bg-gray-50 border-b border-gray-50 flex items-center gap-2">
                    <UserPlus size={14} className="text-gray-400" /> 
                    <span>1. <b>Register</b> | Become a Vendor</span>
                  </div>
                  <div className="px-4 py-2 hover:bg-gray-50 border-b border-gray-50 flex items-center gap-2">
                    <LogIn size={14} className="text-gray-400" /> 
                    <span>2. <b>Login</b> | Store Manager</span>
                  </div>
                  <div className="px-4 py-2 hover:bg-gray-50 flex items-center gap-2">
                    <LayoutDashboard size={14} className="text-gray-400" /> 
                    <span>3. <b>Dashboard</b> | Store Manager</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <Link to="/wishlist" className="hover:text-yellow-600 flex items-center gap-1">
              <Heart size={12} /> My Wishlist
            </Link>
            <Link to="/account" className="hover:text-yellow-600 flex items-center gap-1">
              <User size={12} /> My Account
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsDrawerOpen(true)} 
            className="p-1 hover:bg-gray-100 rounded-md transition-colors cursor-pointer"
          >
            <Menu size={28} />
          </button>
          
          <Link to="/" className="flex items-center">
            <div className="bg-yellow-400 p-2 rounded-lg mr-2 hidden sm:block shadow-sm">
              <ShoppingBag size={24} className="text-slate-900" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-black text-[#6b1d1d] tracking-tighter uppercase font-serif">TanaGebeya.com</span>
              <span className="text-[9px] font-bold text-gray-400 tracking-widest uppercase">Your Online Store</span>
            </div>
          </Link>
        </div>

        <nav className="hidden lg:flex items-center space-x-8 text-sm font-bold text-gray-700">
          <Link to="/" className="text-yellow-500 underline underline-offset-8 decoration-2">Home</Link>
          <Link to="/shop" className="hover:text-yellow-500 transition-colors">Shop</Link>
          
          {/* Sell on TanaGebeya Dropdown */}
          <div 
            className="relative cursor-pointer py-1 flex items-center gap-1"
            onMouseEnter={() => setActiveDropdown('sell')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            Sell on TanaGebeya 
            <ChevronDown size={12} className={`transition-transform duration-300 ${activeDropdown === 'sell' ? 'rotate-180' : ''}`} />
            
            {activeDropdown === 'sell' && (
              <div className="absolute top-full left-0 w-52 bg-white shadow-xl border border-gray-100 z-50 py-2 rounded-md font-medium text-gray-600 animate-in fade-in slide-in-from-top-1">
                <Link to="/register-seller" className="block px-4 py-2 hover:bg-gray-50">Seller Registration</Link>
                <Link to="/seller-dashboard" className="block px-4 py-2 hover:bg-gray-50">Seller Dashboard</Link>
              </div>
            )}
          </div>

          <div className="flex items-center gap-3 border-l border-gray-200 pl-8 ml-2">
            <div className="bg-yellow-50 p-2 rounded-full">
              <Phone size={16} className="text-yellow-600" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-gray-700 leading-tight">+251 97 791 9000</span>
              <span className="text-[10px] text-gray-400 font-medium flex items-center gap-1 mt-0.5">
                <Mail size={10} className="text-yellow-500" /> shyach@tanagebeya.com
              </span>
            </div>
          </div>
        </nav>

        <div className="flex items-center gap-6">
          <Link to="/wishlist" className="relative group cursor-pointer hidden sm:block">
            <Heart size={24} className="group-hover:text-yellow-500 transition-colors" />
            <span className="absolute -top-2 -right-2 bg-slate-800 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold border border-yellow-400">0</span>
          </Link>
          <User size={24} className="cursor-pointer hover:text-yellow-500 transition-colors" />
        </div>
      </div>

      {/*  CATEGORY & SEARCH BAR */}
      <div className="bg-yellow-400 py-3 shadow-sm z-10">
        <div className="container mx-auto px-4 flex items-center gap-4">
          <button 
            onClick={() => setIsDrawerOpen(true)}
            className="hidden lg:flex items-center justify-between w-52 text-sm font-bold px-2 py-2 hover:bg-yellow-500 rounded-md transition-all cursor-pointer"
          >
            <span>Browse Categories</span>
            <ChevronDown size={14} className={`transition-transform duration-300 ${isDrawerOpen ? 'rotate-180' : ''}`} />
          </button>

          <div className="flex-grow flex items-center bg-white rounded-md overflow-hidden h-11 shadow-inner focus-within:ring-2 focus-within:ring-slate-800 transition-all">
            <input type="text" placeholder="Search for Products" className="flex-grow px-4 text-sm outline-none font-medium" />
            <button className="bg-[#34495e] text-white px-6 h-full hover:bg-slate-700 transition-colors flex items-center justify-center">
              <Search size={18} />
            </button>
          </div>

          <Link to="/cart" className="flex items-center gap-2 font-black text-slate-800 group">
            <div className="relative">
              <ShoppingBag size={24} className="group-hover:scale-110 transition-transform" />
              <span className="absolute -top-2 -right-2 bg-slate-800 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold border border-yellow-400">2</span>
            </div>
            <span className="text-sm hidden sm:block tracking-tighter">Br 14,999.00</span>
          </Link>
        </div>
      </div>

      <MobileDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </header>
  );
}