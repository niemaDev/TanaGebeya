import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Added useNavigate for redirection
import axios from 'axios'; // Import axios
import { Mail, Lock, LogIn, Eraser, AlertCircle } from 'lucide-react';

export default function SignIn() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState(""); // To track backend errors
  const navigate = useNavigate(); // Hook to redirect user after login

  const handleClear = () => {
    setFormData({ email: '', password: '' });
    setErrors({});
    setServerError("");
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.email) newErrors.email = "Please enter your email address";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email format is invalid";
    
    if (!formData.password) newErrors.password = "Please enter your password";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError(""); // Reset server errors on new attempt

    if (validate()) {
      try {
        // --- AXIOS LOGIN CALL ---
        const response = await axios.post('http://localhost:5000/api/login', {
          email: formData.email,
          password: formData.password
        });

        if (response.status === 200) {
          console.log("Login Successful:", response.data);
          alert("Welcome back, " + response.data.user.name + "!");
          
          // Redirect to Dashboard or Home after successful login
          // navigate('/dashboard'); 
        }
      } catch (error) {
        // Handle errors from your backend (e.g., 404 User not found, 401 Invalid password)
        const errorMessage = error.response?.data?.error || "Connection failed. Is the server running?";
        setServerError(errorMessage);
        console.error("Login error:", errorMessage);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[85vh] bg-[#f4f4f4] px-4">
      <div className="w-full max-w-md bg-white p-10 rounded-2xl shadow-xl border border-gray-100 transition-all">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-slate-800 uppercase tracking-tighter">Welcome Back</h2>
          <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-1">Sign in to TanaGebeya</p>
        </div>

        {/* Global Server Error Message */}
        {serverError && (
          <div className="mb-6 p-3 bg-red-50 border-l-4 border-red-500 flex items-center gap-2 text-red-700 text-xs font-bold rounded">
            <AlertCircle size={16} />
            {serverError}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Field */}
          <div className="space-y-1">
            <div className={`relative flex items-center border-2 rounded-xl transition-all ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-100 bg-gray-50 focus-within:border-yellow-500 focus-within:bg-white'}`}>
              <Mail className={`ml-4 ${errors.email ? 'text-red-500' : 'text-gray-400'}`} size={20} />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full pl-3 pr-4 py-3.5 bg-transparent outline-none text-sm font-medium"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            {errors.email && <p className="text-red-500 text-[11px] font-bold flex items-center gap-1 ml-1"><AlertCircle size={12}/> {errors.email}</p>}
          </div>

          {/* Password Field */}
          <div className="space-y-1">
            <div className={`relative flex items-center border-2 rounded-xl transition-all ${errors.password ? 'border-red-500 bg-red-50' : 'border-gray-100 bg-gray-50 focus-within:border-yellow-500 focus-within:bg-white'}`}>
              <Lock className={`ml-4 ${errors.password ? 'text-red-500' : 'text-gray-400'}`} size={20} />
              <input 
                type="password" 
                placeholder="Password" 
                className="w-full pl-3 pr-4 py-3.5 bg-transparent outline-none text-sm font-medium"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
            </div>
            {errors.password && <p className="text-red-500 text-[11px] font-bold flex items-center gap-1 ml-1"><AlertCircle size={12}/> {errors.password}</p>}
          </div>

          {/* Buttons Group */}
          <div className="flex gap-3 pt-2">
            <button 
              type="button"
              onClick={handleClear}
              className="flex-1 bg-gray-100 text-gray-600 py-3.5 rounded-xl font-bold uppercase text-xs flex items-center justify-center gap-2 hover:bg-gray-200 transition-all"
            >
              <Eraser size={16} /> Clear
            </button>
            <button 
              type="submit" 
              className="flex-[2] bg-[#34495e] text-white py-3.5 rounded-xl font-bold uppercase text-xs flex items-center justify-center gap-2 hover:bg-slate-700 transition-all shadow-lg active:scale-95"
            >
              <LogIn size={16} /> Submit
            </button>
          </div>
        </form>

        <div className="mt-8 pt-6 border-t border-gray-100 text-center text-sm font-medium text-gray-500">
          New here? <Link to="/signup" className="text-yellow-600 font-black hover:underline">Register | Become a Vendor</Link>
        </div>
      </div>
    </div>
  );
}