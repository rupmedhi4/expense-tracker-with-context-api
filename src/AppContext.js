import React, { createContext, useEffect, useState } from 'react'
import { auth } from './firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';



export const appContext = createContext();
export default function AppContextProvider({children}){

    const navigate= useNavigate();

    //user login or logout check state
    const [users, setUsers] = useState(null);

    //signup state
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const [confirmPassword, setConfirmPassword]=useState("")

    //login state
    const [loginPassword, setLoginPassword]=useState("")
    const [loginEmail, setLoginEmail]=useState("")

    //user details update state
    const [userUpdateFullName, setUserUpdateFullName]=useState("")
    const [photoUrl, setPhotoUrl]=useState("")

    

const signupHandler =async(e)=>{
    e.preventDefault();
    if(password === confirmPassword){
        try{
       await createUserWithEmailAndPassword(auth, email, password)
       toast.success('Account created successfully');
       console.log("account create")

    }catch(err){
      toast.error(err.message)
      console.log(err.message)
    }
    }else{
        toast.error('Passwords do not match')
    }
}    


const loginHandler = async(e)=>{
    e.preventDefault();
    try{
         await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
         navigate('/welcome')
         toast.success('Login successful')
        
    }catch(err){
        toast.error(err.message)
    }
    
}

useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
   if (user) {
       setUsers(user);
       console.log(user)
       
   }else{
    setUsers(null);
   }
  });
  
},[])


const userUpdateHandler= ()=>{
    navigate("/updatedetails")
}


const profileUpdateHandler = async(e)=>{
    e.preventDefault();
    try{
       await updateProfile(auth.currentUser, {
            displayName: userUpdateFullName,
            photoURL: photoUrl
        })
        toast.success('update successful')
        navigate('/welcome')
           
    setUserUpdateFullName(users.displayName)
    setPhotoUrl(users.photoURL)
        
    }catch(err){
      toast.error(err.message)
      console.log(err)
    }
   
}

    const value = {
        email, setEmail,
        password, setPassword,
        confirmPassword, setConfirmPassword,
        signupHandler, 
        loginEmail, setLoginEmail,
        loginPassword, setLoginPassword,
        loginHandler, userUpdateHandler,
        userUpdateFullName,setUserUpdateFullName,
        photoUrl, setPhotoUrl, profileUpdateHandler,
        users, setUsers

        
    }
  return (
      <appContext.Provider value={value}>
        {children}
      </appContext.Provider>
  )
}
