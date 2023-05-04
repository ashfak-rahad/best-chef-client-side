import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';

const PrivateRoutes = ({children}) => {
    const {user,loading} =useContext(AuthContext);
    console.log(user);
    const location = useLocation();
    console.log(location);

    if(loading){
       return <LoadingSpinner/>

    }
    if(user){
        return children;
    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default PrivateRoutes;