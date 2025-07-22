import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import { useAuth } from "../context/AuthContext";
import AuthService from "../services/AuthService";

const LoginPage = () => {
    const [formData, setFormData] = useState({ email: "",  password: "" });
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const {login} = useAuth();

    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);
        try{
            const res = await AuthService.login(formData);
            login(res.token)
        }catch(err){
            setError(err);
        }
    };


    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow-lg" style={{ width: "100%", maxWidth: "400px" }}>
                <h3 className="text-center mb-4">Login</h3>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className="mb-3">
                    <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    required
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                    Login
                </button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage