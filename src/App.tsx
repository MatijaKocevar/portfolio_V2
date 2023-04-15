import './App.scss';
import { Row } from 'react-bootstrap';
import NavBar from './components/Navbar/navbar';
import Header from './components/Header/header';
import AboutMe from './components/AboutMe/aboutMe';
import Education from './components/Education/education';
import Experience from './components/Experience/experience';
import Footer from './components/Footer/footer';
import Skills from './components/Skills/skills';
import Projects from './components/Projects/projects';

import { createElement, useState } from 'react';
import { getTranslations } from './translations/components/getTranslation';
import { Translation } from './components/Types/types';
import Interests from './components/Interests/interests';
import { parseStringToJSX } from './components/Shared/Utils/parseStringToJSX';

const containsHTML = (str: string) => /<[a-z][\s\S]*>/i.test(str);

const App = () => {
  const [translations, setTranslations] = useState<Translation[]>(getTranslations('en'));

  const getTranslation = (id: string) => {
    const matchingEl = translations.find((el) => el.id == id);

    if (matchingEl) {
      if (!containsHTML(matchingEl.message)) return matchingEl.message;
      else return parseStringToJSX(matchingEl.message);
    } else return 'N/A';
  };

  return (
    <>
      <Row>
        <NavBar getTranslation={getTranslation} setTranslations={setTranslations} />
      </Row>
      <Row>
        <Header getTranslation={getTranslation} />
      </Row>
      <Row>
        <AboutMe getTranslation={getTranslation} />
      </Row>
      <Row>
        <Education getTranslation={getTranslation} />
      </Row>
      <Row>
        <Experience getTranslation={getTranslation} />
      </Row>
      <Row>
        <Skills getTranslation={getTranslation} />
      </Row>
      <Row>
        <Projects getTranslation={getTranslation} />
      </Row>
      <Row>
        <Interests getTranslation={getTranslation} />
      </Row>
      <Row>
        <Footer getTranslation={getTranslation} />
      </Row>
    </>
  );
};

export default App;
