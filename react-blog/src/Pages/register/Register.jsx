import { useState } from 'react'
import { Navigate, NavLink } from 'react-router-dom'
import axios from 'axios'
import './register.css'

const initState ={
  username : "",
  email: "",
  password: ""
}

export const Register = () => {
  const [user, setUser ] = useState(initState);
  const [error, setError] = useState(false);
  const [navigate, setNavigate] = useState(false);
  
  const handleChange = (e) =>{
    const {name, value }  = e.target;
    setUser({...user, [name]: value});
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    setError(false)
      await axios.post('http://localhost:3050/auth/register',user)
      .then((res) =>{
        setUser(res.data.data)
        alert(res.data.message)
        setNavigate(true)
      })
      .catch((err) => setError(true) )
  }
    if(navigate){
     return <Navigate to="/login" />
    }

  return (
    <div className='register'>
        <span className="registerTitle">Register</span>
        <form className="registerForm" onSubmit={handleSubmit}>
          <label>Username</label>
          <input type="text" className='registerInput' name="username" value={user.username} placeholder="Enter username..." onChange={handleChange} required/>
          <label>Email</label>
          <input type="email" className='registerInput' name="email" value={user.email} placeholder="Enter your email..." onChange={handleChange} required/>
          <label>Password</label>
          <input type="password" className='registerInput'  name="password" value={user.password} placeholder="Enter your password..." onChange={handleChange} required/>
          <button className="registerButton">Register</button>
        </form>
        <button className="registerLoginButton" type='submit'>
          <NavLink className="link" to="/login">LOGIN</NavLink>
        </button>
        <br/>
        {error && <span style={{color: 'red'}}>User has been already registered</span>}

    </div>
  )
}

 
