import React, { useContext, useEffect, useState } from 'react';
import BlogHeader from './components/BlogHeader/BlogHeader';
import './ReadBlog.css';
import { ThemeContext } from '../../context/ThemeContext';

const ReadBlog = () => {
  const [blog, setBlog] = useState('');
  const { themeMode } = useContext(ThemeContext);
  useEffect(() => {
    console.log('Read Blog');
  }, []);

  return (
    <div className={`read-blog ${themeMode}`}>
      <BlogHeader />
      <div className='start-img'>
        <img src={img1} alt='start img' width='80%' height='100%' />
      </div>
      <div className='read-blog-area'>
        <div className='read-blog-content'>
          <p>Blog Content</p>
        </div>
      </div>
    </div>
  );
};

export default ReadBlog;
