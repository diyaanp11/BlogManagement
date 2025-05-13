import React, { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'

const AuthProvider = ({children}) => {
    const[token, setToken] = useState(() => localStorage.getItem
("token"))
    const[user, setUser] = useState(null)
    console.log(token,"this is token")
    console.log(JSON.stringify(user),"this is user")

    //Get Token and user
    useEffect(() => {
        const storedToken = localStorage.getItem("token")
        const storedUser = localStorage.getItem("user")

        if(storedToken && storedUser){
            setToken(storedToken)
            setUser(JSON.parse(storedUser))
        }
    }, [])

    useEffect(() => {
        if(token && user){
            localStorage.setItem("token", token)
            localStorage.setItem("user",JSON.stringify(user))
        }
        else{
             localStorage.removeItem("token")
            localStorage.removeItem("user")
        }
    },[token,user])

        const login = (loginToken, userDetails) =>{
            setToken(loginToken)
            setUser(userDetails)
        }
  
  return (
    <AuthContext.Provider value={{token,user,login}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider