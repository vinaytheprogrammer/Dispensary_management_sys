// src/contexts/AuthContext.jsx
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    const login = (userData) => {
        setIsAuthenticated(true);
        setUser(userData);
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

// Try below given logic instead of above logic when you want to connect backend

// src/contexts/AuthContext.jsx
// import React, { createContext, useContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);
//     const [user, setUser] = useState(null);
//     const navigate = useNavigate();

//     const login = (userData) => {
//         setIsAuthenticated(true);
//         setUser(userData);
//     };

//     const logout = () => {
//         setIsAuthenticated(false);
//         setUser(null);
//         navigate('/');
//     };

//     return (
//         <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };
