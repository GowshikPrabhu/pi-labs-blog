import React from 'react';
import PropTypes from 'prop-types';
import './BlogCard.css';
import img1 from '../../../assets/images/img-1.jpg';

/**
 * Blog card to display posts
 * @param {String} viewMode Horizontal or vertical view
 */
const BlogCard = ({ viewMode }) => {
  return (
    <div className={`blog-card ${viewMode}`}>
      <div className='blog-card-img'>
        <img src={img1} alt='img1' />
      </div>
      <div className='blog-card-details'>
        <div className='tag-area-card'>
          {['Algorithm', 'React'].map((tag) => (
            <p>{tag}</p>
          ))}
        </div>
        <p className='blog-card-title'>
          Lorem ipsum dolor sit amet, consectetur adipsicing elit.
        </p>
        <p className='blog-card-description'>
          Lorem ipsum dolor sit amet, consectetur adipsicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className='blog-card-info'>
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
    </div>
  );
};

BlogCard.propTypes = {
  /** Set the card content orientation - `vertical` | `horizontal` */
  viewMode: PropTypes.oneOf(['vertical', 'horizontal'])
};

BlogCard.defaultProps = {
  viewMode: 'vertical'
};

export default BlogCard;
