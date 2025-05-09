import React from 'react'
import blog from '../pages/blog.jpg'
import { Link } from 'react-router-dom';
const Home = () => {
  return (
     <div>
       <div className='h-screen w-full bg-cover bg-center opacity-60 blur-xs relative' style={{ backgroundImage: `url(${blog})` }}>
    </div>
   <div className='absolute inset-0 flex flex-col items-center justify-center mx-auto'>
    <h1 className='text-6xl font-bold '>Welcome to Your BlogSpace</h1>
    <p className='text-2xl font-bold mt-2 Typewriter'>Share your thoughts, stories, and ideas with the world. Easy to use, beautifully designed.</p>
    <div className='flex gap-5'>
        <Link to="/login"> 
      <button className='bg-green-600 text-white rounded mt-3 px-2 py-2 hover:bg-green-800 w-24'> Login
      </button>
      </Link>
      <Link to="/singup"> 
    <button className='bg-white text-green-600 rounded mt-3 px-2 py-2 hover:bg-gray-200 w-24'> Sign up
    </button>
    </Link>
    </div>
    </div>
     </div>
  )
}

export default Home