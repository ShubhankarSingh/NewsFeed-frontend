import React, { useState } from 'react'
import AuthService from "../services/AuthService";

const RegisterPage = () => {

    const [formData, setFormData] = useState({ email: "",  password: "" });

    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try{
            const response = await AuthService.register(formData);
            alert("Registeration Successful!");
        }catch(err){
            alert(err);
        }
    };


    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow-lg" style={{ width: "100%", maxWidth: "400px" }}>
                <h3 className="text-center mb-4">Register</h3>
                <form onSubmit={handleRegister}>
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
                    Register
                </button>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage