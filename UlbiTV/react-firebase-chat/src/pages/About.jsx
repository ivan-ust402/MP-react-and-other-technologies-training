import React from 'react';
import { LoaderConicGradient } from '../components';

export const About = () => {
  return (
    <div className='about'>
      <LoaderConicGradient />
      <h1 className="about__title">React & Firebase real-time chat</h1>

      <div className="about__text-box">
        <p className='about__text'>Welcome to my chat. You need to register or log in to get into the chat. Please go to the login page.</p>
        <p className='about__text'>If you are already logged in, go to the menu and select the chat tab.</p>
      </div>
    </div>
  );
}

