import author from '../../images/me.jpg';
import './aboutMe.scss';
import { Col, Container, Row } from 'react-bootstrap';

const AboutMe = (props: TranslationProps) => (
  <Container id='about-me' className='about'>
    <Row className='heading-row'>
      <h1>{props.getTranslation('Navigation_AboutMe')}</h1>
    </Row>
    <Row className='about-content'>
      <Col className='photo' xs={12} sm={12} md={12} lg={5}>
        <img className='profile-img' src={author} alt='author' />
      </Col>
      <Col className='description' xs={12} sm={12} md={12} lg={7}>
        <p>
          Hello and welcome to my portfolio page!
          <br />
          My name is Matija, and I am a passionate software developer with 2 years of experience in the industry.
          <br />
          <br />
          Before becoming a developer, I spent 7 years in sales, which helped me develop excellent communication and problem-solving skills.
          Throughout my career as a developer, I have worked on various projects, from small web applications to large-scale enterprise systems. I
          have extensive experience working with TypeScript, React, .NET, Umbraco, JavaScript, and Vue, and I like to think of myself as a
          jack-of-all-trades developer (but let&apos;s be honest, I&apos;m more like a master of some and a novice of others).
          <br />
          <br />
          One of my strengths as a software developer is my ability to analyze problems and provide innovative solutions. I enjoy working
          collaboratively with my team members to create software that is not only efficient but also user-friendly. I am also committed to writing
          clean, maintainable, and well-documented code (because let&apos;s face it, no one wants to inherit a mess of spaghetti code). In addition to
          my technical skills, I like to think I have a pretty good sense of humor (but I&apos;ll let you be the judge of that). When I&apos;m not
          coding, you can usually find me watching funny cat videos on YouTube or cracking terrible puns (I apologize in advance).
          <br />
          <br />
          Thank you for taking the time to visit my portfolio page. If you have any questions or would like to discuss a potential project (or share
          your favorite cat video), please feel free to contact me. I would be happy to chat with you!
        </p>
      </Col>
    </Row>
  </Container>
);

export default AboutMe;
