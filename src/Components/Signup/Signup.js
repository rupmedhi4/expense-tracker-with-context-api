// SignupForm.js

import React, { useContext } from 'react';
import styles from './Signup.module.css';
import { appContext } from '../../AppContext';

const SignupForm = () => {

    const {email, setEmail,password,setPassword, confirmPassword, setConfirmPassword,signupHandler} = useContext(appContext)

  return (
    <div className={styles.container}>
      <form className={styles.signupForm}>
        <h1>Sign Up</h1>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input type="email" 
                 id="email" 
                 name="email" 
                 value={email}
                 placeholder="Enter your email" 
                 onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input type="password" 
                 id="password" 
                 name="password" 
                 value={password}
                 placeholder="Enter your password" 
                 onChange={(e)=>{setPassword(e.target.value)}}/>

        </div>

        <div className={styles.formGroup}>
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input type="password" 
                 id="confirm-password" 
                 name="confirm-password" 
                 value={confirmPassword}
                 placeholder="Confirm your password" 
                 onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
        </div>

        <button type="submit" onClick={signupHandler}>Sign Up</button>
        <button className={styles.btn}>Have an account? Login</button>
      </form>

        
      
    </div>
  );
}

export default SignupForm;
