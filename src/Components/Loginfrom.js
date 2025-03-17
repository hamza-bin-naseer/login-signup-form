import React, { useState } from 'react'
import './Loginform.css'

export const Loginfrom = () => {
  const [isLogin, setLogin] = useState(true);
  return (
    <div className='container'>
      <div className='form-container'>
        <div className='form-toggle'>
          <button className={isLogin ? 'active' : ""} onClick={() => setLogin(true)}>Login</button>
          <button className={!isLogin ? 'active' : ""} onClick={() => setLogin(false)}>Signup</button>
        </div>
        {isLogin ?<>
          <div className='form'>
            <h2>Login Form</h2>
            <input type='email' placeholder='Email'/>
            <input type='password' placeholder='Password'/>
            <a href='#'>Forgot Password?</a>
            <button>Login</button>
            <p>Not a member? <a href='#' onClick={()=> setLogin(false)}>Signup now</a></p>
          </div>
        
        </>:<>
        <div className='form'>
            <h2>Signup Form</h2>
            <input type='email' placeholder='Email'/>
            <input type='password' placeholder='Password'/>
            <input type='password' placeholder='Confirm Password'/>
            <button>Signup</button>
        </div>
        </>}
      </div>
    </div>
  )
}
