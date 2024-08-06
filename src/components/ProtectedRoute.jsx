// //src/components/ProtectedRoute.jsx
// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';

// const ProtectedRoute = ({ children }) => {
//     const { isAuthenticated } = useAuth();
//     return isAuthenticated ? children : <Navigate to="/login" />;
// };

// export default ProtectedRoute;


// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ children, allowedRoles }) => {
    const { isAuthenticated, user } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    if (allowedRoles && !allowedRoles.includes(user.userType)) {
        return <Navigate to="/" />; // Redirect to a default page if the role is not allowed
    }

    return children;
};

export default ProtectedRoute;


