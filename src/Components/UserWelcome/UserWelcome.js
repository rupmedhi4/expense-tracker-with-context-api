import React, { useContext } from 'react'
import './UserWelcome.css'
import { appContext } from '../../AppContext'
import UserWelcomePage from './UserWelcomeafterUpdate/UserWelcomePage '

export default function UserWelcome() {

    const {userUpdateHandler, users} = useContext(appContext)
    
    return (
        users.displayName ? 
        <UserWelcomePage/>
        :
        <div className="welcome-page">
            <div className="title">
                Welcome to Expense Tracker
            </div>
            <div className="profile-incomplete">
                Your profile is Incomplete.
                <span className="complete-link" onClick={userUpdateHandler}>Complete now</span>
            </div> 
            </div>
           
       
    )
}
