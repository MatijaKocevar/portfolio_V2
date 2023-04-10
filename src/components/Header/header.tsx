import author from './images/me.jpg';
import React, { useState } from 'react';
import './header.scss';
import { TranslationProps } from '../Types/types';

const TEXTS = ['Creative', 'Hard working', 'Positive'];

const Header = (props: TranslationProps) => {
  const [index, setIndex] = useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div id='home' className='header-wraper'>
      <div className='main-info'>
        <h1 className='heading'>portfolio</h1>
        <h1 className='heading' style={{ color: 'red' }}>
          {props.getTranslation('Header_Subtitle')}
        </h1>
      </div>
    </div>
  );
};

export default Header;
