import { useContext } from "react";
import "./aboutMe.scss";
import { Col, Container, Row } from "react-bootstrap";
import { TranslationContext } from "../../translations/components/TranslationContext";

const AboutMe = () => {
    const { getTranslation } = useContext(TranslationContext);

    return (
        <Container id='about-me' className='about'>
            <Row className='heading-row'>
                <h1>{getTranslation("Navigation_AboutMe")}</h1>
            </Row>
            <Row className='about-content'>
                <Col className='description' xs={12} sm={12} md={12} lg={12}>
                    {getTranslation("AboutMe_Bio")}
                </Col>
            </Row>
        </Container>
    );
};

export default AboutMe;
