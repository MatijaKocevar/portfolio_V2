import { Col, Container, Row } from 'react-bootstrap';
import './experience.scss';
import { TranslationProps } from '../Types/types';

const Education = (props: TranslationProps) => {
  return (
    <Container id='timeline' className='experience'>
      <Row className='heading-row'>
        <h1>{props.getTranslation('Navigation_Experience')}</h1>
      </Row>
      <Row className='timeline-wrapper'>
        {/* - */}
        <Row>
          <Col xs={0} sm={0} md={0} lg={6}></Col>
          <Col className='timeline-block timeline-block-right' xs={12} sm={12} md={12} lg={6}>
            <div className='line-wrapper'>
              <div className='line'></div>
              <div className='marker'></div>
            </div>
            <div className='timeline-content'>
              <h3>Data visualisation in Microsoft Excel and Google Sheets</h3>
              <h5>2019 - 2020 / Mimovrste d.o.o.</h5>
              <p>
                Created semi-automated Excel documents for sales & stock overview connected with internal ERP system. Developed an automated system of
                price checking using Google App Scripts & Sheets.
              </p>
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
              <h3>Created first API</h3>
              <h5>2021 / Personal</h5>
              <p>Developed with .NET core & Vue JS</p>
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
              <h3>Created first webpage</h3>
              <h5>2021 / Personal</h5>
              <p>Developed with React JS & Bootstrap 4.</p>
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
              <h3>Software developer - Agitavit Solutions d.o.o.</h3>
              <h5>2021 - current / Employment</h5>
              <p>ReactTS, .NET 6, Umbraco, Sql server, jQuery</p>
            </div>
          </Col>
          <Col xs={0} sm={0} md={0} lg={6}></Col>
        </Row>
      </Row>
    </Container>
  );
};

export default Education;
