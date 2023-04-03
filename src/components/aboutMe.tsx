import author from '../images/me.jpg';
import './styles/aboutMe.scss';
import { Col, Container, Row } from 'react-bootstrap';

const AboutMe = () => {
  return (
    <Container id='about-me' className='about'>
      <Row className='heading-row'>
        <h1>about me</h1>
      </Row>
      <Row className='about-content'>
        <Col className='photo' lg={5}>
          <img className='profile-img bg-image' src={author} alt='author' />
        </Col>
        <Col className='description' lg={7}>
          <p>
            Hello! I am Matija. I am trying to become a web developer. This is my first webpage which I created to serve as my portfolio. I have spent
            around 7 years working in sales, where I gained really good communication & organization skills. Most of my free time I&apos;ve spent
            learning about new techonologies and the last year or so, learning to become a web developer. My focus has been mainly on the frontend,
            but I eventually want to become a fullstack developer. After school I quickly started working, but I never managed to get a job in the IT
            field. I now realize this is the reason I never really enjoyed any of my jobs and have spent the last year trying to change that. I am
            looking for a entry level position to help me hone my skills to become the best darn tootin programmer this side of the keyboard.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
