import React from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children, restricted, isLoggedIn }) => {
  return isLoggedIn && restricted ? <Navigate to='/notes' /> : children;
};

export default PublicRoute;
