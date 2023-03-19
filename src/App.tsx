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

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <AboutMe />
      <Education />
      <Experience />
      <Skills />
      {/* <Projects /> */}
      <Interests />
      <Footer />
    </>
  );
}

export default App;
