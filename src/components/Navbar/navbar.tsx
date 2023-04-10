import { useState } from 'react';
import './navbar.scss';
import { Link } from 'react-scroll';
import logo from '../../images/logo.png';
import { Translation, getTranslations } from '../../translations/components/getTranslation';
import ToggleSwitch from '../Shared/ToogleSwitch/ToggleSwitch';

interface Props {
  getTranslation: (id: string) => string;
  setTranslations: React.Dispatch<React.SetStateAction<Translation[]>>;
}

const NavBar = (props: Props) => {
  const startingOffset = window.innerWidth < 1199 ? -61 : -86;
  const startingToggle = window.innerWidth < 1199 ? 'collapse' : 'keep';
  const [offset, setOffset] = useState(startingOffset);
  const [toggle, setToggle] = useState(startingToggle);

  window.addEventListener('resize', () => {
    setOffset(window.innerWidth < 1199 ? -61 : -86);
    setToggle(window.innerWidth < 1199 ? 'collapse' : 'keep');
  });

  const onLanguageChange = (language: string) => props.setTranslations(getTranslations(language));

  return (
    <nav className='navbar fixed-top navbar-expand-lg navbar-dark bg-dark p-2'>
      <Link smooth={true} to='home' className='navbar-brand' href='#'>
        <img className='logo' src={logo} alt='logo' />
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarText'
        aria-controls='navbarText'
        aria-expanded='false'
        aria-label='Toggle navigation'
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
              onClick={() => {
                console.log();
              }}
            >
              {props.getTranslation('Navigation_AboutMe')}
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
            >
              {props.getTranslation('Navigation_Education')}
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
            >
              {props.getTranslation('Navigation_Experience')}
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
            >
              {props.getTranslation('Navigation_Skills')}
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
            >
              {props.getTranslation('Navigation_Projects')}
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
            >
              {props.getTranslation('Navigation_Interests')}
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
            >
              {props.getTranslation('Navigation_ContactMe')}
            </Link>
          </li>
        </ul>
        {/* <button
          onClick={() => {
            );
            console;
          }}
        >
          Test
        </button> */}
        <div>
          <ToggleSwitch onChange={onLanguageChange} language='en' />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
