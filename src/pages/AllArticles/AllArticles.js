import React from 'react';
import PropTypes from 'prop-types';
import './AllArticles.css';
import * as bgimg from '../../assets/images/img-1.jpg';

const recentBlogs = [
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

/**
 * Show all the recent articels
 * @param {Object[]} blogs Array of blogs
 */
const AllArticles = ({ blogs }) => {
  return (
    <div className='recent-articles'>
      <div className='article-container'>
        <div className='article-heading'>recent posts</div>
        <div className='divider'></div>
        <div className='recent-article-body'>
          {recentBlogs.map((blog) => (
            <div className='recent-blogs'>
              <div class='recent-meta'>
                <div
                  class='recent-photo'
                  style={{
                    backgroundImage: '../../assets/images/img-1.jpg'
                  }}
                ></div>
                <ul class='recent-details'>
                  <li class='recent-author'>
                    <a href='#'>John Doe</a>
                  </li>
                  <li class='recent-date'>Aug. 24, 2015</li>
                  <li class='recent-tags'>
                    <ul>
                      <li>
                        <a href='#'>Learn</a>
                      </li>
                      <li>
                        <a href='#'>Code</a>
                      </li>
                      <li>
                        <a href='#'>HTML</a>
                      </li>
                      <li>
                        <a href='#'>CSS</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class='recent-description'>
                <h1>Learning to Code</h1>
                <h2>Opening a door to the future</h2>
                <p>
                  {' '}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                  eum dolorum architecto obcaecati enim dicta praesentium, quam
                  nobis! Neque ad aliquam facilis numquam. Veritatis, sit.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

AllArticles.propTypes = {
  /** Array of blog objects */
  blogs: PropTypes.array
};

export default AllArticles;
