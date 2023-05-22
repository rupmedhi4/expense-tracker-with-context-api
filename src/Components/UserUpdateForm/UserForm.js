import { useContext, useEffect } from 'react'
import './UserForm.css'
import { appContext } from '../../AppContext'

export default function UserForm() {

    const {userUpdateFullName,setUserUpdateFullName,photoUrl,setPhotoUrl,profileUpdateHandler, users} = useContext(appContext)

  return (
    <div>
            <div className="form-container">

                <div className="header">
                    <span className="frmspan">Contact Details</span>
                    <button className="cancel-button">Cancel</button>
                </div>

                <form onSubmit={profileUpdateHandler}>
                    <div className="input-container">
                        <label htmlFor="fullName">Full Name:</label>
                        <input type="text" 
                               id="fullName"
                               placeholder= {users.displayName? users.displayName : "FullName" }
                               name="fullName"
                               value={userUpdateFullName}
                               onChange={(e)=>{setUserUpdateFullName(e.target.value)}}
                               required
                               />
                            
                        <label htmlFor="photoURL">Photo URL:</label>
                        <input type="text" 
                               id="photoURL"
                               placeholder={users.displayName? users.photoURL : "photoURL" }
                               name="photoURL"
                               value={photoUrl}
                               onChange={(e)=>{setPhotoUrl(e.target.value)}}
                               required
                           />
                    </div>

                    <div className="button-container">
                        <button type="submit" onClick={profileUpdateHandler}>Update</button>
                    </div>

                </form>
                <hr className="horizontal-line" />
            </div>
        </div>
  )
}
