import React, { useState } from 'react';
import './starter.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const[email, setEmail]=useState('')
  const[password, setPassword]=useState('')
  const navigate= useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/login',{email, password})
    .then(result => {
      console.log(result)
      if(result.data==="sucess"){
        navigate('/');
      }
    })
    .catch(err=> console.log(err))
  }

  return (
    <div className="signup-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            autoComplete="off"
            name="email"
            onChange={(e)=>setEmail(e.target.value)}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            autoComplete="off"
            name="password"
            onChange={(e)=>setPassword(e.target.value)}
            className="form-input"
          />
        </div>

        <button type="submit" className="form-button">
          Login
        </button>
      </form>
        <p>Don't have an account?</p>
        <Link to="/signup" className="form-button">Register</Link>
    </div>
  )
}

export default LoginForm