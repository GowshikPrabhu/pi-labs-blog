import React from 'react';
import './Articles.css';
import * as bgimg from '../../assets/images/img-1.jpg';

const Articles = () => {
  return (
    <div>
      <div className='article-container'>
        <div className='article-heading'>featured posts</div>
        <div className='divider'></div>
        <div className='article-body'>
          <div className='max-img-card' onClick={() => {}}>
            <img src={bgimg} alt='article-bg' />
            <div className='full-overlay'>
              <div className='card-tag-area'>
                <div className='card-tag'>Algorithm</div>
                <div className='card-tag'>D and C</div>
              </div>
              <div className='card-in-title'>
                <p>Divide and conquer algorithms implementaion with c++</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
