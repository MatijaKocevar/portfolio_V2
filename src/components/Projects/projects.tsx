import project1 from '../images/project1.png';
import project2 from '../images/project2.png';
import project3 from '../images/project3.png';
import woi from '../images/woi.png';
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';
import './styles/projects.scss';

const Projects = (props: TranslationProps) => {
  // Project 1
  const openPopupboxProject1 = () => {
    const content = (
      <>
        <img className='projects-image-popupbox' src={project1} alt='Online resume' />
        <p>My first webpage, made using ReactJS</p>
        <b>Link:</b>{' '}
        <button className='hyper-link' onClick={() => window.open('https://github.com/MatijaKocevar/myPortfolio')}>
          GitHub
        </button>
      </>
    );

    const config = {
      titleBar: {
        enable: true,
        text: 'Online resume',
      },
      fadeIn: true,
      fadeInSpeed: 500,
    };

    PopupboxManager.open({ content, config });
  };

  // Project 2
  const openPopupboxProject2 = () => {
    const content = (
      <>
        <img className='projects-image-popupbox' src={project2} alt='holidays calculator' />
        <p>A holiday calculator for Slovenian holidays. Made with .NET core and Vue JS</p>
        <b>Link:</b>{' '}
        <button className='hyper-link' onClick={() => window.open('https://github.com/MatijaKocevar/HolidaysApi')}>
          GitHub
        </button>
      </>
    );

    const config = {
      titleBar: {
        enable: true,
        text: 'Holidays calculator',
      },
      fadeIn: true,
      fadeInSpeed: 500,
    };

    PopupboxManager.open({ content, config });
  };

  // Project 3
  const openPopupboxProject3 = () => {
    const content = (
      <>
        <img className='projects-image-popupbox' src={project3} alt='...' />
        <p>
          An application to show differences between two base 64 encoded strings. Uses an SQL database to store data. Developed in .NET core and VUE
          JS.
        </p>
        <b>Link:</b>{' '}
        <button className='hyper-link' onClick={() => window.open('https://github.com/MatijaKocevar/diffs')}>
          GitHub
        </button>
      </>
    );

    const config = {
      titleBar: {
        enable: true,
        text: 'Diffing API',
      },
      fadeIn: true,
      fadeInSpeed: 500,
    };

    PopupboxManager.open({ content, config });
  };

  // Project 4
  const openPopupboxProject4 = () => {
    const content = (
      <>
        <img className='projects-image-popupbox' src={woi} alt='...' />
        <p>...</p>
        <b>Link:</b>{' '}
        <button className='hyper-link' onClick={() => window.open('https://github.com/MatijaKocevar')}>
          GitHub
        </button>
      </>
    );

    const config = {
      titleBar: {
        enable: true,
        text: '...',
      },
      fadeIn: true,
      fadeInSpeed: 500,
    };

    PopupboxManager.open({ content, config });
  };

  return (
    <div id='projects' className='projects-wrapper'>
      <div className='container'>
        <h1 className='text-uppercase text-center'>projects</h1>
        <div className='image-box-wrapper row'>
          <div className='col-lg-3 col-md-6 col-sm-6' onClick={openPopupboxProject1}>
            <div className='project-wrapper'>
              <img className='projects-image' src={project1} alt='projects webpage' />
              <FontAwesomeIcon className='projects-icon' icon={faSearchPlus} />
              <div className='overlay'></div>
            </div>
            <h3>Online resume</h3>
          </div>
          {/* - */}
          <div className='col-lg-3 col-md-6 col-sm-6' onClick={openPopupboxProject2}>
            <div className='project-wrapper'>
              <img className='projects-image' src={project2} alt='Project 2...' />
              <FontAwesomeIcon className='projects-icon' icon={faSearchPlus} />
              <div className='overlay'></div>
            </div>
            <h3>Holidays calculator</h3>
          </div>
          {/* - */}
          <div className='col-lg-3 col-md-6 col-sm-6' onClick={openPopupboxProject3}>
            <div className='project-wrapper'>
              <img className='projects-image' src={project3} alt='Project 3...' />
              <FontAwesomeIcon className='projects-icon' icon={faSearchPlus} />
              <div className='overlay'></div>
            </div>
            <h3>Diffing API</h3>
          </div>
          {/* - */}
          <div className='col-lg-3 col-md-6 col-sm-6' onClick={openPopupboxProject4}>
            <div className='project-wrapper'>
              <img className='projects-image' src={woi} alt='Project 4...' />
              <FontAwesomeIcon className='projects-icon' icon={faSearchPlus} />
              <div className='overlay'></div>
            </div>
            <h3>...</h3>
          </div>
        </div>
      </div>
      <PopupboxContainer />
    </div>
  );
};

export default Projects;
