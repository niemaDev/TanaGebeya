import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Lock, UserPlus, Eraser, AlertCircle, ShieldCheck, Eye, EyeOff } from 'lucide-react';

export default function SignUp() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirm: '' });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // Real-time mismatch warning
  useEffect(() => {
    if (formData.confirm && formData.password !== formData.confirm) {
      setErrors(prev => ({ ...prev, confirm: "Passwords do not match yet" }));
    } else {
      setErrors(prev => {
        const { confirm, ...rest } = prev;
        return rest;
      });
    }
  }, [formData.password, formData.confirm]);

  const handleClear = () => {
    setFormData({ name: '', email: '', password: '', confirm: '' });
    setErrors({});
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Full name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (formData.password.length < 6) newErrors.password = "Min 6 characters required";
    if (formData.password !== formData.confirm) newErrors.confirm = "Passwords must match";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // --- CONNECTED TO BACKEND ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validate()) {
      try {
        // We only send name, email, and password (we don't need 'confirm' in the database)
        const userData = {
          name: formData.name,
          email: formData.email,
          password: formData.password
        };

        const response = await axios.post('http://localhost:5000/api/signup', userData);
        
        if (response.status === 201) {
          alert("Registration Successful! Check MongoDB Compass.");
          handleClear(); // Clear form after success
        }
      } catch (error) {
        console.error("Error during signup:", error);
        alert(error.response?.data?.error || "Signup failed. Is your backend server running?");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[90vh] bg-[#f4f4f4] py-12 px-4">
      <div className="w-full max-w-md bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-slate-800 uppercase tracking-tighter">Create Account</h2>
          <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mt-1">Join the TanaGebeya Community</p>
        </div>

        <form onSubmit={handleSubmit}className="space-y-4">
          {/* Name Field */}
          <div className="space-y-1">
            <div className={`relative flex items-center border-2 rounded-xl transition-all ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-100 bg-gray-50 focus-within:border-yellow-500 focus-within:bg-white'}`}>
              <User className={`ml-4 ${errors.name ? 'text-red-500' : 'text-gray-400'}`} size={18} />
              <input 
                type="text" 
                placeholder="Full Name" 
                className="w-full pl-3 pr-4 py-3 bg-transparent outline-none text-sm"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            {errors.name && <p className="text-red-500 text-[10px] font-bold ml-1 pt-1">{errors.name}</p>}
          </div>

          {/* Email Field */}
          <div className="space-y-1">
            <div className={`relative flex items-center border-2 rounded-xl transition-all ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-100 bg-gray-50 focus-within:border-yellow-500 focus-within:bg-white'}`}>
              <Mail className={`ml-4 ${errors.email ? 'text-red-500' : 'text-gray-400'}`} size={18} />
              <input type="email" placeholder="Email" className="w-full pl-3 pr-4 py-3 bg-transparent outline-none text-sm" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}/>
            </div>
            {errors.email && <p className="text-red-500 text-[10px] font-bold ml-1 pt-1">{errors.email}</p>}
          </div>

          {/* Password Field with Eye Icon */}
          <div className="space-y-1">
            <div className={`relative flex items-center border-2 rounded-xl transition-all ${errors.password ? 'border-red-500 bg-red-50' : 'border-gray-100 bg-gray-50 focus-within:border-yellow-500 focus-within:bg-white'}`}>
              <Lock className={`ml-4 ${errors.password ? 'text-red-500' : 'text-gray-400'}`} size={18} />
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Password" 
                className="w-full pl-3 pr-12 py-3 bg-transparent outline-none text-sm" 
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
            {errors.password && <p className="text-red-500 text-[10px] font-bold ml-1 pt-1">{errors.password}</p>}
          </div>

          {/* Confirm Password Field with Eye & Mismatch Warning */}
          <div className="space-y-1">
            <div className={`relative flex items-center border-2 rounded-xl transition-all ${errors.confirm ? 'border-red-500 bg-red-50' : 'border-gray-100 bg-gray-50 focus-within:border-yellow-500 focus-within:bg-white'}`}>
              <ShieldCheck className={`ml-4 ${errors.confirm ? 'text-red-500' : 'text-gray-400'}`} size={18} />
              <input 
                type={showConfirm ? "text" : "password"} 
                placeholder="Confirm Password" 
                className="w-full pl-3 pr-12 py-3 bg-transparent outline-none text-sm" 
                value={formData.confirm} 
                onChange={(e) => setFormData({...formData, confirm: e.target.value})}
              />
              <button 
                type="button" 
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-4 text-gray-400 hover:text-yellow-600"
              >
                {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.confirm && (
              <p className="text-red-500 text-[10px] font-bold flex items-center gap-1 ml-1 pt-1">
                <AlertCircle size={12} /> {errors.confirm}
              </p>
            )}
          </div>

          <div className="flex gap-3 pt-4">
            <button type="button" onClick={handleClear} className="flex-1 bg-gray-100 text-gray-600 py-3.5 rounded-xl font-bold uppercase text-xs flex items-center justify-center gap-2 hover:bg-gray-200">
              <Eraser size={16} /> Clear
            </button>
            <button type="submit" className="flex-[2] bg-yellow-500 text-slate-900 py-3.5 rounded-xl font-bold uppercase text-xs flex items-center justify-center gap-2 hover:bg-yellow-400 shadow-lg active:scale-95">
              <UserPlus size={16} /> Register
            </button>
          </div>
        </form>

        <p className="mt-8 text-center text-sm font-medium text-gray-500 border-t border-gray-100 pt-6">
          Already a member? <Link to="/login" className="text-yellow-600 font-black hover:underline">Login </Link>
        </p>
      </div>
    </div>
  );
}