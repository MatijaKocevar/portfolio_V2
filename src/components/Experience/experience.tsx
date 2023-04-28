import { Col, Container, Row } from 'react-bootstrap';
import './experience.scss';
import { TranslationProps } from '../Types/types';
import { useContext } from 'react';
import { TranslationContext } from '../../translations/components/TranslationContext';

const Education = () => {
  const { getTranslation } = useContext(TranslationContext);

  return (
    <Container id='timeline' className='experience'>
      <Row className='heading-row'>
        <h1>{getTranslation('Navigation_Experience')}</h1>
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
            <div className='timeline-content'>{getTranslation('Experience_Mimovrste')}</div>
          </Col>
        </Row>
        {/* - */}
        <Row>
          <Col className='timeline-block timeline-block-left' xs={12} sm={12} md={12} lg={6}>
            <div className='line-wrapper'>
              <div className='line'></div>
              <div className='marker'></div>
            </div>
            <div className='timeline-content'>{getTranslation('Experience_Api')}</div>
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
            <div className='timeline-content'>{getTranslation('Experience_Webpage')}</div>
          </Col>
        </Row>
        {/* - */}
        <Row>
          <Col className='timeline-block timeline-block-left' xs={12} sm={12} md={12} lg={6}>
            <div className='line-wrapper'>
              <div className='line'></div>
              <div className='marker'></div>
            </div>
            <div className='timeline-content'>{getTranslation('Experience_Agitavit')}</div>
          </Col>
          <Col xs={0} sm={0} md={0} lg={6}></Col>
        </Row>
      </Row>
    </Container>
  );
};

export default Education;
