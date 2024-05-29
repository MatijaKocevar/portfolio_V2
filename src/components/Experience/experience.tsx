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
                            <SvgIcon
                                title='Excel'
                                label='Excel'
                                iconName='excel'
                                svgProp={{ className: "tech-icon" }}
                                wrapperStyle='tech-icon-wrapper'
                            />
                            <SvgIcon
                                title='Sheets'
                                label='Sheets'
                                iconName='sheets'
                                svgProp={{ className: "tech-icon" }}
                                wrapperStyle='tech-icon-wrapper'
                            />
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
                            <SvgIcon
                                title='Html & Css'
                                label='Html & Css'
                                iconName='htmlCss'
                                svgProp={{ className: "tech-icon" }}
                                wrapperStyle='tech-icon-wrapper'
                            />
                            <SvgIcon
                                title='Microsoft Sql server'
                                label='Microsoft Sql server'
                                iconName='sql'
                                svgProp={{ className: "tech-icon" }}
                                wrapperStyle='tech-icon-wrapper'
                            />
                            <SvgIcon
                                title='Javascript'
                                label='Javascript'
                                iconName='javascript'
                                svgProp={{ className: "tech-icon" }}
                                wrapperStyle='tech-icon-wrapper'
                            />
                            <SvgIcon
                                title='.NET'
                                label='.NET'
                                iconName='dotNet'
                                svgProp={{ className: "tech-icon" }}
                                wrapperStyle='tech-icon-wrapper'
                            />
                        </div>
                    </Col>
                </Row>
                {/* - */}
                <Row className='experience-section experience-section-right'>
                    <Col className='timeline-block tech_used' xs={1} sm={1} md={1} lg={6}>
                        <div className='tech_used-icons'>
                            <SvgIcon
                                title='Typescript'
                                label='Typescript'
                                iconName='typescript'
                                svgProp={{ className: "tech-icon" }}
                                wrapperStyle='tech-icon-wrapper'
                            />
                            <SvgIcon
                                title='Javascript'
                                label='Javascript'
                                iconName='javascript'
                                svgProp={{ className: "tech-icon" }}
                                wrapperStyle='tech-icon-wrapper'
                            />
                            <SvgIcon
                                title='Html & Css'
                                label='Html & Css'
                                iconName='htmlCss'
                                svgProp={{ className: "tech-icon" }}
                                wrapperStyle='tech-icon-wrapper'
                            />
                            <SvgIcon
                                title='React'
                                label='React'
                                iconName='react'
                                svgProp={{ className: "tech-icon" }}
                                wrapperStyle='tech-icon-wrapper'
                            />
                            <SvgIcon
                                title='Microsoft Sql server'
                                label='Microsoft Sql server'
                                iconName='sql'
                                svgProp={{ className: "tech-icon" }}
                                wrapperStyle='tech-icon-wrapper'
                            />
                            <SvgIcon
                                title='.NET'
                                label='.NET'
                                iconName='dotNet'
                                svgProp={{ className: "tech-icon" }}
                                wrapperStyle='tech-icon-wrapper'
                            />
                            <SvgIcon
                                title='Umbraco'
                                label='Umbraco'
                                iconName='umbraco'
                                svgProp={{ className: "tech-icon" }}
                                wrapperStyle='tech-icon-wrapper'
                            />
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
                            <SvgIcon
                                title='Typescript'
                                label='Typescript'
                                iconName='typescript'
                                svgProp={{ className: "tech-icon" }}
                                wrapperStyle='tech-icon-wrapper'
                            />
                            <SvgIcon
                                title='Javascript'
                                label='Javascript'
                                iconName='javascript'
                                svgProp={{ className: "tech-icon" }}
                                wrapperStyle='tech-icon-wrapper'
                            />
                            <SvgIcon
                                title='Html & Css'
                                label='Html & Css'
                                iconName='htmlCss'
                                svgProp={{ className: "tech-icon" }}
                                wrapperStyle='tech-icon-wrapper'
                            />
                            <SvgIcon
                                title='Angular'
                                label='Angular'
                                iconName='angular'
                                svgProp={{ className: "tech-icon" }}
                                wrapperStyle='tech-icon-wrapper'
                            />
                            <SvgIcon
                                title='Vue'
                                label='Vue'
                                iconName='vue'
                                svgProp={{ className: "tech-icon" }}
                                wrapperStyle='tech-icon-wrapper'
                            />
                            <SvgIcon
                                title='Docker'
                                label='Docker'
                                iconName='docker'
                                svgProp={{ className: "tech-icon" }}
                                wrapperStyle='tech-icon-wrapper'
                            />
                            <SvgIcon
                                title='Php Symfony'
                                label='Php Symfony'
                                iconName='php'
                                svgProp={{ className: "tech-icon" }}
                                wrapperStyle='tech-icon-wrapper'
                            />
                        </div>
                    </Col>
                </Row>
                {/* - */}
                <Row className='experience-section experience-section-right'>
                    <Col className='timeline-block tech_used' xs={1} sm={1} md={1} lg={6}>
                        <div className='tech_used-icons'>
                            <div className='icon-divider'>
                                <SvgIcon
                                    title='Typescript'
                                    label='Typescript'
                                    iconName='typescript'
                                    svgProp={{ className: "tech-icon" }}
                                    wrapperStyle='tech-icon-wrapper'
                                />
                                <SvgIcon
                                    title='Javascript'
                                    label='Javascript'
                                    iconName='javascript'
                                    svgProp={{ className: "tech-icon" }}
                                    wrapperStyle='tech-icon-wrapper'
                                />
                                <SvgIcon
                                    title='Html & Css'
                                    label='Html & Css'
                                    iconName='htmlCss'
                                    svgProp={{ className: "tech-icon" }}
                                    wrapperStyle='tech-icon-wrapper'
                                />
                                <SvgIcon
                                    title='React'
                                    label='React'
                                    iconName='react'
                                    svgProp={{ className: "tech-icon" }}
                                    wrapperStyle='tech-icon-wrapper'
                                />
                                <SvgIcon
                                    title='.NET'
                                    label='.NET'
                                    iconName='dotNet'
                                    svgProp={{ className: "tech-icon" }}
                                    wrapperStyle='tech-icon-wrapper'
                                />
                            </div>
                            <div className='icon-divider'>
                                <SvgIcon
                                    title='Php Laravel'
                                    label='Php Laravel'
                                    iconName='php'
                                    svgProp={{ className: "tech-icon" }}
                                    wrapperStyle='tech-icon-wrapper'
                                />
                                <SvgIcon
                                    title='Docker'
                                    label='Docker'
                                    iconName='docker'
                                    svgProp={{ className: "tech-icon" }}
                                    wrapperStyle='tech-icon-wrapper'
                                />
                                <SvgIcon
                                    title='Python'
                                    label='Python'
                                    iconName='python'
                                    svgProp={{ className: "tech-icon" }}
                                    wrapperStyle='tech-icon-wrapper'
                                />
                                <SvgIcon
                                    title='Postgres'
                                    label='Postgres'
                                    iconName='postgres'
                                    svgProp={{ className: "tech-icon" }}
                                    wrapperStyle='tech-icon-wrapper'
                                />
                                <SvgIcon
                                    title='MySql'
                                    label='MySql'
                                    iconName='mysql'
                                    svgProp={{ className: "tech-icon" }}
                                    wrapperStyle='tech-icon-wrapper'
                                />
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
