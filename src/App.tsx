import "./App.scss";
import { Row } from "react-bootstrap";
import NavBar from "./components/Navbar/navbar";
import Header from "./components/Header/header";
import AboutMe from "./components/AboutMe/aboutMe";
import Education from "./components/Education/education";
import Experience from "./components/Experience/experience";
import Footer from "./components/Footer/footer";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/projects";
import Interests from "./components/Interests/interests";
import { useEffect, useRef } from "react";

const App = () => {
	const headerRef = useRef<HTMLDivElement>(null);
	const aboutMeRef = useRef<HTMLDivElement>(null);
	const educationRef = useRef<HTMLDivElement>(null);
	const experienceRef = useRef<HTMLDivElement>(null);
	const skillsRef = useRef<HTMLDivElement>(null);
	const projectsRef = useRef<HTMLDivElement>(null);
	const interestsRef = useRef<HTMLDivElement>(null);

	const sectionRefs = [headerRef, aboutMeRef, educationRef, experienceRef, skillsRef, projectsRef, interestsRef];

	return (
		<>
			<Row>
				<NavBar sectionRefs={sectionRefs} />
			</Row>
			<Row>
				<Header ref={headerRef} />
			</Row>
			<Row>
				<AboutMe ref={aboutMeRef} />
			</Row>
			<Row>
				<Education ref={educationRef} />
			</Row>
			<Row>
				<Experience ref={experienceRef} />
			</Row>
			<Row>
				<Skills ref={skillsRef} />
			</Row>
			<Row>
				<Projects ref={projectsRef} />
			</Row>
			<Row>
				<Interests ref={interestsRef} />
			</Row>
			<Row>
				<Footer />
			</Row>
		</>
	);
};

export default App;
