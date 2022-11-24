import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import toast from 'react-hot-toast';

const PrivateRoute = ({children}) => {
     const {user,loading} = useContext(AuthContext);
     const location = useLocation();
     if(loading){
        return  toast.loading('Waiting...');
     }
     if(user){
        return children;
     }
     return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;