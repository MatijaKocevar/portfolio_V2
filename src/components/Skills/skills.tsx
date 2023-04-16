import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTable, faPaintBrush, faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons';
import './skills.scss';
import { Col, Container, Row } from 'react-bootstrap';
import { TranslationProps } from '../Types/types';

const Service = (props: TranslationProps) => {
  return (
    <Container id='skills' className='skills'>
      <Row className='heading-row'>
        <h1>{props.getTranslation('Navigation_Skills')}</h1>
      </Row>
      <Row>
        {/* - */}
        <Col lg={3} md={6} sm={6} xs={12}>
          <div className='box'>
            <div className='circle'>
              <FontAwesomeIcon className='icon' icon={faFileCode} size='2x' />
            </div>
            <h3>Web development</h3>
            <p>React, Typescript, Vue, Javascript, .NET, SQL SERVER, Umbraco</p>
          </div>
        </Col>
        {/* - */}
        <Col lg={3} md={6} sm={6} xs={12}>
          <div className='box'>
            <div className='circle'>
              <FontAwesomeIcon className='icon' icon={faPaintBrush} size='2x' />
            </div>
            <h3>Design</h3>
            <p>Basic skills in Adobe Illustrator, Photoshop & Premiere</p>
          </div>
        </Col>
        {/* - */}
        <Col lg={3} md={6} sm={6} xs={12}>
          <div className='box'>
            <div className='circle'>
              <FontAwesomeIcon className='icon' icon={faTable} size='2x' />
            </div>
            <h3>Data visualising</h3>
            <p>Advanced knowledge of Microsoft Excel and a good grasp of how to display important data.</p>
          </div>
        </Col>
        {/* - */}
        <Col lg={3} md={6} sm={6} xs={12}>
          <div className='box'>
            <div className='circle'>
              <FontAwesomeIcon className='icon' icon={faDesktop} size='2x' />
            </div>
            <h3>PC & Mobile repair</h3>
            <p>Harware and software configuring, problem solving, tech support</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Service;
