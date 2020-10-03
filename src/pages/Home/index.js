import React from 'react';
import './index.css';
import StartSection from './components/StartSection/StartSection';
import BlogCard from '../Components/BlogCard/BlogCard';

/**
 * Home page
 * @description Home page with featured blogs
 */
const Home = () => {
  return (
    <div>
      <StartSection />
      <div className='main-section'>
        <BlogCard viewMode='horizontal' id={1} />
        <div className='multi-cards set-1'>
          <BlogCard viewMode='vertical' id={2} />
          <BlogCard viewMode='vertical' id={3} />
          <BlogCard viewMode='vertical' id={4} />
        </div>
        <div className='multi-cards'>
          <BlogCard viewMode='vertical' id={5} />
          <BlogCard viewMode='vertical' id={6} />
          <BlogCard viewMode='vertical' id={7} />
        </div>
      </div>
    </div>
  );
};

export default Home;
