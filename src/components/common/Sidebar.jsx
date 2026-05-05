import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, Package, ShoppingBag, 
  Users, Settings, LogOut, Home, ChevronLeft, ChevronRight 
} from 'lucide-react';

export default function Sidebar({ role }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const menuConfig = {
    admin: [
      { name: 'Dashboard', path: '/admin/dashboard', icon: <LayoutDashboard size={20} /> },
      { name: 'Inventory', path: '/admin/inventory', icon: <Package size={20} /> },
      { name: 'Sellers', path: '/admin/sellers', icon: <Users size={20} /> },
      { name: 'Settings', path: '/admin/settings', icon: <Settings size={20} /> },
    ],
    vendor: [
      { name: 'My Dashboard', path: '/vendor/dashboard', icon: <LayoutDashboard size={20} /> },
      { name: 'My Products', path: '/vendor/inventory', icon: <Package size={20} /> },
      { name: 'Orders', path: '/vendor/orders', icon: <ShoppingBag size={20} /> },
      { name: 'Store Settings', path: '/vendor/settings', icon: <Settings size={20} /> },
    ]
  };

  const links = menuConfig[role] || [];

  return (
    <aside 
      className={`h-screen bg-slate-900 text-white flex-shrink-0 border-r border-slate-800 transition-all duration-300 ease-in-out relative flex flex-col ${
        isCollapsed ? 'w-20' : 'w-72'
      }`}
    >
      {/* THE ARROW BUTTON - Now positioned to toggle the shrink/expand */}
      <button 
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-10 z-50 bg-yellow-500 text-slate-900 rounded-full p-1 shadow-xl hover:scale-110 transition-transform"
      >
        {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>

      <div className={`p-6 flex flex-col h-full ${isCollapsed ? 'items-center' : ''}`}>
        
        {/* Header Logo */}
        <div className={`mb-10 transition-all ${isCollapsed ? 'opacity-0 h-0' : 'opacity-100'}`}>
          <h2 className="text-2xl font-black text-yellow-500 uppercase tracking-tighter">TanaGebeya</h2>
          {!isCollapsed && (
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">
              {role === 'admin' ? 'Admin Portal' : 'Vendor Portal'}
            </p>
          )}
        </div>

        {/* Small Logo for Collapsed State */}
        {isCollapsed && (
          <div className="mb-10 w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center text-slate-900 font-black">
            TG
          </div>
        )}

        {/* Navigation */}
        <nav className="flex-1 space-y-2">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`flex items-center gap-4 p-3.5 rounded-2xl transition-all group relative ${
                  isActive 
                    ? 'bg-yellow-500 text-slate-900 shadow-lg' 
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <div className={`${isActive ? 'text-slate-900' : 'group-hover:text-yellow-500'}`}>
                  {link.icon}
                </div>
                
                {!isCollapsed && <span className="text-sm font-bold truncate">{link.name}</span>}
                
                {/* Tooltip for collapsed state */}
                {isCollapsed && (
                  <div className="absolute left-16 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50">
                    {link.name}
                  </div>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="pt-6 border-t border-slate-800">
          <button 
            onClick={handleLogout}
            className={`w-full flex items-center gap-4 p-4 rounded-2xl bg-red-500/5 text-red-500 hover:bg-red-500 hover:text-white transition-all font-black ${isCollapsed ? 'justify-center' : ''}`}
          >
            <LogOut size={20} />
            {!isCollapsed && <span className="text-xs uppercase tracking-widest">Logout</span>}
          </button>
        </div>
      </div>
    </aside>
  );
}