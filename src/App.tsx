import './App.scss';
import React from 'react';
import AboutMe from './components/aboutMe';
import Education from './components/education';
import Header from './components/header';
import NavBar from './components/navbar';
import Experience from './components/experience';
import Skills from './components/skills';

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <AboutMe />
      <Education />
      <Experience />
      <Skills />
    </>
  );
}

export default App;
