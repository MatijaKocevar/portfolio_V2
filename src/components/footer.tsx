import React, { useState } from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from 'react-share';
import { Link } from 'react-scroll';
import './styles/footer.scss';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
  const startingOffset = window.innerWidth < 1199 ? -61 : -86;
  const [offset, setOffset] = useState(startingOffset);

  window.addEventListener('resize', () => {
    setOffset(window.innerWidth < 1199 ? -61 : -86);
  });

  return (
    <Container className='footer-container'>
      <Row className='basic-info'>
        <Col className='basic-info-column'>
          <a href='tel:+38670892271'>070 892 271</a>
          <a href='mailto: matija.kocev@gmail.com'>matija.kocev@gmail.com</a>
          <p>Ljubljana, Slovenia</p>
        </Col>
      </Row>
      <Row className='footer-navigation-links'>
        <Col className='footer-navigation-left' lg={6}>
          <Link smooth={true} to='about-me' offset={offset} ignoreCancelEvents={true} href='#'>
            About Me
          </Link>
          <Link smooth={true} to='education' offset={offset} ignoreCancelEvents={true} href='#'>
            Education
          </Link>
          <Link smooth={true} to='experience' offset={offset} ignoreCancelEvents={true} href='#'>
            Experience
          </Link>
        </Col>
        <Col className='footer-navigation-right' lg={6}>
          <Link smooth={true} to='skills' offset={offset} ignoreCancelEvents={true} href='#'>
            Skills
          </Link>
          <Link smooth={true} to='projects' offset={offset} ignoreCancelEvents={true} href='#'>
            Projects
          </Link>
          <Link smooth={true} to='interests' offset={offset} ignoreCancelEvents={true} href='#'>
            Interests
          </Link>
        </Col>
      </Row>
      <Row className='footer-social-links-wrapper'>
        <Col className='footer-social-links' lg={12}>
          <FacebookShareButton url={'https://matijakocevar.github.io/myPortfolio/'} quote={"Matija Kočevar's portfolio"}>
            <FacebookIcon className='mx-3' size={36} />
          </FacebookShareButton>
          <TwitterShareButton url={'https://matijakocevar.github.io/myPortfolio/'}>
            <TwitterIcon className='mx-3' size={36} />
          </TwitterShareButton>
          <RedditShareButton url={'https://matijakocevar.github.io/myPortfolio/'}>
            <RedditIcon className='mx-3' size={36} />
          </RedditShareButton>
          <LinkedinShareButton url={'https://matijakocevar.github.io/myPortfolio/'}>
            <LinkedinIcon className='mx-3' size={36} />
          </LinkedinShareButton>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
