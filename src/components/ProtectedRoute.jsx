import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const {token} = useContext(AuthContext)

    if(!token){
        return <Navigate to={"/login"}/>
    }
  return (
    <div>ProtectedRoute</div>
  )
}

export default ProtectedRoute