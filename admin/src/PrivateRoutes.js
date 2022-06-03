import React from 'react';
import { Navigate } from 'react-router-dom';
import { getUser } from './pages/auth/Session';



const PrivateRoute = ({ component: Component, ...rest }) => {
    return getUser() ? <Component /> : <Navigate to={{ pathname: '/auth' }} />;

}

export default PrivateRoute;