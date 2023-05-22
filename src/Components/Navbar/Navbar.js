import React, { useContext } from 'react'
import styles from './Navbar.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { appContext } from '../../AppContext';
import { toast } from 'react-toastify';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

export default function Navbar() {

  const {users} = useContext(appContext)
  const navigate = useNavigate();

  const logOutHandler = async()=>{
    try{
       await signOut(auth)
       toast.success("Signout successfully")
        navigate("/login")
    }catch(err){
       toast.error(err.message)
       
    } 
  }

  const SignupHandler = ()=>{
    navigate('/signup')
  }
  const loginHandler = ()=>{
    navigate('/login')
    console.log(users)
  }
  return (
    <div>
      <nav className={styles.navbar}>
        <Link to="/" className={styles.logo}>My Website</Link>
        <ul className={styles.navLinks}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="#">Products</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/welcome">Deshboard</Link></li>
          

        </ul>

        <ul>
          {users ?  <button onClick={logOutHandler}>Logout</button> :<>
              <button onClick={loginHandler}>Login</button>
              <button onClick={SignupHandler}>Signup</button>
          </> }
        </ul>
      </nav>
    </div>
  )
}
