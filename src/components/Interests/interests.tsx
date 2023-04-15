import React from 'react';
import InterestsCarousel from './interestsCarousel';
import './interests.scss';
import { TranslationProps } from '../Types/types';

const Interests = (props: TranslationProps) => {
  return (
    <div id='interests' className='interests'>
      <h1>{props.getTranslation('Navigation_Interests')}</h1>
      <div className='interests-content'>
        <InterestsCarousel />
      </div>
    </div>
  );
};

export default Interests;
