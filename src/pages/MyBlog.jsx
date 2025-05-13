import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { MdDelete } from 'react-icons/md';
import { RxUpdate } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import blog from '../pages/blog.jpg'

const MyBlog = () => {
  const [myBlog, setMyBlog] = useState([]);
  const { user } = useContext(AuthContext);

  console.log(user);

  const fetchData = async () => {
    if (user) {
      const response = await axios.get(`https://blog-hqx2.onrender.com/blog/${user?._id}`);
      setMyBlog(response.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, [user?._id]);

  const deleteBlogs = async (id) => {
    const response = await axios.delete(`https://blog-hqx2.onrender.com/blog/${id}`);
    if (response.status === 200) {
      alert("blog delete successfully");
    }
  };

  return (
    <div className='w-11/12 mx-auto'>
      <h1>My Blogs</h1>
      <div className='grid gap-12 grid-cols-3'>
  {
    myBlog.length > 0 ? (
      myBlog.map((blog, index) => (
        <div key={index} className='flex flex-col gap-2 shadow-sm p-4 shadow-blue-300'>
          <h1 className='font-bold text-xl'>{blog.title}</h1>
          <img
  src={blog?.image || "https://via.placeholder.com/300x200"}
  alt="blog"
  className="h-72 w-full object-cover"
/>

          <p className='text-gray-600 font-semibold'>{blog.content}</p>
          <div className='flex gap-2 items-center'>
            <button className='text-red-500 cursor-pointer text-2xl' onClick={() => deleteBlogs(blog._id)}>
              <MdDelete />
            </button>
            <Link to={`/editBlogs/${blog._id}`} state={{ blog }}>
              <button className='text-green-500 cursor-pointer text-2xl'>
                <RxUpdate />
              </button>
            </Link>
          </div>
        </div>
      ))
    ) : (
      <p className="text-red-500 col-span-3 text-5xl">No blogs found.</p>
    )
 }
</div>

    </div>
  );
};

export default MyBlog;
