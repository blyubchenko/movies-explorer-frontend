import React from 'react';
import { Navigate } from "react-router-dom";

function ProtectedRouteElement ({ element: Component, ...props  }) {
  return (
    localStorage.getItem('isLoggedIn') ? <Component {...props} /> : <Navigate to="/" replace/>
)}

export default ProtectedRouteElement; 