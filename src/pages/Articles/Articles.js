import React from 'react';
import './Articles.css';
import * as bgimg from '../../assets/images/img-1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Articles = () => {
  return (
    <div>
      <div className='article-container'>
        <div className='article-heading'>featured posts</div>
        <div className='divider'></div>
        <div className='article-body'>
          <div className='max-image-card'>
            <img src={bgimg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
