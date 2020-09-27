import React from 'react';
import './Articles.css';
import FullImageCard from './components/FullImageCard/FullImageCard';
import PropTypes from 'prop-types';

/**
 * Show featured and popular posts
 * @param {Object[]} blogs Array of blog objects
 * @param {Function} onSelect Handle blog selection
 */
const Articles = ({ blogs, onSelect }) => {
  return (
    <div>
      <div className='article-container'>
        <div className='article-heading'>featured posts</div>
        <div className='divider'></div>
        <div className='article-body'>
          {blogs.map((blog) => (
            <FullImageCard
              id={blog.id}
              key={blog.id}
              onCardPress={onSelect}
              blog={blog}
            />
          ))}
        </div>
      </div>
      <div style={{ marginTop: '30px' }}></div>
      <div className='article-container'>
        <div className='article-heading'>popular posts</div>
        <div className='divider'></div>
        <div className='article-body'>
          {blogs.map((blog) => (
            <FullImageCard
              id={blog.id}
              key={blog.id}
              onCardPress={() => {}}
              blog={blog}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

Articles.propTypes = {
  /** Array of blog objects */
  blogs: PropTypes.array,
  /** Handle blog onClick */
  onSelect: PropTypes.func
};

export default Articles;
