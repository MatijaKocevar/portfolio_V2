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
	// 	<div className="page-container">
    //   <div className="section1">
	// 			{/* Content for section 1 */}
	// 			<Bio></Bio>
        
    //   </div>
    //   <div className="section2">
	// 			{/* Content for section 2 */}
	// 			<Showcase></Showcase>
        
    //   </div>
    // </div>
	);
};

export default Header;