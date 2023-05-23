import React, { useContext } from 'react';
import './EmailVerification.css';
import { appContext } from '../../AppContext';
import UpdateForm from '../UserUpdateForm/UpdateForm';

export default function EmailVerification() {
  const { emailVerification,users } = useContext(appContext)
  return (
    <>
      {users.emailVerified ? <UpdateForm /> :
        <div className="container1">
          <h1 className="heading1">
            <span className='btnn' onClick={emailVerification}>Click Here</span>
            To Verify Your Email
          </h1>
        </div>
      }
    </>

  );
}
