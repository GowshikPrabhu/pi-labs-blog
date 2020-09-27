import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Searchbar from './components/Searchbar/Searchbar';
import Filter from './components/Filter/Filter';
import Articles from '../Articles/Articles';
import AllArticles from '../AllArticles/AllArticles';
import ReadBlog from '../ReadBlog/ReadBlog';
import './Home.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFilter } from '@fortawesome/free-solid-svg-icons';

const blogs = [
  {
    id: 111,
    title: 'Divide and conquer algorithms implementaion with c++',
    tags: ['Algorithm', 'D and C']
  },
  {
    id: 222,
    title: 'Divide and conquer algorithms implementaion with c++',
    tags: ['Algorithm', 'D and C']
  },
  {
    id: 333,
    title: 'Divide and conquer algorithms implementaion with c++',
    tags: ['Algorithm', 'D and C']
  }
];

const data = [
  { id: 1, value: 'Algorithm', isChecked: false },
  { id: 2, value: 'React', isChecked: false },
  { id: 3, value: 'React Native', isChecked: false },
  { id: 4, value: 'Flutter', isChecked: false }
];

const Home = () => {
  const [searchValue, setSearchValue] = useState('');
  const [tags, setTags] = useState([]);
  const [showModal, setShowModal] = useState('m-modal-hide');
  const [readMode, setReadMode] = useState(true);

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

  const toggleModal = () => {
    setShowModal((prevState) => {
      if (prevState === 'm-modal-show') return 'm-modal-hide';
      return 'm-modal-show';
    });
  };

  useState(() => {
    setTags(data);
  }, []);

  return (
    <div>
      <Header />
      {readMode ? (
        <ReadBlog />
      ) : (
        <div>
          <div className='home-layout'>
            {/* <div className='m-modal-toggle'>
          <FontAwesomeIcon
            icon={faFilter}
            className='filter-modal-button'
            onClick={toggleModal}
          />
        </div> */}
            <div className='layout-container'>
              {/* Blog cards */}
              <Articles blogs={blogs} onSelect={() => {}} />
            </div>
            <div className={`layout-container toolbar m-modal ${showModal}`}>
              <div className='m-modal-container'>
                <button className='m-modal-close' onClick={toggleModal}>
                  Close
                </button>
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
          </div>
          <AllArticles blogs={blogs} onSelect={() => {}} />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Home;
