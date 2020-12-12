import React, { useContext } from 'react';
import './index.css';
import StartSection from './components/StartSection/StartSection';
import BlogCard from '../Components/BlogCard/BlogCard';
import { ThemeContext } from '../../context/ThemeContext';

/**
 * Home page
 * @description Home page with featured blogs
 */
const Home = () => {
  const { themeMode } = useContext(ThemeContext);
  return (
    <div>
      <StartSection />
      <div className={`main-section ${themeMode}`}>
        <BlogCard viewMode='horizontal' id={1} />
        <div className='divider'></div>
        <BlogCard viewMode='horizontal' id={2} />
        <div className='divider'></div>
        <BlogCard viewMode='horizontal' id={3} />
        <div className='divider'></div>
        <BlogCard viewMode='horizontal' id={4} />
        {/* <div className='multi-cards set-1'>
          <BlogCard viewMode='vertical' id={2} />
          <BlogCard viewMode='vertical' id={3} />
          <BlogCard viewMode='vertical' id={4} />
        </div>
        <div className='multi-cards'>
          <BlogCard viewMode='vertical' id={5} />
          <BlogCard viewMode='vertical' id={6} />
          <BlogCard viewMode='vertical' id={7} />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
