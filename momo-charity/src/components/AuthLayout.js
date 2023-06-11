import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function hasJWT() {
    let flag = false;

    //check user has JWT token
    localStorage.getItem("token") ? flag = true : flag = false

    return flag
}

function isAllowedRole(allowedRole) {
    let authority = localStorage.getItem("authority");
    if (authority === allowedRole) {
        return true;
    } else {
        return false;
    }
}

const AuthLayout = ({ allowedRole }) => {
    let isAuthenticated = hasJWT();
    let role = isAllowedRole(allowedRole);

    return (
        (isAuthenticated && role) ? <Outlet /> : <Navigate to={"/login"} />
    )
};

export default AuthLayout;