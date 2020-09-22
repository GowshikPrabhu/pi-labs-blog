import React from 'react';
import PropTypes from 'prop-types';
import './FullImageCard.css';
import * as bgimg from '../../../../assets/images/img-1.jpg';

/**
 * Full image card for articles
 * @param {Function} onCardPress Handles card press event
 * @param {Object} blog Blog info object
 */
const FullImageCard = ({ onCardPress, blog }) => {
  return (
    <div className='max-img-card' onClick={() => onCardPress(blog.id)}>
      <img src={bgimg} alt='article-bg' />
      <div className='full-overlay'>
        <div className='card-tag-area'>
          {blog.tags.map((tag) => (
            <div className='card-tag'>{tag}</div>
          ))}
        </div>
        <div className='card-in-title'>
          <p>{blog.title}</p>
        </div>
      </div>
    </div>
  );
};

FullImageCard.propTypes = {
  /** Handle card press */
  onCardPress: PropTypes.func.isRequired,
  /** Blog object with blog info */
  blog: PropTypes.object.isRequired
};

export default FullImageCard;
