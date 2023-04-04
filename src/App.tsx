import './App.scss';
import React from 'react';
import AboutMe from './components/aboutMe';
import Education from './components/education';
import Header from './components/header';
import NavBar from './components/navbar';
import Experience from './components/experience';
import Skills from './components/skills';
import Projects from './components/projects';
import Interests from './components/interests';
import Footer from './components/footer';
import { Container, Row } from 'react-bootstrap';

function App() {
  return (
    <>
      <NavBar />
      <Row>
        <Header />
      </Row>
      <Row>
        <AboutMe />
      </Row>
      <Row>
        <Education />
      </Row>
      {/* <Row>
        <Experience />
      </Row>
      <Row>
        <Skills />
      </Row>
      <Row>
        <Projects />
      </Row>
      <Row>
        <Interests />
      </Row> */}
      <Row>
        <Footer />
      </Row>
    </>
  );
}

export default App;
