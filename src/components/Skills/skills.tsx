import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTable, faPaintBrush, faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons';
import './skills.scss';
import { Col, Container, Row } from 'react-bootstrap';
import { TranslationProps } from '../Types/types';
import FlipBox from '../Shared/FlipBox/FlipBox';
import { useContext } from 'react';
import { TranslationContext } from '../../translations/components/TranslationContext';

const Service = () => {
  const { getTranslation } = useContext(TranslationContext);

  return (
    <>
      <Container id='skills' className='skills'>
        <Row className='heading-row'>
          <h1>{getTranslation('Navigation_Skills')}</h1>
        </Row>
        <Row>
          {/* - */}
          <Col lg={3} md={6} sm={6} xs={12}>
            <FlipBox
              frontContent={
                <div className='box'>
                  <div className='circle'>
                    <FontAwesomeIcon className='icon' icon={faFileCode} size='2x' />
                  </div>
                  <h3>{getTranslation('Skills_WebDevelopment_Title')}</h3>
                  <p>{getTranslation('Skills_WebDevelopment')}</p>
                </div>
              }
              backContent={<div>Back</div>}
            />
          </Col>
          {/* - */}
          <Col lg={3} md={6} sm={6} xs={12}>
            <FlipBox
              frontContent={
                <div className='box'>
                  <div className='circle'>
                    <FontAwesomeIcon className='icon' icon={faPaintBrush} size='2x' />
                  </div>
                  <h3>{getTranslation('Skills_Design_Title')}</h3>
                  <p>Basic skills in Adobe Illustrator, Photoshop & Premiere</p>
                </div>
              }
              backContent={<div>Back</div>}
            />
          </Col>
          {/* - */}
          <Col lg={3} md={6} sm={6} xs={12}>
            <FlipBox
              frontContent={
                <div className='box'>
                  <div className='circle'>
                    <FontAwesomeIcon className='icon' icon={faTable} size='2x' />
                  </div>
                  <h3>{getTranslation('Skills_DataVisualising_Title')}</h3>
                  <p>Advanced knowledge of Microsoft Excel and a good grasp of how to display important data.</p>
                </div>
              }
              backContent={<div>Back</div>}
            />
          </Col>
          {/* - */}
          <Col lg={3} md={6} sm={6} xs={12}>
            <FlipBox
              frontContent={
                <div className='box'>
                  <div className='circle'>
                    <FontAwesomeIcon className='icon' icon={faDesktop} size='2x' />
                  </div>
                  <h3>{getTranslation('Skills_PcMobileRepair_Title')}</h3>
                  <p>Harware and software configuring, problem solving, tech support</p>
                </div>
              }
              backContent={<div>Back</div>}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Service;
