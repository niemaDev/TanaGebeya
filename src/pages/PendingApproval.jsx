import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, ShieldCheck, Mail, LogOut } from 'lucide-react';

export default function PendingApproval() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden">
        
        {/* Top Accent Bar */}
        <div className="h-2 bg-yellow-500 w-full" />

        <div className="p-8 md:p-12 text-center">
          {/* Animated Icon Container */}
          <div className="relative w-24 h-24 mx-auto mb-8">
            <div className="absolute inset-0 bg-yellow-100 rounded-3xl rotate-12 animate-pulse" />
            <div className="relative bg-white border-2 border-yellow-500 w-full h-full rounded-3xl flex items-center justify-center text-yellow-600 shadow-xl">
              <Clock size={40} strokeWidth={2.5} />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-slate-900 text-white p-2 rounded-xl shadow-lg">
              <ShieldCheck size={20} />
            </div>
          </div>

          <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-4">
            Account Under Review
          </h1>
          
          <p className="text-slate-500 font-medium leading-relaxed mb-8 px-4">
            Hello <span className="text-slate-900 font-bold">{user?.name || 'Vendor'}</span>, 
            thank you for joining TanaGebeya! Our administrative team is currently verifying 
            your store details. This process typically takes <span className="text-slate-900 font-bold">24-48 hours</span>.
          </p>

          {/* Status Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 text-left">
            <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
              <div className="text-[10px] font-black text-yellow-600 uppercase mb-1">Step 01</div>
              <p className="text-xs font-bold text-slate-800 uppercase">Registration Received</p>
            </div>
            <div className="bg-yellow-50/50 p-4 rounded-2xl border border-yellow-100">
              <div className="text-[10px] font-black text-yellow-600 uppercase mb-1">Step 02</div>
              <p className="text-xs font-bold text-slate-800 uppercase animate-pulse">Admin Verification</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 opacity-50">
              <div className="text-[10px] font-black text-slate-400 uppercase mb-1">Step 03</div>
              <p className="text-xs font-bold text-slate-800 uppercase">Store Activation</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = 'mailto:support@tanagebeya.com'}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-sm hover:bg-slate-800 transition-all shadow-lg"
            >
              <Mail size={18} /> Contact Support
            </button>
            
            <button 
              onClick={handleLogout}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-gray-100 text-gray-500 rounded-2xl font-bold text-sm hover:border-red-100 hover:text-red-500 transition-all"
            >
              <LogOut size={18} /> Logout
            </button>
          </div>
        </div>

        <div className="bg-slate-50 py-4 border-t border-gray-100 text-center">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
            TanaGebeya Management • Bahir Dar, Ethiopia
          </p>
        </div>
      </div>
    </div>
  );
}