import { forwardRef, useContext } from "react";
import InterestsCarousel from "./interestsCarousel";
import "./interests.scss";
import { Container, Row } from "react-bootstrap";
import { TranslationContext } from "../../translations/components/TranslationContext";

const Interests = forwardRef<HTMLDivElement>((_, ref) => {
    const { getTranslation } = useContext(TranslationContext);

    return (
        <Container id='interests' className='interests' ref={ref}>
            <Row className='heading-row'>
                <h1>{getTranslation("Navigation_Interests")}</h1>
            </Row>
            <Row>
                <div className='interests-content'>
                    <InterestsCarousel />
                </div>
            </Row>
        </Container>
    );
});

export default Interests;
