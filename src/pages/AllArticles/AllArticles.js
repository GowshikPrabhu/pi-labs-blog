import React from 'react';
import PropTypes from 'prop-types';
import './AllArticles.css';
import * as bgimg from '../../assets/images/img-1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faTag, faUser } from '@fortawesome/free-solid-svg-icons';

const recentBlogs = [
  {
    id: 111,
    title: 'Divide and conquer algorithms implementation with c++',
    tags: ['Algorithm', 'D and C']
  },
  {
    id: 222,
    title: 'Divide and conquer algorithms implementation with c++',
    tags: ['Algorithm', 'D and C']
  },
  {
    id: 333,
    title: 'Divide and conquer algorithms implementation with c++',
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
                <img class='recent-photo' src={bgimg} alt='bg-img' />
                <div class='recent-details'>
                  <div class='recent-author'>
                    <FontAwesomeIcon icon={faUser} />
                    <button className='text-button no-decoration'>
                      John Doe
                    </button>
                  </div>
                  <div class='recent-date'>
                    <FontAwesomeIcon icon={faCalendar} />{' '}
                    <span>Sep. 25, 2020</span>
                  </div>
                  <div class='recent-tags'>
                    <FontAwesomeIcon icon={faTag} />
                    <ul>
                      {blog.tags.map((tag) => (
                        <li>
                          <button className='text-button'>{tag}</button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div class='recent-description'>
                <h4>{blog.title}</h4>
                <div className='divider'></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                  eum dolorum architecto obcaecati enim dicta praesentium, quam
                  nobis! Neque ad aliquam facilis numquam. Veritatis, sit.
                  Something that brews again in this wilderness.
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
