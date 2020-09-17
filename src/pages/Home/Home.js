import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Landing from './components/Landing/Landing';
import Toolbar from './components/Toolbar/Toolbar';
import './Home.css';

const Home = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchSubmit = () => {
    if (searchValue.length !== 0) {
      //TODO: Handle search
    }
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    console.log(e.target.value);
  };

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
          <Toolbar
            value={searchValue}
            onSearchChange={handleSearch}
            onSearchSubmit={handleSearchSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
