import "./App.scss";
import NavBar from "./components/Navbar/navbar";
import Header from "./components/Header/header";
import AboutMe from "./components/AboutMe/aboutMe";
import Education from "./components/Education/education";
import Experience from "./components/Experience/experience";
import Footer from "./components/Footer/footer";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/projects";
import Interests from "./components/Interests/interests";

const App = () => {
    return (
        <>
            <NavBar />
            <Header />
            <AboutMe />
            <Projects />
            <Education />
            <Experience />
            <Skills />
            <Interests />
            <Footer />
        </>
    );
};

export default App;
