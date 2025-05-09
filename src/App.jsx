import React from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
const App = () => {
  return (
    <div>
     <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/singup' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
     </Router>
    </div>
  )
}

export default App