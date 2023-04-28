import { useContext, useRef, useState } from 'react';
import './navbar.scss';
import { Link } from 'react-scroll';
import logo from '../../images/logo.png';
import ToggleSwitch from '../Shared/ToogleSwitch/ToggleSwitch';
import { TranslationContext } from '../../translations/components/TranslationContext';

const NavBar = () => {
  const { setLanguage, getTranslation } = useContext(TranslationContext);

  const startingOffset = -66;
  const startingToggle = window.innerWidth < 1199 ? 'collapse' : 'keep';
  const [offset, setOffset] = useState(startingOffset);
  const [toggle, setToggle] = useState(startingToggle);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  window.addEventListener('resize', () => {
    setOffset(-66);
    setToggle(window.innerWidth < 1199 ? 'collapse' : 'keep');
  });

  const onLanguageChange = (language: string) => {
    setLanguage(language);
  };

  const test = getTranslation('Navigation_AboutMe');

  return (
    <nav
      className='navbar fixed-top navbar-expand-lg navbar-dark bg-dark p-2'
      onBlur={() => {
        console.log(hamburgerRef.current?.ariaExpanded);
        // if (hamburgerRef.current?.ariaExpanded === 'true') hamburgerRef.current?.click();
      }}
    >
      <Link smooth={true} to='home' className='navbar-brand' href='#' duration={2}>
        <img className='logo' src={logo} alt='logo' />
      </Link>
      <button
        id='navbar-toggler'
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarText'
        aria-controls='navbarText'
        aria-expanded='false'
        aria-label='Toggle navigation'
        ref={hamburgerRef}
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarText'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link
              smooth={true}
              to='about-me'
              offset={offset}
              duration={2}
              ignoreCancelEvents={true}
              className='nav-link'
              href='#'
              data-toggle={toggle}
              data-target='#navbarText'
              // onClick={() => hamburgerRef.current?.click()}
            >
              {getTranslation('Navigation_AboutMe')}
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              smooth={true}
              to='education'
              offset={offset}
              duration={2}
              ignoreCancelEvents={true}
              className='nav-link'
              href='#'
              data-toggle={toggle}
              data-target='#navbarText'
              // onClick={() => hamburgerRef.current?.click()}
            >
              {getTranslation('Navigation_Education')}
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              smooth={true}
              to='experience'
              offset={offset}
              duration={2}
              ignoreCancelEvents={true}
              className='nav-link'
              href='#'
              data-toggle={toggle}
              data-target='#navbarText'
              // onClick={() => hamburgerRef.current?.click()}
            >
              {getTranslation('Navigation_Experience')}
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              smooth={true}
              to='skills'
              offset={offset}
              duration={2}
              ignoreCancelEvents={true}
              className='nav-link'
              href='#'
              data-toggle={toggle}
              data-target='#navbarText'
              // onClick={() => hamburgerRef.current?.click()}
            >
              {getTranslation('Navigation_Skills')}
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              smooth={true}
              to='projects'
              offset={offset}
              duration={2}
              ignoreCancelEvents={true}
              className='nav-link'
              href='#'
              data-toggle={toggle}
              data-target='#navbarText'
              // onClick={() => hamburgerRef.current?.click()}
            >
              {getTranslation('Navigation_Projects')}
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              smooth={true}
              to='interests'
              offset={offset}
              duration={2}
              ignoreCancelEvents={true}
              className='nav-link'
              href='#'
              data-toggle={toggle}
              data-target='#navbarText'
              // onClick={() => hamburgerRef.current?.click()}
            >
              {getTranslation('Navigation_Interests')}
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              smooth={true}
              to='contacts'
              offset={offset}
              duration={2}
              ignoreCancelEvents={true}
              className='nav-link'
              href='#'
              data-toggle={toggle}
              data-target='#navbarText'
              // onClick={() => hamburgerRef.current?.click()}
            >
              {getTranslation('Navigation_ContactMe')}
            </Link>
          </li>
        </ul>
        <div className='language-toggle'>
          <ToggleSwitch onChange={onLanguageChange} language='en' />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
