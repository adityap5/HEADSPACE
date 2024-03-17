import React from 'react'
import { loginEndpoint } from '../../../Spotify'
import './login.css'
function Login() {
  return (
    <div className="login-page">
      <img src="/logo.jpg" alt="logo" className='logo'/>
      <a href={loginEndpoint}>
        <div className="login-btn">LOG IN</div>
      </a>
    </div>
  )
}

export default Login
