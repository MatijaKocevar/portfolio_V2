import { Col, Row } from "react-bootstrap";
import SvgIcon from "../../Shared/SvgIcon/SvgIcon";
import { useContext } from "react";
import { TranslationContext } from "../../../translations/components/TranslationContext";
import Author from "../../../images/me.jpg";
import "./bio.scss";

const Bio = () => {
    const { getTranslation } = useContext(TranslationContext);

    return (
        <Col className='main-info'>
            <Row className='heading-row photo-header'>
                <img className='profile-img' src={Author} alt='author' />
                <h1>{getTranslation("Header_Title")}</h1>
            </Row>
            <Row className='heading-row'>
                <h4>{getTranslation("Header_Subtitle")}</h4>
            </Row>
            <Row className='skill-icons-wrapper'>
                <h5 className='icon-heading'>{getTranslation("Header_Sub_Subtitle")}</h5>
                <Row className='skills-neka'>
                    <Col className='skill-icon'>
                        <SvgIcon iconName='javascript' svgProp={{ className: "skill-icon-svg" }} />
                        <span>Javascript</span>
                    </Col>
                    <Col className='skill-icon'>
                        <SvgIcon iconName='typescript' svgProp={{ className: "skill-icon-svg" }} />
                        <span>Typescript</span>
                    </Col>
                    <Col className='skill-icon'>
                        <SvgIcon iconName='dotNet' svgProp={{ className: "skill-icon-svg" }} />
                        <span>.NET(C#)</span>
                    </Col>
                    <Col className='skill-icon'>
                        <SvgIcon iconName='sql' svgProp={{ className: "skill-icon-svg" }} />
                        <span>SQL</span>
                    </Col>
                </Row>
            </Row>
        </Col>
    );
};

export default Bio;
