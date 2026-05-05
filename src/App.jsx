import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';

// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Login from './features/auth/SignIn';
import SignUp from './features/auth/SignUp';
import Dashboard from './pages/admin/Dashboard';
import Inventory from './pages/admin/Inventory';
import Wishlist from './pages/Wishlist';

// Security
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        {/* 1. PUBLIC & CUSTOMER ROUTES */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="about" element={<About />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="wishlist" element={<Wishlist />} />
          
          <Route 
            path="cart" 
            element={
              <ProtectedRoute allowedRole="customer">
                <Cart />
              </ProtectedRoute>
            } 
          />
        </Route>

        {/* 2. SELLER/VENDOR ROUTES - Prefix is /vendor */}
        <Route 
          path="/vendor" 
          element={
            <ProtectedRoute allowedRole="vendor">
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          {/* This makes /vendor redirect to /vendor/dashboard automatically */}
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="orders" element={<div>Orders Page Coming Soon</div>} />
          <Route path="settings" element={<div>Settings Page Coming Soon</div>} />
        </Route>

        {/* 3. ADMIN ROUTES - Prefix is /admin */}
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute allowedRole="admin">
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="inventory" element={<Inventory />} />
        </Route>

        {/* 4. 404 PAGE */}
        <Route 
          path="*" 
          element={
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-slate-900">
              <h1 className="text-9xl font-black opacity-10">404</h1>
              <p className="text-xl font-bold -mt-8">Page Not Found</p>
              <button onClick={() => window.location.href = '/'} className="mt-6 px-6 py-2 bg-yellow-500 font-bold rounded-lg">
                Return Home
              </button>
            </div>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;