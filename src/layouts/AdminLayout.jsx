// src/layouts/AdminLayout.jsx
import { Outlet, Link, useNavigate } from 'react-router-dom';

const AdminLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user'); // Simple logout logic
    navigate('/login');
  };

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      <aside className="w-64 bg-slate-900 text-white flex flex-col shadow-xl">
        <div className="p-6 text-2xl font-bold border-b border-slate-800 tracking-tight">
          SMS Admin
        </div>
        
        <nav className="flex-grow p-4 space-y-2">
          <Link to="/admin" className="block px-4 py-2.5 rounded hover:bg-slate-800 transition-colors">
            📊 Dashboard
          </Link>
          <Link to="/admin/inventory" className="block px-4 py-2.5 rounded hover:bg-slate-800 transition-colors">
            📦 Inventory Management
          </Link>
          <Link to="/admin/users" className="block px-4 py-2.5 rounded hover:bg-slate-800 transition-colors">
            👥 User Management
          </Link>
          <Link to="/admin/reports" className="block px-4 py-2.5 rounded hover:bg-slate-800 transition-colors">
            📈 Sales Reports
          </Link>
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button 
            onClick={handleLogout}
            className="w-full text-left px-4 py-2 text-red-400 hover:bg-slate-800 rounded transition"
          >
            🚪 Logout
          </button>
        </div>
      </aside>

      <div className="flex-grow flex flex-col overflow-hidden">

        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800">Administrator Portal</h2>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500 italic">SMS 2026 v1.0</span>
            <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
              AD
            </div>
          </div>
        </header>

        <main className="flex-grow overflow-y-auto p-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;