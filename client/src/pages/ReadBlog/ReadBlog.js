import React, { useContext, useEffect, useState } from 'react';
import BlogHeader from './components/BlogHeader/BlogHeader';
import './ReadBlog.css';
import './content.css';
import { ThemeContext } from '../../context/ThemeContext';
import Highlight from './components/Highlight/Highlight';

const ReadBlog = () => {
  const [blog, setBlog] = useState('');
  const { themeMode } = useContext(ThemeContext);
  useEffect(() => {
    setBlog('<p>Hello from me</p>');
  }, []);

  return (
    <div className={`read-blog ${themeMode}`}>
      <BlogHeader />
      <div className='read-blog-area'>
        <div className='read-blog-content'>
          {/* <div
            className='html-content'
            dangerouslySetInnerHTML={{ __html: blog }}
          ></div> */}
          <Highlight parsedText={blog} />
        </div>
      </div>
    </div>
  );
};

export default ReadBlog;
