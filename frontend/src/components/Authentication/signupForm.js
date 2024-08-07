import React, { useState } from 'react';
import './starter.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const[name, setName]=useState('')
  const[email, setEmail]=useState('')
  const[password, setPassword]=useState('')
  const navigate= useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/register',{name, email, password})
    .then(result => {console.log(result)
      navigate('/login');
    })
    .catch(err=> console.log(err))
  }

  return (
    <div className="signup-form">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter Name"
            autoComplete="off"
            name="name"
            onChange={(e)=>setName(e.target.value)}
            className="form-input"
          />
        </div>

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
          Register
        </button>
      </form>
        <p>Already have an account?</p>
        <Link to="/login" className="form-button">Login</Link>
    </div>
  );
};

export default SignupForm;
