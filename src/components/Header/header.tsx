import "./header.scss";
import { Col, Container } from "react-bootstrap";
import Bio from "./Section/bio";
import Showcase from "./Section/showcase";

const Header = () => {
    return (
        <Container id='home' className='header-wrapper'>
            <Col>
                <Bio />
            </Col>
            <Col>
                <Showcase />
            </Col>
        </Container>
    );
};

export default Header;
