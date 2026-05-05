import React from 'react';
import Sidebar from '../components/common/Sidebar'; 
import { Outlet, Navigate } from 'react-router-dom';

const AdminLayout = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('token');

  if (!token || !user || (user.role !== 'admin' && user.role !== 'vendor')) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="flex h-screen w-full bg-[#F8FAFC] overflow-hidden">
      {/* SIDEBAR - Fixed width, no overlap */}
      <Sidebar role={user.role} />

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* HEADER */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 z-10 shadow-sm">
          <div>
            <h1 className="text-xl font-black text-slate-900 tracking-tight uppercase">
              {user.role === 'admin' ? 'Admin Portal' : 'Vendor Portal'}
            </h1>
            <p className="text-[10px] font-bold text-yellow-600 tracking-widest -mt-1">
              TANAGEBEYA BAHIR DAR
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-bold text-slate-900">{user.name || 'User'}</p>
              <p className="text-[10px] font-medium text-gray-400 uppercase">{user.role}</p>
            </div>
            <div className="h-10 w-10 rounded-xl bg-yellow-500 flex items-center justify-center text-slate-900 font-black shadow-md">
              {user.name?.substring(0, 2).toUpperCase() || 'ME'}
            </div>
          </div>
        </header>

        {/* PAGE SCROLL AREA */}
        <main className="flex-1 overflow-y-auto p-8 bg-gray-50 ">
          <div className="max-w-7xl mx-auto">
            {/* VENDOR APPROVAL STATUS */}
            {user.role === 'vendor' && !user.isApproved && (
              <div className="mb-8 bg-white border-l-4 border-yellow-500 p-6 rounded-2xl shadow-sm flex items-center gap-4 animate-in fade-in slide-in-from-top-4">
                <div className="h-12 w-12 bg-yellow-50 rounded-full flex items-center justify-center text-yellow-600">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Store Under Review</h3>
                  <p className="text-sm text-slate-500">Your products will be visible to customers once our team approves your vendor profile.</p>
                </div>
              </div>
            )}

            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;