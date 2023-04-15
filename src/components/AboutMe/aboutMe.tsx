import { createElement } from 'react';
import author from '../../images/me.jpg';
import { TranslationProps } from '../Types/types';
import './aboutMe.scss';
import { Col, Container, Row } from 'react-bootstrap';

const AboutMe = (props: TranslationProps) => {
  return (
    <Container id='about-me' className='about'>
      <Row className='heading-row'>
        <h1>{props.getTranslation('Navigation_AboutMe')}</h1>
      </Row>
      <Row className='about-content'>
        <Col className='photo' xs={12} sm={12} md={12} lg={5}>
          <img className='profile-img' src={author} alt='author' />
        </Col>
        <Col className='description' xs={12} sm={12} md={12} lg={7}>
          {props.getTranslation('AboutMe_Bio')}
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
