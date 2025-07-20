import logo from './logo.svg';
import './App.css';
import "/node_modules/bootstrap/dist/css/bootstrap.min.css"
import '/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./auth/components/LoginPage";
import RegisterPage from "./auth/components/RegisterPage";
import PrivateRoute from "./auth/components/PrivateRoute";
import HomePage from "./auth/components/HomePage";
import {AuthProvider} from "./auth/context/AuthContext";

function App() {
  return (
    
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          
          <Route path="/" element={
            <PrivateRoute>
              <HomePage/>
            </PrivateRoute>
          }/>
          
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
    
    

  );
}

export default App;
