import React from 'react';

import '../../App.css';
import './login.css';


const Login = () => {
  const bg = require('../../img/bg_login.jpg');


  return (
  
      <div className="login-page">
        <img className="bg_login" src={bg} alt='bg' />


        <div className="login-form">

          <div className="logo-ligin-form">
            <img src="" alt="" />
          </div>

          <h4>Log into Your Account</h4>

          <form action="">

            <label>
              <p>Email</p>
              <input type="text" />
            </label>

            <label>
              <p>Password</p>
              <input type="email" />
            </label>
            <input type="checkbox" id='forgot' />
            <label className="keepme" htmlFor="forgot">

              <span >Keep me a logged in</span>
            </label>

            <input className="login-button" type="submit" value='Sign in' />

          </form>
        </div>
      </div>
 
  );
}

export default Login;
