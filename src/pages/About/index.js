import React from 'react';
import './index.css';
import AboutDetails from './components/AboutDetails/AboutDetails';

const data = [
  {
    title: 'Who we are?',
    description:
      'Hello and welcome to Plus Infinity Labs. We are team based in Indid. We do freelance application developing and content writing.'
  },
  {
    title: 'Our goal',
    description:
      'We like to share our knowledge and experience with others. Our goal is to share how simple and fun programming is.'
  }
];

const About = () => {
  return (
    <div className='aboutus'>
      {data.map(({ title, description }) => (
        <AboutDetails title={title} description={description} />
      ))}
    </div>
  );
};

export default About;
