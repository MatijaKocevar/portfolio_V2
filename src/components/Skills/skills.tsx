import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTable, faPaintBrush, faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons';
import './skills.scss';
import { Container, Row } from 'react-bootstrap';

const Service = (props: TranslationProps) => {
  return (
    <Container id='skills' className='skills'>
      <Row className='heading-row'>
        <h1>{props.getTranslation('Navigation_Skills')}</h1>
      </Row>
      <Row className='skills-container'>
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
          <p>Advanced knowledge of Microsoft Excel and a good grasp of how to display important data.</p>
        </div>
        {/* - */}
        <div className='box'>
          <div className='circle'>
            <FontAwesomeIcon className='icon' icon={faFileCode} size='2x' />
          </div>
          <h3>Web development</h3>
          <p>Basic HTML, CSS, Javascript, C#, .NET core</p>
        </div>
      </Row>
    </Container>
  );
};

export default Service;
