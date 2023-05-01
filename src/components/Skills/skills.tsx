import "./skills.scss";
import { Col, Container, Row } from "react-bootstrap";
import FlipBox from "../Shared/FlipBox/FlipBox";
import { useContext } from "react";
import { TranslationContext } from "../../translations/components/TranslationContext";
import SvgIcon from "../Shared/SvgIcon/SvgIcon";

const Skills = () => {
	const { getTranslation } = useContext(TranslationContext);

	return (
		<Container id='skills' className='skills'>
			<Row className='heading-row'>
				<h1>{getTranslation("Navigation_Skills")}</h1>
			</Row>
			<Row>
				{/* - */}
				<Col lg={3} md={6} sm={6} xs={12} className='skill'>
					<FlipBox
						frontContent={
							<div className='box'>
								<div className='circle'>
									<SvgIcon iconName='fileCode' svgProp={{ className: "skill-icon-front" }} />
								</div>
								<h3>{getTranslation("Skills_WebDevelopment_Title")}</h3>
							</div>
						}
						backContent={
							<div className='box'>
								<Row className='skill-icons-wrapper'>
									<Col xs={3} sm={3} md={3} lg={3} className='skill-icon'>
										<SvgIcon iconName='react' svgProp={{ className: "skill-icon-back" }} />
										<span>React</span>
									</Col>
									<Col xs={3} sm={3} md={3} lg={3} className='skill-icon'>
										<SvgIcon iconName='typescript' svgProp={{ className: "skill-icon-back" }} />
										<span>Typescript</span>
									</Col>
									<Col xs={3} sm={3} md={3} lg={3} className='skill-icon'>
										<SvgIcon iconName='dotNet' svgProp={{ className: "skill-icon-back" }} />
										<span>.NET(C#)</span>
									</Col>
									<Col xs={3} sm={3} md={3} lg={3} className='skill-icon'>
										<SvgIcon iconName='vue' svgProp={{ className: "skill-icon-back" }} />
										<span>Vue</span>
									</Col>
									<Col xs={3} sm={3} md={3} lg={3} className='skill-icon'>
										<SvgIcon iconName='javascript' svgProp={{ className: "skill-icon-back" }} />
										<span>Javascript</span>
									</Col>
									<Col xs={3} sm={3} md={3} lg={3} className='skill-icon'>
										<SvgIcon iconName='sql' svgProp={{ className: "skill-icon-back" }} />
										<span>SQL</span>
									</Col>
									<Col xs={3} sm={3} md={3} lg={3} className='skill-icon'>
										<SvgIcon iconName='html5' svgProp={{ className: "skill-icon-back" }} />
										<span>Html 5</span>
									</Col>
									<Col xs={3} sm={3} md={3} lg={3} className='skill-icon'>
										<SvgIcon iconName='cssSass' svgProp={{ className: "skill-icon-back" }} />
										<span>Css/Sass</span>
									</Col>
								</Row>
								<Row className='skills-description'>
									<p>{getTranslation("Skills_WebDevelopment")}</p>
								</Row>
							</div>
						}
					/>
				</Col>
				{/* - */}
				<Col lg={3} md={6} sm={6} xs={12} className='skill'>
					<FlipBox
						frontContent={
							<div className='box'>
								<div className='circle'>
									<SvgIcon iconName='pen' svgProp={{ className: "skill-icon-front" }} />
								</div>
								<h3>{getTranslation("Skills_Design_Title")}</h3>
							</div>
						}
						backContent={
							<div className='box'>
								<Row className='skill-icons-wrapper'>
									<Col xs={6} sm={6} md={6} lg={6} className='skill-icon'>
										<SvgIcon iconName='illustrator' svgProp={{ className: "skill-icon-back" }} />
										<span>Illustrator</span>
									</Col>
									<Col xs={6} sm={6} md={6} lg={6} className='skill-icon'>
										<SvgIcon iconName='photoshop' svgProp={{ className: "skill-icon-back" }} />
										<span>Photoshop</span>
									</Col>
									<Col xs={6} sm={6} md={6} lg={6} className='skill-icon'>
										<SvgIcon iconName='premiere' svgProp={{ className: "skill-icon-back" }} />
										<span>Premiere</span>
									</Col>
									<Col xs={6} sm={6} md={6} lg={6} className='skill-icon'>
										<SvgIcon iconName='inkscape' svgProp={{ className: "skill-icon-back" }} />
										<span>Inkscape</span>
									</Col>
								</Row>
								<Row className='skills-description'>
									<p>{getTranslation("Skills_Design")}</p>
								</Row>
							</div>
						}
					/>
				</Col>
				{/* - */}
				<Col lg={3} md={6} sm={6} xs={12} className='skill'>
					<FlipBox
						frontContent={
							<div className='box'>
								<div className='circle'>
									<SvgIcon iconName='desktopMono' svgProp={{ className: "skill-icon-front" }} />
								</div>
								<h3>{getTranslation("Skills_PcMobileRepair_Title")}</h3>
							</div>
						}
						backContent={
							<div className='box'>
								<Row className='skill-icons-wrapper'>
									<Col xs={4} sm={4} md={4} lg={4} className='skill-icon'>
										<SvgIcon iconName='mobilePhone' svgProp={{ className: "skill-icon-back" }} />
										<span>Mobile</span>
									</Col>
									<Col xs={4} sm={4} md={4} lg={4} className='skill-icon'>
										<SvgIcon iconName='desktop' svgProp={{ className: "skill-icon-back" }} />
										<span>Desktop</span>
									</Col>
									<Col xs={4} sm={4} md={4} lg={4} className='skill-icon'>
										<SvgIcon iconName='ram' svgProp={{ className: "skill-icon-back" }} />
										<span>Hardware</span>
									</Col>
								</Row>
								<Row className='skills-description'>
									<p>{getTranslation("Skills_PcMobileRepair")}</p>
								</Row>
							</div>
						}
					/>
				</Col>
				{/* - */}
				<Col lg={3} md={6} sm={6} xs={12} className='skill'>
					<FlipBox
						frontContent={
							<div className='box'>
								<div className='circle'>
									<SvgIcon iconName='table' svgProp={{ className: "skill-icon-front" }} />
								</div>
								<h3>{getTranslation("Skills_DataVisualising_Title")}</h3>
							</div>
						}
						backContent={
							<div className='box'>
								<Row className='skill-icons-wrapper'>
									<Col xs={6} sm={6} md={6} lg={6} className='skill-icon'>
										<SvgIcon iconName='excel' svgProp={{ className: "skill-icon-back" }} />
										<span>Excel</span>
									</Col>
									<Col xs={6} sm={6} md={6} lg={6} className='skill-icon'>
										<SvgIcon iconName='sheets' svgProp={{ className: "skill-icon-back" }} />
										<span>Sheets</span>
									</Col>
								</Row>
								<Row className='skills-description'>
									<p>{getTranslation("Skills_DataVisualising")}</p>
								</Row>
							</div>
						}
					/>
				</Col>
			</Row>
		</Container>
	);
};

export default Skills;
