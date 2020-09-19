import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Landing from './components/Landing/Landing';
import Searchbar from './components/Searchbar/Searchbar';
import Filter from './components/Filter/Filter';
import './Home.css';

const data = [
  { id: 1, value: 'Algorithm', isChecked: false },
  { id: 2, value: 'React', isChecked: false },
  { id: 3, value: 'React Native', isChecked: false },
  { id: 4, value: 'Flutter', isChecked: false }
];

const Home = () => {
  const [searchValue, setSearchValue] = useState('');
  const [tags, setTags] = useState([]);

  const handleSearchSubmit = () => {
    if (searchValue.length !== 0) {
      //TODO: Handle search
    }
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    // TODO: Handle search
    //console.log(e.target.value);
  };

  const handleTagSelection = (e) => {
    let tagsCopy = tags;
    tagsCopy.forEach((tag) => {
      if (tag.value === e.target.value) {
        tag.isChecked = e.target.checked;
      }
    });
    setTags(() => [...tagsCopy]);
  };

  const clearSelection = () => {
    let tagsCopy = tags;
    tagsCopy.forEach((tag) => (tag.isChecked = false));
    setTags(() => [...tagsCopy]);
  };

  const filterResults = () => {
    // TODO: Handle the filter results by tag
    // console.log(tags);
  };

  useState(() => {
    setTags(data);
  }, []);

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
          <Filter
            tags={tags}
            onSelect={handleTagSelection}
            clearSelection={clearSelection}
            filterSelection={filterResults}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
