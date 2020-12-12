import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './BlogHeader.css';
import { ThemeContext } from '../../../../context/ThemeContext';

/**
 * Header for blog posts
 * @param {String} title
 * @param {String} description
 * @param {Object} info
 */
const BlogHeader = ({ title, description, info }) => {
  const { themeMode } = useContext(ThemeContext);

  return (
    <div className={`blog-header ${themeMode}`}>
      <h1 className='blog-header-title'>
        Lorem ipsum dolor sit amet, consectetur adipsicing elit.
      </h1>
      <p className='blog-header-description'>
        Lorem ipsum dolor sit amet, consectetur adipsicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className='blog-header-info'>
        <div
          style={{
            width: '35px',
            height: '35px',
            backgroundColor: '#aaaaaa',
            borderRadius: '50%',
            textAlign: 'center'
          }}
        ></div>
        <div className='info-name-time'>
          <p>John Doe</p>
          <p>
            12 nov 2020 • <span>3 min read</span>
          </p>
        </div>
      </div>
    </div>
  );
};

BlogHeader.propTypes = {
  /** Title of blog */
  title: PropTypes.string.isRequired,
  /** Description of blog */
  description: PropTypes.string.isRequired,
  /** Info object with author, time and date details */
  info: PropTypes.object.isRequired
};

export default BlogHeader;
