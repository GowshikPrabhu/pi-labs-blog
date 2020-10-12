import React from 'react';
import './index.css';
import AboutDetails from './components/AboutDetails/AboutDetails';
import TeamDetails from './components/TeamDetails/TeamDetails';
import ContactUs from './components/ContactUs/ContactUs';

const data = [
  {
    title: 'Who we are?',
    description:
      'Hello and welcome to Plus Infinity Labs. We are team based in India. We do freelance application development, competitive programming and content writing.'
  },
  {
    title: 'Our Goal',
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
      <TeamDetails />
      <ContactUs />
    </div>
  );
};

export default About;
