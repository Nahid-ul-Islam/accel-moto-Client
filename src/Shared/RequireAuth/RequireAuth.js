import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if (loading) {
        return <div className='my-10'>
            <div className="flex justify-center items-center">
                < div className="animate-spin rounded-full h-16 w-16 lg:h-32 lg:w-32 border-b-2 border-black"></div>
            </div>
            <h4 className='text-center text-xl fond-semibold text-black mt-5'>Loading...</h4>
        </div>
    }
    if (!user) {
        return <Navigate to="/signin" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireAuth;