// src/components/Auth/PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const isAuthenticated = () => {
    const token = localStorage.getItem('token');

    if (!token) {
        console.log('No token found, redirecting to login');
        return false;
    }

    try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        if (decodedToken.exp > currentTime) {
            // console.log('Token is valid');
            return true;
        } else {
            // console.log('Token expired, clearing it from localStorage');
            localStorage.removeItem('token'); 
            return false;
        }
    } catch (err) {
        // console.error('Invalid token:', err);
        localStorage.removeItem('token'); 
        return false;
    }
};

const PrivateRoute = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/" />;
};

export default PrivateRoute;
