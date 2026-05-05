import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, Search, User, ShoppingBag, 
  ChevronDown, Phone, Mail, 
  Store, UserPlus, LogIn,
  Truck, Heart
} from 'lucide-react';
import MobileDrawer from './MobileDrawer';

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);
  
  const isActive = (path) => location.pathname === path;

  return (
    <header className="w-full bg-white font-sans text-[#333] relative shadow-sm">
      
      {/* Top Bar */}
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
                <div className="absolute top-full left-0 w-80 bg-white shadow-xl border border-gray-100 z-50 py-2 rounded-md text-sm text-gray-700 animate-in fade-in zoom-in duration-150">
                  {/* LINK 1: REGISTER / VENDOR */}
                  <Link to="/signup" className="px-4 py-3 hover:bg-gray-50 border-b border-gray-50 flex items-center gap-2 transition-colors block">
                    <UserPlus size={14} className="text-yellow-600" /> 
                    <span>1. <b>Register</b> | Become a Vendor | <b>Sell Now</b></span>
                  </Link>

                  {/* LINK 2: LOGIN / STORE MANAGER */}
                  <Link to="/login" className="px-4 py-3 hover:bg-gray-50 flex items-center gap-2 transition-colors block">
                    <LogIn size={14} className="text-yellow-600" /> 
                    <span>2. <b>Login</b> | Store Manager | <b>Sell Now</b></span>
                  </Link>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <Link to="/wishlist" className="hover:text-yellow-600 flex items-center gap-1">
              <Heart size={12} /> My Wishlist
            </Link>
            {/* LINK 3: MY ACCOUNT */}
            <Link to="/login" className="hover:text-yellow-600 flex items-center gap-1">
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
          <Link to="/" className={`${isActive('/') ? 'text-yellow-500 underline underline-offset-8 decoration-2' : 'hover:text-yellow-500'} transition-colors`}>Home</Link>
          <Link to="/shop" className={`${isActive('/shop') ? 'text-yellow-500 underline underline-offset-8 decoration-2' : 'hover:text-yellow-500'} transition-colors`}>Shop</Link>
          <Link to="/about" className={`${isActive('/about') ? 'text-yellow-500 underline underline-offset-8 decoration-2' : 'hover:text-yellow-500'} transition-colors`}>About Us</Link>
          <Link to="/cart" className={`${isActive('/cart') ? 'text-yellow-500 underline underline-offset-8 decoration-2' : 'hover:text-yellow-500'} transition-colors`}>Cart</Link>
          
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
          {/* MAIN USER ICON LINK */}
          <Link to="/login">
            <User size={24} className="cursor-pointer hover:text-yellow-500 transition-colors" />
          </Link>
        </div>
      </div>

      <div className="bg-yellow-400 py-3 shadow-sm z-10">
        <div className="container mx-auto px-4 flex items-center gap-4">
          <span className="font-bold text-slate-800 hidden md:block">Browse Categories</span>
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