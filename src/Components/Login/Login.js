// LoginForm.js

import React, { useContext } from 'react';
import styles from './Login.module.css';
import { appContext } from '../../AppContext';

const Login = () => {

    const {loginEmail, setLoginEmail, loginPassword, setLoginPassword, loginHandler}= useContext(appContext)

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
          <button type="button" style={{backgroundColor:"white", color:"blue", textDecoration:"underline"}}>Forgot Password</button>

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
