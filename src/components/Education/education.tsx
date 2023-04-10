import { Col, Container, Row } from 'react-bootstrap';
import './education.scss';

const Education = (props: TranslationProps) => {
  return (
    <Container id='timeline' className='education'>
      <Row className='heading-row'>
        <h1>{props.getTranslation('Navigation_Education')}</h1>
      </Row>
      <Row className='timeline-wrapper'>
        {/* - */}
        <Row>
          <Col className='timeline-block timeline-block-left' xs={12} sm={12} md={12} lg={6}>
            <div className='line-wrapper'>
              <div className='line'></div>
              <div className='marker'></div>
            </div>
            <div className='timeline-content'>
              <h3>Electrotechnician of computer science</h3>
              <h5>2004 - 2008 / High school (.V)</h5>
              <p>Gained basic programming skills in C++, HTML, CSS. </p>
            </div>
          </Col>
          <Col xs={0} sm={0} md={0} lg={6}></Col>
        </Row>
        {/* - */}
        <Row>
          <Col xs={0} sm={0} md={0} lg={6}></Col>
          <Col className='timeline-block timeline-block-right' xs={12} sm={12} md={12} lg={6}>
            <div className='line-wrapper'>
              <div className='line'></div>
              <div className='marker'></div>
            </div>
            <div className='timeline-content'>
              <h3>Computer science and information technologies</h3>
              <h5>2008 - 2011 / College (.VI) - unfinished</h5>
              <p>Gained knowledge of Linux Shell, and furthered skills in C++, HTML and CSS.</p>
            </div>
          </Col>
        </Row>
        {/* - */}
        <Row>
          <Col className='timeline-block timeline-block-left' xs={12} sm={12} md={12} lg={6}>
            <div className='line-wrapper'>
              <div className='line'></div>
              <div className='marker'></div>
            </div>
            <div className='timeline-content'>
              <h3>Learning front-end & back-end development</h3>
              <h5>2020 - 2021 / Personal</h5>
              <p>HTML, CSS, SQL, React JS, Vue JS, Node JS, .NET core, C#</p>
            </div>
          </Col>
          <Col xs={0} sm={0} md={0} lg={6}></Col>
        </Row>
      </Row>
    </Container>
  );
};

export default Education;
