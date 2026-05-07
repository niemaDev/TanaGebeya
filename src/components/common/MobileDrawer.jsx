import { useState } from 'react';
import { 
  X, ChevronRight, Home as HomeIcon, Laptop, Shirt, 
  Dumbbell, Car, Factory, Store, LayoutDashboard, 
  UserPlus, Gift, TrendingUp, Zap 
} from 'lucide-react';

export default function MobileDrawer({ isOpen, onClose }) {
  const [expandedCat, setExpandedCat] = useState(null);
  const toggleCat = (catName) => {
    setExpandedCat(expandedCat === catName ? null : catName);
  };

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>
     
      <div className="fixed top-0 left-0 h-full w-80 bg-white z-[70] shadow-2xl overflow-y-auto flex flex-col animate-in slide-in-from-left duration-300">
     
        <div className="p-5 flex justify-between items-center border-b border-gray-100 bg-gray-50">
          <div className="flex items-center gap-2">
            <div className="bg-yellow-400 p-1.5 rounded-md">
              <Store size={20} className="text-slate-900" />
            </div>
            <span className="font-black text-lg tracking-tight">MENU</span>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
            <X size={24} className="text-gray-500" />
          </button>
        </div>
        
        <ul className="py-2 text-sm font-bold text-gray-700">
          
          <li className="px-5 py-4 hover:bg-gray-50 border-b border-gray-50 flex items-center gap-3 cursor-pointer transition-colors group">
            <Store size={18} className="text-yellow-500 group-hover:scale-110 transition-transform" /> 
            <span>Become a Vendor</span>
          </li>
          <li className="px-5 py-4 hover:bg-gray-50 border-b border-gray-50 flex items-center gap-3 cursor-pointer transition-colors group">
            <LayoutDashboard size={18} className="text-blue-500 group-hover:scale-110 transition-transform" /> 
            <span>Store Manager</span>
          </li>
          <li className="px-5 py-4 hover:bg-gray-50 border-b border-gray-50 flex items-center gap-3 cursor-pointer transition-colors group">
            <UserPlus size={18} className="text-green-500 group-hover:scale-110 transition-transform" /> 
            <span>Earn Commission with TanaGebeya Affiliate</span>
          </li>

          <div className="bg-gray-50 px-5 py-2 text-[10px] text-gray-400 uppercase tracking-widest font-black">Quick Links</div>
          <li className="px-5 py-4 hover:bg-gray-50 border-b border-gray-50 flex items-center gap-3 cursor-pointer">
            <Gift size={18} className="text-purple-500" /> Feature
          </li>
          <li className="px-5 py-4 hover:bg-gray-50 border-b border-gray-50 flex items-center gap-3 cursor-pointer">
            <TrendingUp size={18} className="text-orange-500" /> Trending
          </li>
          <li className="px-5 py-4 hover:bg-gray-50 border-b border-gray-50 flex items-center gap-3 cursor-pointer text-red-600">
            <Zap size={18} /> Super Deal
          </li>

          <div className="bg-gray-50 px-5 py-2 text-[10px] text-gray-400 uppercase tracking-widest font-black">Departments</div>

          <li className="border-b border-gray-50">
            <div 
              onClick={() => toggleCat('homeOffice')}
              className="px-5 py-4 flex justify-between items-center hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <span className="flex items-center gap-3"><HomeIcon size={18} /> Home and Office</span>
              <ChevronRight 
                size={16} 
                className={`transition-transform ${expandedCat === 'homeOffice' ? 'rotate-90' : ''}`} 
              />
            </div>
            <ul className={`bg-gray-50 px-12 overflow-hidden transition-all duration-300 ease-in-out ${expandedCat === 'homeOffice' ? 'max-h-40 py-2 border-b border-gray-100' : 'max-h-0'}`}>
              <li className="py-2 hover:text-yellow-600 cursor-pointer text-xs font-medium">• Home Appliances</li>
              <li className="py-2 hover:text-yellow-600 cursor-pointer text-xs font-medium">• Kitchen Appliance and Accessories</li>
            </ul>
          </li>

          <li className="border-b border-gray-50">
            <div 
              onClick={() => toggleCat('electronics')}
              className="px-5 py-4 flex justify-between items-center hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <span className="flex items-center gap-3"><Laptop size={18} /> Consumer Electronics</span>
              <ChevronRight 
                size={16} 
                className={`transition-transform  ${expandedCat === 'electronics' ? 'rotate-90' : ''}`} 
              />
            </div>
            <ul className={`bg-gray-50 px-12 overflow-hidden transition-all duration-300 ease-in-out ${expandedCat === 'electronics' ? 'max-h-40 py-2 border-b border-gray-100' : 'max-h-0'}`}>
              <li className="py-2 hover:text-yellow-600 cursor-pointer text-xs font-medium">• Accessory</li>
              <li className="py-2 hover:text-yellow-600 cursor-pointer text-xs font-medium">• Computer and Tablet</li>
              <li className="py-2 hover:text-yellow-600 cursor-pointer text-xs font-medium">• Video Games and Consoles</li>
            </ul>
          </li>

          <li className="px-5 py-4 hover:bg-gray-50 border-b border-gray-50 flex items-center gap-3 cursor-pointer">
            <Shirt size={18} /> Fashion
          </li>
          <li className="px-5 py-4 hover:bg-gray-50 border-b border-gray-50 flex items-center gap-3 cursor-pointer">
            <Dumbbell size={18} /> Gym Accessories
          </li>
          <li className="px-5 py-4 hover:bg-gray-50 border-b border-gray-50 flex items-center gap-3 cursor-pointer">
            <Car size={18} /> Cars and Vehicles
          </li>
          <li className="px-5 py-4 hover:bg-gray-50 flex items-center gap-3 cursor-pointer">
            <Factory size={18} /> Business and Industry
          </li>
        </ul>

        <div className="mt-auto p-5 bg-gray-50 text-[10px] text-gray-400 text-center">
          © 2026 TANAGEBEYA - Bahir Dar, Ethiopia
        </div>
      </div>
    </>
  );
}