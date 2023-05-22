import React, { useContext } from 'react';
import './UserWelcomePage.css'
import { appContext } from '../../../AppContext';
import { useNavigate } from 'react-router-dom';
const UserWelcomePage = () => {

    const {users,setUserUpdateFullName,setPhotoUrl}=useContext(appContext)
    const navigate = useNavigate();

    const editProfileHandler = (e)=>{
        e.preventDefault();
          navigate("/updatedetails")
       
    }

    return (
        <div className="user-welcome-page">
             <div>
            <button className="edit-profile-btn btn" onClick={editProfileHandler} >
                    Edit Profile
                </button>
            </div>
            <div className="user-header">
                <h1>Welcome {users.displayName}</h1>
            </div>

            <ul className="collection with-header beautiful-collection">
                <li className="collection-header"><h4>Profile Details</h4></li>
                <li className="collection-item">
                    <div className="item-content">Name : {users.displayName}<a href="#!" className="secondary-content"><i className="material-icons">Edit</i></a></div>
                    
                   { users.photoURL ? <div className="item-content">PhotoUrl : {users.photoURL}<a href="#!" className="secondary-content"><i className="material-icons">Edit</i></a></div>
                                   :""}
                </li>
                
            </ul>

        </div>
    );
};

export default UserWelcomePage;
