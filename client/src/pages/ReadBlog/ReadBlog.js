import React, { useEffect, useState } from 'react';
import BlogHeader from './components/BlogHeader/BlogHeader';
import './ReadBlog.css';
import img1 from '../../assets/images/img-1.jpg';
import Markdown from 'markdown-to-jsx';
import * as example from '../../example.md';
import { InlineCode, BlockCode } from './components/CodeRenderer/CodeRenderer';
import ImageRenderer from './components/ImageRenderer/ImageRenderer';
import BlockQuote from './components/BlockQuote/BlockQuote';
import PreFormattedBox from './components/PreFormattedBox/PreFormattedBox';

const ReadBlog = () => {
  const [blog, setBlog] = useState('');

  useEffect(() => {
    fetch(example)
      .then((response) => response.text())
      .then((text) => {
        setBlog(text);
      });
  }, []);

  return (
    <div className='read-blog'>
      <BlogHeader />
      <div className='start-img'>
        <img src={img1} alt='start img' width='80%' height='100%' />
      </div>
      <div className='read-blog-area'>
        <div className='read-blog-content'>
          <Markdown
            children={blog}
            options={{
              overrides: {
                InlineCode: InlineCode,
                BlockCode: BlockCode,
                img: ImageRenderer,
                blockquote: BlockQuote,
                PreFormattedBox: PreFormattedBox
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ReadBlog;
