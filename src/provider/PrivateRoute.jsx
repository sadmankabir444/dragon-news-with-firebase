import React, { use, useEffect } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../pages/Loading';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);
    // console.log(user);
    const location = useLocation();
    // console.log(location)
    // console.log(loading, "from private route");
    useEffect(() => {
        if (location){
            localStorage.setItem("lastPath", location.pathname);
        }
    }, [location])
    if (loading) {
        return <Loading></Loading>;
    }



    // console.log(user, "from private route after loading");
    if (user && user?.email) {
        return children;
    }
    return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
    //if -> user thake return children
    //navigate to login page
};

export default PrivateRoute;