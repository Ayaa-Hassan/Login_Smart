import React, { useContext } from 'react'
import { authContext } from '../../Context/authentication'
import Login from '../Login/Login';
import { Navigate} from 'react-router-dom';

export default function ProtectedRoute({ children }) {
    
    const { token } = useContext(authContext);
   
    if (token === null) {
        
        return <Navigate to="/Login"/>
    }



    return <>
    {children}
    
    
    </>
}