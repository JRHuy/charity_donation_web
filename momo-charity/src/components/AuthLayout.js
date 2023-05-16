import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function hasJWT() {
    let flag = false;

    //check user has JWT token
    localStorage.getItem("token") ? flag = true : flag = false

    return flag
}

const AuthLayout = () => {
    let isAuthenticated = hasJWT();

    // return (
    //     <Route {...rest}
    //         render={props => (
    //             hasJWT() ?
    //                 <Component {...props} />
    //                 :
    //                 <Link to={{ pathname: '/login' }} />
    //         )}
    //     />
    // );
    return (
        isAuthenticated ? <Outlet /> : <Navigate to={"/login"}  />
    )
};

export default AuthLayout;