import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/v1/auth"; 

const AuthService = {
    async login(loginRequest){
        try{
            const response = await axios.post(`${API_BASE_URL}/login`, loginRequest);
            return response.data;
        }catch(error){
            console.log("Login error: ", error);
            throw error?.response?.data?.message || "Login failed";

        }
    },

    async register(registerRequest){
        try{
            const response = await axios.post(`${API_BASE_URL}/register`, registerRequest);
            return response.data;
        }catch(error){
            console.log("Login error: ", error);
            throw error?.response?.data?.message || "Login failed";

        }
    }
}

export default AuthService;