import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if(loading){
        return <div className='text-center mt-10'>loading...</div>
    }
    if(!user){
        return <Navigate to="/signin" state={{from:location}} replace></Navigate>
    }
    return children;
};

export default RequireAuth;