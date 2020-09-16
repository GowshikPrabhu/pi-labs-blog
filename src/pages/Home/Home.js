import React from 'react';
import Header from '../../components/Header/Header';
import Landing from './components/Landing/Landing';
import Toolbar from './components/Toolbar/Toolbar';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Header />
      <Landing />
      <div className='home-layout'>
        <div className='layout-container'>
          {/* Blog cards */}
          <p>Blog posts</p>
        </div>
        <div className='layout-container toolbar'>
          {/* Search and filter */}
          <Toolbar />
        </div>
      </div>
    </div>
  );
};

export default Home;
