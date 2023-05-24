import { useContext } from 'react';
import './UserForm.css';
import { appContext } from '../../AppContext';

export default function UserForm() {
  const {
    userUpdateFullName,
    setUserUpdateFullName,
    photoUrl,
    setPhotoUrl,
    profileUpdateHandler,
    users
  } = useContext(appContext);

  return (
    <div className="user-form-container">
      <div className="user-form-header">
        <span className="frmspan">Contact Details</span>
        <button className="cancel-button">Cancel</button>
      </div>

      <form onSubmit={profileUpdateHandler}>
        <div className="user-form-input">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            placeholder={users.displayName ? users.displayName : 'Full Name'}
            name="fullName"
            value={userUpdateFullName}
            onChange={(e) => {
              setUserUpdateFullName(e.target.value);
            }}
            required
          />
        </div>

        <div className="user-form-input">
          <label htmlFor="photoURL">Photo URL:</label>
          <input
            type="text"
            id="photoURL"
            placeholder={users.photoURL ? users.photoURL : 'Photo URL'}
            name="photoURL"
            value={photoUrl}
            onChange={(e) => {
              setPhotoUrl(e.target.value);
            }}
            required
          />
        </div>

        <div className="user-form-button-container">
          <button type="submit">Update</button>
        </div>
      </form>

     
      <hr className="horizontal-line" />
      </div>
   
  )
        }
  