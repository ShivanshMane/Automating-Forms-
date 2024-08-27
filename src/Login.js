import React, { useState } from 'react';
import axios from './axiosConfig'; 
import './Login.css'; 

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/auth/jwt/create/', {
                username,
                password,
            });
            localStorage.setItem('token', response.data.access);
            console.log('Login successful:', response.data);
        } catch (err) {
            setError('Invalid username or password');
            console.error('Error logging in:', err);
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <label htmlFor="login-username">Username:</label>
                <input 
                    id="login-username" 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                />
                
                <label htmlFor="login-password">Password:</label>
                <input 
                    id="login-password" 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                
                <button type="submit" className="login-submit">Login</button>
            </form>
            {error && <p className="login-error">{error}</p>}
        </div>
    );
};

export default Login;
