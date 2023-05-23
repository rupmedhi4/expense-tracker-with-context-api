import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Components/Navbar/Navbar';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import UserWelcome from './Components/UserWelcome/UserWelcome';
import UpdateForm from './Components/UserUpdateForm/UpdateForm';
import PrivateRoutes from './PrivateRoutes';
import EmailVerification from './Components/Email_verification/EmailVerification';
import VerifyingCheck from './Components/Email_verification/VerifyingCheck';

function App() {
  return (
    
      <>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          <Route path="/welcome" element={<PrivateRoutes component={UserWelcome} alt={Home}/>} />
          <Route path="/verifyemail" element={<PrivateRoutes component={EmailVerification} alt={Home}/>} />
          <Route path="/updatedetails" element={<PrivateRoutes component={UpdateForm} alt={Home}/>} />
          <Route path="/VerifyingCheck" element={<PrivateRoutes component={VerifyingCheck} alt={Home}/>} />

        </Routes>
      </>
    
  );
}

export default App;
