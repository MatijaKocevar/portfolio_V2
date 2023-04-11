import React from 'react';
import InterestsCarousel from './interestsCarousel';
import './interests.scss';

const Interests = () => {
  return (
    <div id='interests' className='interests'>
      <h1>interests</h1>
      <div className='interests-content'>
        <InterestsCarousel />
      </div>
    </div>
  );
};

export default Interests;
