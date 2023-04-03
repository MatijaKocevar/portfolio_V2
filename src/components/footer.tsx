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
      <Row className='footer-row'>
        <Col className='basic-info-column' lg={4}>
          <a href='tel:+38670892271'>(+386) 070 892 271</a>
          <a href='mailto: matija.kocev@gmail.com'>matija.kocev@gmail.com</a>
          <p style={{ color: 'white' }}>Trzin, Slovenia</p>
        </Col>
        <Col className='footer-navigation-links' lg={4}>
          <Col className='footer-navigation-left'>
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
          <Col className='footer-navigation-right'>
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
        </Col>

        <Col className='footer-social-links' lg={4}>
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
