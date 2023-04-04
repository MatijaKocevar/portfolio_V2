import React from 'react';
import './styles/experience.scss';
import { Container, Row, Col } from 'react-bootstrap';

const Experience = () => {
  return (
    <Container id='timeline' className='experience'>
      <Row className='heading-row'>
        <h1>education</h1>
      </Row>
      <Row className='timeline-wrapper'>
        <Col className='timeline-block timeline-block-left' lg={6}>
          <div className='marker'></div>
          <div className='timeline-content'>
            <h3>Data visualisation in Microsoft Excel and Google Sheets</h3>
            <h5>2019 - 2020 / Mimovrste d.o.o.</h5>
            <p>
              Created semi-automated Excel documents for sales & stock overview connected with internal ERP system. Developed an automated system of
              price checking using Google App Scripts & Sheets.
            </p>
          </div>
        </Col>
        <Col lg={6}></Col>
        {/* - */}
        <Col lg={6}></Col>
        <Col className='timeline-block timeline-block-right' lg={6}>
          <div className='marker'></div>
          <div className='timeline-content'>
            <h3>Created first API</h3>
            <h5>2021 / Personal</h5>
            <p>Developed with .NET core & Vue JS</p>
          </div>
        </Col>
        {/* - */}
        <Col className='timeline-block timeline-block-left' lg={6}>
          <div className='marker'></div>
          <div className='timeline-content'>
            <h3>Created first webpage</h3>
            <h5>2021 / Personal</h5>
            <p>Developed with React JS & Bootstrap 4.</p>
          </div>
        </Col>
        <Col lg={6}></Col>
        {/* - */}
        <Col lg={6}></Col>
        <Col className='timeline-block timeline-block-right' lg={6}>
          <div className='marker'></div>
          <div className='timeline-content'>
            <h3>Software developer - Agitavit Solutions d.o.o.</h3>
            <h5>2021 - current / Employment</h5>
            <p>ReactTS, .NET 6, Umbraco, Sql server, jQuery</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Experience;
