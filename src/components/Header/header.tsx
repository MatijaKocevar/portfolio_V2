import "./header.scss";
import { Container } from "react-bootstrap";
import Bio from "./Section/bio";
import Showcase from "./Section/showcase";

const Header = () => {
	return (
		<Container id='home' className='header-wrapper'>
			<Bio />
			<Showcase />
		</Container>
	);
};

export default Header;
