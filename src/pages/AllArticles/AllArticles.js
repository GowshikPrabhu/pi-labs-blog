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
            <div key={blog.id} className='recent-blogs'>
              <div className='hbv-left'>
                <img src={bgimg} alt='blog-image' />
              </div>
              <div className='hbv-right'>
                <div className='card-tag-area'>
                  {blog.tags.map((tag) => (
                    <div className='card-tag'>{tag}</div>
                  ))}
                </div>
                <div className='hbv-title'>{blog.title}</div>
                <div className='hbv-desc'>
                  {blog.title}
                  {blog.title}
                </div>
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
