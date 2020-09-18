import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Landing from './components/Landing/Landing';
import Searchbar from './components/Searchbar/Searchbar';
import Filter from './components/Filter/Filter';
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
          <Searchbar
            value={searchValue}
            onSearchChange={handleSearch}
            onSearchSubmit={handleSearchSubmit}
          />
          <Filter />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
