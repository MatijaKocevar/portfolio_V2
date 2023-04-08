import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faLightbulb, faTerminal, faLaptopCode, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import './interests.scss';

const InterestsCarousel = () => {
  return (
    <Carousel showArrows={true} infiniteLoop={true} showThumbs={false} showStatus={false} autoPlay={true} interval={3000}>
      <>
        <div className='bgcircle'>
          <FontAwesomeIcon className='bgicon' icon={faTerminal} size='2x' />
        </div>
        <div className='myCarousel'>
          <h3>Become a better frontend developer</h3>
          <p>I am doing everything I can to further my skills and knowledge.</p>
        </div>
      </>
      <>
        <div className='bgcircle'>
          <FontAwesomeIcon className='bgicon' icon={faLaptopCode} size='2x' />
        </div>
        <div className='myCarousel'>
          <h3>Get an IT job</h3>
          <p>
            One of my biggest interests for most of my life. As a person who learns by doing, the possibility of working in IT would give me huge
            amounts of experience.
          </p>
        </div>
      </>
      <>
        <div className='bgcircle'>
          <FontAwesomeIcon className='bgicon' icon={faMobileAlt} size='2x' />
        </div>
        <div className='myCarousel'>
          <h3>Create an amazing app</h3>
          <p>I want to gain enough skills to create a useful and entertaining app.</p>
        </div>
      </>
      <>
        <div className='bgcircle'>
          <FontAwesomeIcon className='bgicon' icon={faLightbulb} size='2x' />
        </div>
        <div className='myCarousel'>
          <h3>Learn new skills</h3>
          <p>I am always on the hunt for new knowledge and opportunities to expand what i know.</p>
        </div>
      </>
    </Carousel>
  );
};

export default InterestsCarousel;
