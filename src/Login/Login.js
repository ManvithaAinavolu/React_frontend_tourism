import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Login/Login.css';
import { Link } from 'react-router-dom';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [loggedIn, setLoggedIn] = useState(false);

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:4000/login', formData);
            console.log('Insert Response:', response.data);

            if (response.data.message === 'Login successful') {
                setMessage('Login successful');
                setLoggedIn(true);
            } else {
                setMessage('Invalid credentials');
            }
        } catch (error) {
            console.error('Insert Error:', error);
            setMessage('Invalid Credentials');
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setMessage('');
        }, 5000);

        return () => clearTimeout(timer);
    }, [message]);

    return (
        <>
            {loggedIn ? (
                <div>
                    <Link to="/home">Home</Link>
                </div>
            ) : (
                <div className="body">
                    <div className="wrapper1">
                        <form action="#" onSubmit={handleSubmit}>
                            <h2>Login</h2>
                            <div className="input-field">
                                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                                <label>Enter email</label>
                            </div>
                            <div className="input-field">
                                <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                                <label>Enter your password</label>
                            </div>
                            {message && <p className={message.includes('successful') ? 'success' : 'error'}>{message}</p>}
                            <div className="forget">
                                <label htmlFor="remember">
                                    <input type="checkbox" id="remember" />
                                    <p>Remember me</p>
                                </label>
                            </div>
                            <button type="submit">Log In</button>
                            <div className="register">
                                <p>Don't have an account? <a href="/reg">Register</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default Login;
