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
import SnakeGame from "./components/SnakeGame/SnakeGame";

const App = () => {
	return (
		<>
			<Row>
				<NavBar />
			</Row>
			<Row>
				<Header />
			</Row>
			<Row>
				<AboutMe />
			</Row>
			<Row>
				<Education />
			</Row>
			<Row>
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
			</Row>
			<Row>
				<Footer />
			</Row>
		</>
	);
};

export default App;
