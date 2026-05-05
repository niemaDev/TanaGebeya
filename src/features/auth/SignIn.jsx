import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, LogIn, Eye, EyeOff, AlertCircle, Eraser } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClear = () => {
    setFormData({ email: '', password: '' });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const response = await axios.post('http://localhost:5000/api/login', formData);
      
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));

        const role = response.data.user.role; // Expecting 'admin', 'vendor', or 'customer'

        // MATCHING THE ROUTES IN APP.JSX
        if (role === 'admin') {
          navigate('/admin/dashboard');
        } else if (role === 'vendor') {
          navigate('/vendor/dashboard');
        } else {
          navigate('/');
        }
      }
    } catch (err) {
      setError(err.response?.data?.error || "Invalid email or password");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F8FAFC] py-10 px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
        <div className="bg-yellow-500 py-10 text-center">
          <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">TanaGebeya</h1>
          <p className="text-slate-800 text-xs font-bold mt-1 tracking-widest opacity-80">SECURE ACCESS</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {error && (
            <div className="flex items-center gap-3 bg-red-50 border border-red-100 text-red-600 p-4 rounded-2xl">
              <AlertCircle size={18} />
              <p className="text-xs font-bold uppercase">{error}</p>
            </div>
          )}

          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase text-gray-400 ml-1">Email Address</label>
            <div className="flex items-center border-2 border-gray-100 bg-gray-50 rounded-2xl focus-within:border-yellow-500 focus-within:bg-white transition-all">
              <Mail className="ml-4 text-gray-400" size={18} />
              <input 
                type="email" 
                required 
                className="w-full pl-3 pr-4 py-4 bg-transparent outline-none text-sm font-medium" 
                value={formData.email} 
                onChange={(e) => setFormData({...formData, email: e.target.value})} 
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase text-gray-400 ml-1">Password</label>
            <div className="relative flex items-center border-2 border-gray-100 bg-gray-50 rounded-2xl focus-within:border-yellow-500 focus-within:bg-white transition-all">
              <Lock className="ml-4 text-gray-400" size={18} />
              <input 
                type={showPassword ? "text" : "password"} 
                required 
                className="w-full pl-3 pr-12 py-4 bg-transparent outline-none text-sm font-medium" 
                value={formData.password} 
                onChange={(e) => setFormData({...formData, password: e.target.value})} 
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)} 
                className="absolute right-4 text-gray-400 hover:text-yellow-600"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button type="button" onClick={handleClear} className="flex-1 py-4 rounded-2xl text-sm font-bold text-gray-500 bg-gray-50 hover:bg-gray-100 flex items-center justify-center gap-2">
              <Eraser size={18} /> CLEAR
            </button>
            <button type="submit" disabled={isSubmitting} className="flex-[2] py-4 rounded-2xl text-sm font-black text-slate-900 bg-yellow-500 hover:bg-yellow-400 shadow-lg flex items-center justify-center gap-2 uppercase tracking-wider">
              {isSubmitting ? <div className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" /> : <><LogIn size={18} /> LOGIN</>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}