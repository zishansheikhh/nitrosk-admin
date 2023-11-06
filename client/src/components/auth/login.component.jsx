import React, { useState } from 'react';
import './login.styles.css'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from submitting normally (reloading the page)
    
    // You can add your authentication logic here to verify the username and password
    if (username === 'your_username' && password === 'your_password') {
      alert('Login successful');
    } else {
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className='container-fluid m-auto'>
        <div className="center-div">
            <div className='login-container'>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        placeholder='Enter username'
                        onChange={handleUsernameChange}
                    />
                    </div>
                    <div>
                    <input
                        type="password"
                        id="password"
                        placeholder='Enter password'
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    </div>
                    <div>
                    <button type="submit" className='btn cta-btn-bg'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
};

export default Login;
