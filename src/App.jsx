import React from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import ProtectedRoute from './components/ProtectedRoute'
import CreateBlog from './pages/CreateBlog'
import EditBlogs from './pages/EditBlogs'
import MyBlog from './pages/MyBlog'
import SingleBlogPage from './pages/SingleBlogPage'
import UserProfile from './pages/UserProfile'
const App = () => {
  return (
    <div>
     <Router>
      <Routes>
        <Route path='/' element={<Home/>}>
        </Route>
        <Route path='/singup' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/blog' element={
          <ProtectedRoute>
            <Blog/>
          </ProtectedRoute>
        }>
        </Route>
        <Route path="create-blog" element={
          <ProtectedRoute>
            <CreateBlog/>
          </ProtectedRoute>
        }></Route>
        <Route path='/editblogs/:id' element={
          <ProtectedRoute>
            <EditBlogs/>
          </ProtectedRoute>
        }></Route>
        <Route path='/myblog' element={
          <ProtectedRoute>
            <MyBlog/>
          </ProtectedRoute>
        }></Route>
        <Route path='/singleblogs/:id' element={ 
          <ProtectedRoute>
           <SingleBlogPage/>
          </ProtectedRoute>
        }></Route>
        <Route path='/userprofile' element={
          <ProtectedRoute>
            <UserProfile/>
          </ProtectedRoute>
        }></Route>
      </Routes>
     </Router>
    </div>
  )
}

export default App