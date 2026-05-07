import { Navigate, useLocation } from 'react-router-dom';

export default function ProtectedRoute({ children, allowedRole }) {
  const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('token');
  const location = useLocation();

  // 1. Check if the user is logged in
  if (!token || !user) {
    // We save the current location so we can redirect them back after they login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // 2. Role-Based Access Control (RBAC)
  // Logic: If a role is required, check if user matches. 
  // Optimization: Allow 'admin' to access 'vendor' routes if you want total control.
  const hasAccess = Array.isArray(allowedRole) 
    ? allowedRole.includes(user.role) 
    : user.role === allowedRole || user.role === 'admin';

  if (allowedRole && !hasAccess) {
    return <Navigate to="/" replace />;
  }

  // 3. Approval Check (Preventing Infinite Redirects)
  // If the user is a vendor but not approved, and they aren't ALREADY on the pending page
  if (
    user.role === 'vendor' && 
    !user.isApproved && 
    location.pathname !== '/pending-approval'
  ) {
    return <Navigate to="/pending-approval" replace />;
  }

  return children;
}