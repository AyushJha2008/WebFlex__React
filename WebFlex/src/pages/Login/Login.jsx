import React from 'react'
import './Login.css'
import logo from '../../assets/banner.png'

const Login = () => {
  return (
    <div className='login'>
      <img src={logo} />
      <div className="logForm">
        <h2>Welcome to WebFlex</h2>
        <form>
          <input type="text" placeholder='Your Name'/>
          <input type="email" placeholder='Your Email' />
          <input type="password" placeholder='Password' />
          <button>Sign Up</button>
          <div className='formHelp'>
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help</p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login