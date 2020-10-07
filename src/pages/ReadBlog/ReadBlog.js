import React from 'react';
import BlogHeader from './components/BlogHeader/BlogHeader';
import './ReadBlog.css';
import img1 from '../../assets/images/img-1.jpg';

const ReadBlog = () => {
  return (
    <div className='read-blog'>
      <BlogHeader />
      <div className='start-img'>
        <img src={img1} alt='start img' width='80%' height='100%' />
      </div>
    </div>
  );
};

export default ReadBlog;
