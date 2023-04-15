import React from 'react';
import InterestsCarousel from './interestsCarousel';
import './interests.scss';
import { TranslationProps } from '../Types/types';
import { Container, Row } from 'react-bootstrap';

const Interests = (props: TranslationProps) => {
  return (
    <Container id='interests' className='interests'>
      <Row className='heading-row'>
        <h1>{props.getTranslation('Navigation_Interests')}</h1>
      </Row>
      <Row>
        <div className='interests-content'>
          <InterestsCarousel />
        </div>
      </Row>
    </Container>
  );
};

export default Interests;
