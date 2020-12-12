import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './BlogCard.css';
import { ThemeContext } from '../../../context/ThemeContext';
import img1 from '../../../assets/images/img-1.jpg';
import img2 from '../../../assets/images/img-2.jpg';
import img3 from '../../../assets/images/img-3.jpg';
import img4 from '../../../assets/images/img-4.jpg';
import img5 from '../../../assets/images/img-5.jpg';
import img6 from '../../../assets/images/img-6.jpg';
import img7 from '../../../assets/images/img-7.jpg';

/**
 * Blog card to display posts
 * @param {String} viewMode Horizontal or vertical view
 */
let images = {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7
};
const BlogCard = ({ viewMode, id }) => {
  const { themeMode } = useContext(ThemeContext);
  return (
    <div className={`blog-card ${viewMode}`}>
      <div className='blog-card-img'>
        <img src={images[`img${id}`]} alt='img1' />
      </div>
      <div className={`blog-card-details ${themeMode}`}>
        <div className='tag-area-card'>
          {['Algorithm', 'React'].map((tag) => (
            <p>{tag}</p>
          ))}
        </div>
        <h2 className='blog-card-title'>
          Lorem ipsum dolor sit amet, consectetur adipsicing elit.
        </h2>
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
