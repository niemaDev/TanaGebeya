import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// Layouts
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';
// Pages (Features)
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Login from './features/auth/Login';
import Register from './features/auth/Register';
import AdminDashboard from './pages/admin/Dashboard';
import Inventory from './pages/admin/Inventory';

const ProtectedRoute = ({ children, isAdmin = false }) => {
  const user = JSON.parse(localStorage.getItem('user')); // Placeholder for JWT logic
  
  if (!user) return <Navigate to="/login" />;
  if (isAdmin && user.role !== 'admin') return <Navigate to="/" />;
  
  return children;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Customer & Guest Routes (FR-1 to FR-8) */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route 
          path="/admin" 
          element={
            <ProtectedRoute isAdmin={true}>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="inventory" element={<Inventory />} />
        </Route>
        <Route path="*" element={<div className="flex justify-center py-20 text-2xl">404 - Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;