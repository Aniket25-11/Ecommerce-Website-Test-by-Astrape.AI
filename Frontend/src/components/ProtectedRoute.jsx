import { Navigate, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import LoadingSpinner from './LoadingSpinner';

export default function ProtectedRoute({ children }) {
  const { state } = useApp();
  const location = useLocation();
  
  // In a real app, we might be checking authentication status
  // For now, we'll just check if we have a user in state
  if (state.user === null) {
    // Redirect to login page with return url
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  return children;
}