import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  User, Mail, Lock, UserPlus, Eraser, AlertCircle, 
  ShieldCheck, Eye, EyeOff, Users, Store, PackageSearch, ChevronDown 
} from 'lucide-react';

export default function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    password: '', 
    confirm: '', 
    role: 'customer', 
    storeName: '',
    businessDescription: '' 
  });
  
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Real-time password matching
  useEffect(() => {
    if (formData.confirm && formData.password !== formData.confirm) {
      setErrors(prev => ({ ...prev, confirm: "Passwords do not match" }));
    } else {
      setErrors(prev => {
        const { confirm, ...rest } = prev;
        return rest;
      });
    }
  }, [formData.password, formData.confirm]);

  const handleClear = () => {
    setFormData({ name: '', email: '', password: '', confirm: '', role: 'customer', storeName: '', businessDescription: '' });
    setErrors({});
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (formData.password.length < 6) newErrors.password = "Min 6 characters required";
    
    if (formData.role === 'vendor') {
      if (!formData.storeName.trim()) newErrors.storeName = "Store name is required";
      if (!formData.businessDescription.trim()) newErrors.businessDescription = "Description required for admin review";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const userData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: formData.role,
        vendorProfile: {
          storeName: formData.role === 'vendor' ? formData.storeName : "",
          businessDescription: formData.role === 'vendor' ? formData.businessDescription : ""
        }
      };

      const response = await axios.post('http://localhost:5000/api/signup', userData);
      if (response.status === 201) {
        alert(formData.role === 'vendor' ? "Application Sent! Admin will review your store." : "Welcome to TanaGebeya!");
        navigate('/login');
      }
    } catch (error) {
      alert(error.response?.data?.error || "Signup failed.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F8FAFC] py-10 px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
        
        {/* Header Section */}
        <div className="bg-yellow-500 py-8 text-center">
          <h1 className="text-3xl font-black text-slate-900 tracking-tighter uppercase">TanaGebeya</h1>
          <p className="text-slate-800 text-xs font-bold mt-1 tracking-widest opacity-80">CREATE YOUR ACCOUNT</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-5">
          
          {/* Full Name */}
          <div className="space-y-1">
            <div className={`flex items-center border-2 rounded-2xl transition-all duration-300 ${errors.name ? 'border-red-400 bg-red-50' : 'border-gray-100 bg-gray-50 focus-within:border-yellow-500 focus-within:bg-white focus-within:shadow-sm'}`}>
              <User className="ml-4 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Full Name" 
                className="w-full pl-3 pr-4 py-3.5 bg-transparent outline-none text-sm font-medium" 
                value={formData.name} 
                onChange={(e) => setFormData({...formData, name: e.target.value})} 
              />
            </div>
          </div>

          {/* Email Address */}
          <div className="space-y-1">
            <div className={`flex items-center border-2 rounded-2xl transition-all duration-300 ${errors.email ? 'border-red-400 bg-red-50' : 'border-gray-100 bg-gray-50 focus-within:border-yellow-500 focus-within:bg-white focus-within:shadow-sm'}`}>
              <Mail className="ml-4 text-gray-400" size={18} />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full pl-3 pr-4 py-3.5 bg-transparent outline-none text-sm font-medium" 
                value={formData.email} 
                onChange={(e) => setFormData({...formData, email: e.target.value})} 
              />
            </div>
          </div>

          {/* Account Type Dropdown with Icon */}
          <div className="space-y-1">
            <div className="relative flex items-center border-2 border-gray-100 bg-gray-50 rounded-2xl focus-within:border-yellow-500 focus-within:bg-white transition-all duration-300">
              <Users className="ml-4 text-gray-400" size={18} />
              <select 
                className="w-full pl-3 pr-10 py-3.5 bg-transparent outline-none text-sm font-semibold text-gray-700 cursor-pointer appearance-none"
                value={formData.role}
                onChange={(e) => setFormData({...formData, role: e.target.value})}
              >
                <option value="customer">Customer (Buyer)</option>
                <option value="vendor">Seller (Vendor)</option>
              </select>
              <ChevronDown className="absolute right-4 text-gray-400 pointer-events-none" size={18} />
            </div>
          </div>

          {/* Animated Seller Fields */}
          {formData.role === 'vendor' && (
            <div className="space-y-4 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-500">
              <div className="bg-yellow-50 p-4 rounded-2xl border border-yellow-100 space-y-4">
                <div className="flex items-center border-2 border-white bg-white rounded-xl">
                  <Store className="ml-3 text-yellow-600" size={16} />
                  <input 
                    type="text" 
                    placeholder="Store Name" 
                    className="w-full pl-3 pr-4 py-2.5 bg-transparent outline-none text-sm font-medium" 
                    value={formData.storeName} 
                    onChange={(e) => setFormData({...formData, storeName: e.target.value})} 
                  />
                </div>
                <div className="flex items-start border-2 border-white bg-white rounded-xl">
                  <PackageSearch className="ml-3 mt-3 text-yellow-600" size={16} />
                  <textarea 
                    placeholder="What will you sell? (No alcohol/drugs)" 
                    className="w-full pl-3 pr-4 py-2.5 bg-transparent outline-none text-sm font-medium h-20 resize-none" 
                    value={formData.businessDescription} 
                    onChange={(e) => setFormData({...formData, businessDescription: e.target.value})} 
                  />
                </div>
              </div>
            </div>
          )}

          {/* Password Fields */}
          <div className="grid grid-cols-1 gap-4">
            <div className="relative flex items-center border-2 border-gray-100 bg-gray-50 rounded-2xl focus-within:border-yellow-500 focus-within:bg-white transition-all duration-300">
              <Lock className="ml-4 text-gray-400" size={18} />
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Password" 
                className="w-full pl-3 pr-10 py-3.5 bg-transparent outline-none text-sm font-medium" 
                value={formData.password} 
                onChange={(e) => setFormData({...formData, password: e.target.value})} 
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 text-gray-400">
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            
            <div className={`relative flex items-center border-2 rounded-2xl transition-all duration-300 ${errors.confirm ? 'border-red-400 bg-red-50' : 'border-gray-100 bg-gray-50 focus-within:border-yellow-500 focus-within:bg-white'}`}>
              <ShieldCheck className="ml-4 text-gray-400" size={18} />
              <input 
                type={showConfirm ? "text" : "password"} 
                placeholder="Confirm Password" 
                className="w-full pl-3 pr-10 py-3.5 bg-transparent outline-none text-sm font-medium" 
                value={formData.confirm} 
                onChange={(e) => setFormData({...formData, confirm: e.target.value})} 
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <button 
              type="button" 
              onClick={handleClear} 
              className="flex-1 py-3.5 rounded-2xl text-sm font-bold text-gray-500 bg-gray-50 hover:bg-gray-100 transition-all active:scale-95"
            >
              RESET
            </button>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="flex-[2] py-3.5 rounded-2xl text-sm font-black text-slate-900 bg-yellow-500 hover:bg-yellow-400 shadow-lg shadow-yellow-200 transition-all active:scale-95 disabled:bg-gray-200 uppercase tracking-tight"
            >
              {isSubmitting ? 'JOINING...' : 'REGISTER NOW'}
            </button>
          </div>
        </form>

        <div className="p-6 bg-gray-50 text-center border-t border-gray-100">
          <p className="text-xs font-bold text-gray-500">
            ALREADY HAVE AN ACCOUNT? <Link to="/login" className="text-yellow-600 hover:underline">LOG IN HERE</Link>
          </p>
        </div>
      </div>
    </div>
  );
}