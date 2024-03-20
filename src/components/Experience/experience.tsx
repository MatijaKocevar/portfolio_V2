import { Col, Container, Row } from "react-bootstrap";
import "./experience.scss";
import { useContext } from "react";
import { TranslationContext } from "../../translations/components/TranslationContext";
import SvgIcon from "../Shared/SvgIcon/SvgIcon";

const Education = () => {
    const { getTranslation } = useContext(TranslationContext);

    return (
        <Container id='experience' className='experience'>
            <Row className='heading-row'>
                <h1>{getTranslation("Navigation_Experience")}</h1>
            </Row>
            <Row className='timeline-wrapper'>
                {/* - */}
                <Row className='experience-section experience-section-right'>
                    <Col className='timeline-block tech_used' xs={1} sm={1} md={1} lg={6}>
                        <div className='tech_used-icons'>
                            <SvgIcon title='Excel' iconName='excel' svgProp={{ className: "tech-icon" }} />
                            <SvgIcon title='Sheets' iconName='sheets' svgProp={{ className: "tech-icon" }} />
                        </div>
                    </Col>
                    <Col className='timeline-block timeline-block-right' xs={11} sm={11} md={11} lg={6}>
                        <div className='line-wrapper'>
                            <div className='line'></div>
                            <div className='marker'></div>
                        </div>
                        <div className='timeline-content'>{getTranslation("Experience_Mimovrste")}</div>
                    </Col>
                </Row>
                {/* - */}
                <Row className='experience-section'>
                    <Col className='timeline-block timeline-block-left' xs={11} sm={11} md={11} lg={6}>
                        <div className='line-wrapper'>
                            <div className='line'></div>
                            <div className='marker'></div>
                        </div>
                        <div className='timeline-content'>{getTranslation("Education_Personal")}</div>
                    </Col>
                    <Col className='timeline-block tech_used' xs={1} sm={1} md={1} lg={6}>
                        <div className='tech_used-icons'>
                            <SvgIcon title='Html & Css' iconName='htmlCss' svgProp={{ className: "tech-icon" }} />
                            <SvgIcon title='Microsoft Sql server' iconName='sql' svgProp={{ className: "tech-icon" }} />
                            <SvgIcon title='Javascript' iconName='javascript' svgProp={{ className: "tech-icon" }} />
                            <SvgIcon title='.NET' iconName='dotNet' svgProp={{ className: "tech-icon" }} />
                        </div>
                    </Col>
                </Row>
                {/* - */}
                <Row className='experience-section experience-section-right'>
                    <Col className='timeline-block tech_used' xs={1} sm={1} md={1} lg={6}>
                        <div className='tech_used-icons'>
                            <SvgIcon title='Typescript' iconName='typescript' svgProp={{ className: "tech-icon" }} />
                            <SvgIcon title='Javascript' iconName='javascript' svgProp={{ className: "tech-icon" }} />
                            <SvgIcon title='Html & Css' iconName='htmlCss' svgProp={{ className: "tech-icon" }} />
                            <SvgIcon title='React' iconName='react' svgProp={{ className: "tech-icon" }} />
                            <SvgIcon title='Microsoft Sql server' iconName='sql' svgProp={{ className: "tech-icon" }} />
                            <SvgIcon title='.NET' iconName='dotNet' svgProp={{ className: "tech-icon" }} />
                            <SvgIcon title='Umbraco' iconName='umbraco' svgProp={{ className: "tech-icon" }} />
                        </div>
                    </Col>
                    <Col className='timeline-block timeline-block-right' xs={11} sm={11} md={11} lg={6}>
                        <div className='line-wrapper'>
                            <div className='line'></div>
                            <div className='marker'></div>
                        </div>
                        <div className='timeline-content'>{getTranslation("Experience_Agitavit")}</div>
                    </Col>
                </Row>
                {/* - */}
                <Row className='experience-section'>
                    <Col className='timeline-block timeline-block-left' xs={11} sm={11} md={11} lg={6}>
                        <div className='line-wrapper'>
                            <div className='line'></div>
                            <div className='marker'></div>
                        </div>
                        <div className='timeline-content'>{getTranslation("Experience_Dhimahi")}</div>
                    </Col>
                    <Col className='timeline-block tech_used' xs={1} sm={1} md={1} lg={6}>
                        <div className='tech_used-icons'>
                            <SvgIcon title='Typescript' iconName='typescript' svgProp={{ className: "tech-icon" }} />
                            <SvgIcon title='Javascript' iconName='javascript' svgProp={{ className: "tech-icon" }} />
                            <SvgIcon title='Html & Css' iconName='htmlCss' svgProp={{ className: "tech-icon" }} />
                            <SvgIcon title='Angular' iconName='angular' svgProp={{ className: "tech-icon" }} />
                            <SvgIcon title='Vue' iconName='vue' svgProp={{ className: "tech-icon" }} />
                            <SvgIcon title='Docker' iconName='docker' svgProp={{ className: "tech-icon" }} />
                            <SvgIcon title='Php Symfony' iconName='php' svgProp={{ className: "tech-icon" }} />
                        </div>
                    </Col>
                </Row>
                {/* - */}
                <Row className='experience-section experience-section-right'>
                    <Col className='timeline-block tech_used' xs={1} sm={1} md={1} lg={6}>
                        <div className='tech_used-icons'>
                            <div className='icon-divider'>
                                <SvgIcon title='Typescript' iconName='typescript' svgProp={{ className: "tech-icon" }} />
                                <SvgIcon title='Javascript' iconName='javascript' svgProp={{ className: "tech-icon" }} />
                                <SvgIcon title='Html & Css' iconName='htmlCss' svgProp={{ className: "tech-icon" }} />
                                <SvgIcon title='React' iconName='react' svgProp={{ className: "tech-icon" }} />
                                <SvgIcon title='.NET' iconName='dotNet' svgProp={{ className: "tech-icon" }} />
                            </div>
                            <div className='icon-divider'>
                                <SvgIcon title='Php Laravel' iconName='php' svgProp={{ className: "tech-icon" }} />
                                <SvgIcon title='Docker' iconName='docker' svgProp={{ className: "tech-icon" }} />
                                <SvgIcon title='Python' iconName='python' svgProp={{ className: "tech-icon" }} />
                                <SvgIcon title='Postgres' iconName='postgres' svgProp={{ className: "tech-icon" }} />
                                <SvgIcon title='MySql' iconName='mysql' svgProp={{ className: "tech-icon" }} />
                            </div>
                        </div>
                    </Col>
                    <Col className='timeline-block timeline-block-right' xs={11} sm={11} md={11} lg={6}>
                        <div className='line-wrapper'>
                            <div className='line'></div>
                            <div className='marker'></div>
                        </div>
                        <div className='timeline-content'>{getTranslation("Experience_Frodx")}</div>
                    </Col>
                </Row>
            </Row>
        </Container>
    );
};

export default Education;
