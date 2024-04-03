import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = () => {
  return(
    <Navigate to="/home" />
  );
};

export default PrivateRoute;
