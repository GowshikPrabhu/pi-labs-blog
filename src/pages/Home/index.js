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
        <BlogCard viewMode='vertical' />
      </div>
    </div>
  );
};

export default Home;
