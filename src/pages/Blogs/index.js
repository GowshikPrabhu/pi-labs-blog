import React from 'react';
import BlogCard from '../Components/BlogCard/BlogCard';
import './index.css';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Blogs = () => {
  return (
    <div className='main-section'>
      <h1>Posts</h1>
      <div className='multi-cards'>
        <BlogCard viewMode='vertical' id={2} />
        <BlogCard viewMode='vertical' id={3} />
        <BlogCard viewMode='vertical' id={4} />
      </div>
      <div className='multi-cards'>
        <BlogCard viewMode='vertical' id={5} />
        <BlogCard viewMode='vertical' id={6} />
        <BlogCard viewMode='vertical' id={7} />
      </div>
      <div className='multi-cards'>
        <BlogCard viewMode='vertical' id={2} />
        <BlogCard viewMode='vertical' id={3} />
        <BlogCard viewMode='vertical' id={4} />
      </div>
      <div className='next-page-button'>
        <button className='text-button' onClick={() => {}}>
          Next
          <FontAwesomeIcon icon={faArrowRight} className='text-button-icon' />
        </button>
      </div>
    </div>
  );
};

export default Blogs;
