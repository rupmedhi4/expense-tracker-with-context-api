// LoginForm.js

import React, { useContext } from 'react';
import styles from './Login.module.css';
import { appContext } from '../../AppContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();
    const {loginEmail, setLoginEmail, loginPassword, setLoginPassword, loginHandler,forgotPasswordHandler}= useContext(appContext)

    const forgotPasswordFormHandler = ()=>{
      navigate("/forgotpassword")
    }

  return (
    <div className={styles.container}>
      <form className={styles.loginForm} onSubmit={loginHandler}>
        <h1>Login</h1>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input type="email" 
                 id="email" 
                 name="email" 
                 value={loginEmail}
                 placeholder="Enter your email" 
                 onChange={(e)=>{setLoginEmail(e.target.value)}}/>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input type="password" 
                 id="password" 
                 name="password" 
                 value={loginPassword}
                 placeholder="Enter your password" 
                 onChange={(e)=>{setLoginPassword(e.target.value)}}/>
        </div>

        <div className={styles.forgotPassword} >
             <button type="submit" onClick={loginHandler}>Log In</button>
             <button type="button" 
                  style={{backgroundColor:"white", 
                  color:"blue", 
                  textDecoration:"underline"}} onClick={forgotPasswordFormHandler}>Forgot Password</button>

        </div>
       <div className={styles.signup}>
        <p>Don't have an account?</p>
        <button type="button">Sign Up</button>
      </div>

      </form>
      
    </div>
  );
}

export default Login;
