import React, { useState } from 'react';
import './styles/navbar.scss';
import '../App.scss';
import { Link } from 'react-scroll';
import logo from '../images/logo.png';

const NavBar = () => {
  // let startingToggle = window.innerWidth < 1199 ? 'collapse' : 'keep'

  const [offset, setOffset] = useState(-57.5);

  return (
    <nav className='nav'>
      <div className='nav-items'>
        <Link
          smooth={true}
          to='about-me'
          className='nav-item'
          offset={offset}
          href='#'
        >
          about me
        </Link>
        <Link
          smooth={true}
          to='education'
          className='nav-item'
          offset={offset}
          href='#'
        >
          education
        </Link>
        <Link
          smooth={true}
          to='experience'
          className='nav-item'
          offset={offset}
          href='#'
        >
          experience
        </Link>
        <Link
          smooth={true}
          to='skills'
          className='nav-item'
          offset={offset}
          href='#'
        >
          skills
        </Link>
        <a href='#' className='nav-item'>
          item5
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
