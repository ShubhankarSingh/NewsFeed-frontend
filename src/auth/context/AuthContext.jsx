import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [token, setToken] = useState(localStorage.getItem("token") || null)

    useEffect(() => {
        if(token) localStorage.setItem('token', token)
        else localStorage.removeItem(token)
    },[token])

    const login = (token) => {
        setToken(token);
        navigate("/")
    }

    const logout = () => {
        setToken(null);
        navigate("/login")
    }

    const isAuthenticated = !!token;

    return (
        <AuthContext.Provider value={{token, login, logout, isAuthenticated}}> 
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);
