// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Outlet } from 'react-router';
import { auth } from '../../services/firebase';

function ProtectedRoute(props) {
  const [user] = useAuthState(auth);
  console.log('user status in protected route', user);
  return user ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoute;
