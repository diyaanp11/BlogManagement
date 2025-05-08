import React from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import { Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
     <Register/>
     <Login/>
    </div>
  )
}

export default App