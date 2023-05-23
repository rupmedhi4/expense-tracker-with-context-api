import React, { useContext } from 'react'
import { appContext } from '../../AppContext'
import UpdateForm from '../UserUpdateForm/UpdateForm'

export default function VerifyingCheck() {
    const {users}=useContext(appContext)
  return (
    <div>
       <h3>Verifying...</h3>
      
    </div>
  )
}
