import React from 'react';
import './Articles.css';
import FullImageCard from './components/FullImageCard/FullImageCard';

const featuredBlogs = [
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

const Articles = () => {
  return (
    <div>
      <div className='article-container'>
        <div className='article-heading'>featured posts</div>
        <div className='divider'></div>
        <div className='article-body'>
          {featuredBlogs.map((blog) => (
            <FullImageCard key={blog.id} onCardPress={() => {}} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
