import project1 from '../../images/project1.png';
import project2 from '../../images/project2.png';
import project3 from '../../images/project3.png';
import woi from '../../images/woi.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import './projects.scss';
import { TranslationProps } from '../Types/types';
import { useState } from 'react';
import PopupBox from '../Shared/PopupBox/PopupBox';
import { Col, Container, Row } from 'react-bootstrap';

const Projects = (props: TranslationProps) => {
  const [showPopupResume, setShowPopupResume] = useState(false);
  const [showPopupHolidays, setShowPopupHolidays] = useState(false);
  const [showPopupDiffing, setShowPopupDiffing] = useState(false);
  const [showPopupWOI, setShowPopupWOI] = useState(false);

  const resumeContent = (
    <>
      <h3>Online Resume</h3>
      <p>This is a popup box!This is a popup box!This is a popup box!This is a popup box!This is a popup box!This is a popup box!</p>
    </>
  );
  const holidayContent = (
    <>
      <h3>Holidays calculator</h3>
      <p>This is a popup box!This is a popup box!This is a popup box!This is a popup box!This is a popup box!This is a popup box!</p>
    </>
  );
  const diffingContent = (
    <>
      <h3>Diffing API</h3>
      <p>This is a popup box!This is a popup box!This is a popup box!This is a popup box!This is a popup box!This is a popup box!</p>
    </>
  );
  const WOIContent = (
    <>
      <h3>WORKING ON IT</h3>
      <p>This is a popup box!This is a popup box!This is a popup box!This is a popup box!This is a popup box!This is a popup box!</p>
    </>
  );

  return (
    <Container className='projects'>
      <Row className='heading-row'>
        <h1 className=''>projects</h1>
      </Row>
      {showPopupResume && <PopupBox content={resumeContent} onClose={() => setShowPopupResume(false)} />}
      {showPopupHolidays && <PopupBox content={holidayContent} onClose={() => setShowPopupHolidays(false)} />}
      {showPopupDiffing && <PopupBox content={diffingContent} onClose={() => setShowPopupDiffing(false)} />}
      {showPopupWOI && <PopupBox content={WOIContent} onClose={() => setShowPopupWOI(false)} />}
      <Row>
        <Col lg={3} md={12} sm={12} xs={12} onClick={() => setShowPopupResume(true)}>
          <div className='project-wrapper'>
            <img className='project-image' src={project1} alt='project webpage' />
            <FontAwesomeIcon className='project-icon' icon={faSearchPlus} />
            <div className='overlay'></div>
            <h3>Online resume</h3>
          </div>
        </Col>
        {/* - */}
        <Col lg={3} md={12} sm={12} xs={12} onClick={() => setShowPopupHolidays(true)}>
          <div className='project-wrapper'>
            <img className='project-image' src={project2} alt='Project 2...' />
            <FontAwesomeIcon className='project-icon' icon={faSearchPlus} />
            <div className='overlay'></div>
            <h3>Holidays calculator</h3>
          </div>
        </Col>
        {/* - */}
        <Col lg={3} md={12} sm={12} xs={12} onClick={() => setShowPopupDiffing(true)}>
          <div className='project-wrapper'>
            <img className='project-image' src={project3} alt='Project 3...' />
            <FontAwesomeIcon className='project-icon' icon={faSearchPlus} />
            <div className='overlay'></div>
            <h3>Diffing API</h3>
          </div>
        </Col>
        {/* - */}
        <Col lg={3} md={12} sm={12} xs={12} onClick={() => setShowPopupWOI(true)}>
          <div className='project-wrapper'>
            <img className='project-image' src={woi} alt='Project 4...' />
            <FontAwesomeIcon className='project-icon' icon={faSearchPlus} />
            <div className='overlay'></div>
            <h3>...</h3>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
