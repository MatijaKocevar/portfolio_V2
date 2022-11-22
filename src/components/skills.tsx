import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import {
  faTable,
  faPaintBrush,
  faDesktop,
  faFileCode,
} from '@fortawesome/free-solid-svg-icons';
import './styles/skills.scss';

const Service = () => {
  return (
    <div id='skills' className='skills'>
      <h1 className='heading'>Skills</h1>
      <div className='container'>
        <div className='box'>
          <div className='circle'>
            <FontAwesomeIcon className='icon' icon={faDesktop} size='2x' />
          </div>
          <h3>PC & Mobile repair</h3>
          <p>Harware and software configuring, problem solving, tech support</p>
        </div>
        {/* - */}
        <div className='box'>
          <div className='circle'>
            <FontAwesomeIcon className='icon' icon={faPaintBrush} size='2x' />
          </div>
          <h3>Design</h3>
          <p>Basic skills in Adobe Illustrator, Photoshop & Premiere</p>
        </div>
        {/* - */}
        <div className='box'>
          <div className='circle'>
            <FontAwesomeIcon className='icon' icon={faTable} size='2x' />
          </div>
          <h3>Data visualising</h3>
          <p>
            Advanced knowledge of Microsoft Excel and a good grasp of how to
            display important data.
          </p>
        </div>
        {/* - */}
        <div className='box'>
          <div className='circle'>
            <FontAwesomeIcon className='icon' icon={faFileCode} size='2x' />
          </div>
          <h3>Web development</h3>
          <p>Basic HTML, CSS, Javascript, C#, .NET core</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
