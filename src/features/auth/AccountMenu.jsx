import { User, LogIn, LayoutDashboard, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AccountMenu() {
  return (
    <div className="absolute top-full right-0 w-64 bg-white shadow-2xl border border-gray-100 rounded-lg mt-2 py-4 z-[110] animate-in zoom-in-95 duration-150">
      <div className="px-6 py-3 space-y-4">
        
        {/* Register / Vendor Option */}
        <Link to="/register" className="flex items-center gap-3 group">
          <div className="bg-gray-100 p-2 rounded-full group-hover:bg-yellow-100 transition-colors">
            <UserPlus size={16} className="text-gray-500 group-hover:text-yellow-600" />
          </div>
          <div className="flex flex-col">
            <span className="text-[13px] font-bold text-gray-800">1. Register</span>
            <span className="text-[10px] text-gray-400 font-medium italic">Become a Vendor</span>
          </div>
        </Link>

        {/* Login / Manager Option */}
        <Link to="/login" className="flex items-center gap-3 group">
          <div className="bg-gray-100 p-2 rounded-full group-hover:bg-yellow-100 transition-colors">
            <LogIn size={16} className="text-gray-500 group-hover:text-yellow-600" />
          </div>
          <div className="flex flex-col">
            <span className="text-[13px] font-bold text-gray-800">2. Login</span>
            <span className="text-[10px] text-gray-400 font-medium italic">Store Manager</span>
          </div>
        </Link>

        <hr className="border-gray-50" />

        {/* Dashboard Link */}
        <Link to="/admin/dashboard" className="flex items-center gap-3 group">
          <div className="bg-gray-100 p-2 rounded-full group-hover:bg-yellow-100 transition-colors">
            <LayoutDashboard size={16} className="text-gray-500 group-hover:text-yellow-600" />
          </div>
          <div className="flex flex-col">
            <span className="text-[13px] font-bold text-gray-800">3. Dashboard</span>
            <span className="text-[10px] text-gray-400 font-medium italic">Store Manager</span>
          </div>
        </Link>

      </div>
    </div>
  );
}