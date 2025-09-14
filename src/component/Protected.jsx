
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

// get token from local storage
// user/me -fetchdata
// store it in global store

export const Protected = ({ children }) => {
  // const { isAuthenticated} = useSelector(state => state.auth);
  const { isAuthenticated} = true;

  const location = useLocation();
  
  // if (isLoading) {
  //   return (
  //     <div className="flex items-center justify-center min-h-screen">
  //       <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
  //     </div>
  //   );
  // }
  
  // if (!isAuthenticated) {
  //   return <Navigate to="/login" state={{ from: location }} replace />;
  // }
  
  return children;
};
