import React, { useContext } from 'react'
import { appContext } from './AppContext';
import { toast } from 'react-toastify';

export default function PrivateRoutes({ component: Component, alt:Alt}){
    const {users} = useContext(appContext)
 
    if (users) {
        return <Component />;
       }else{
        // toast.error("login please")
        return <Alt/>
       }
}
