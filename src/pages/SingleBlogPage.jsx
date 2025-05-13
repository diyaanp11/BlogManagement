import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleBlogPage = () => {
  const [singleBlog, setSingleBlog] = useState();
  const { id } = useParams();

  const fetchData = async () => {
    const response = await axios.get(`https://blog-hqx2.onrender.com/blog/single/${id}`);
    setSingleBlog(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='w-11/12 mx-auto p-4'>
      <h1 className='text-3xl font-bold text-center mb-6'>My Single Blog</h1>

      {/* Blog Title */}
      <h2 className='text-2xl font-bold mb-4'>{singleBlog?.title}</h2>

      {/* Blog Image */}
      <div className="mb-6">
        <img
          src={singleBlog?.image}
          alt={singleBlog?.title}
          className="w-full h-80 object-cover rounded-md shadow-md"
        />
      </div>

      {/* Blog Content */}
      <p className='text-lg text-gray-700'>{singleBlog?.content}</p>
    </div>
  );
};

export default SingleBlogPage;
