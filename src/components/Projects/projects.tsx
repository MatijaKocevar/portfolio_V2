import portfolioV1 from "../../images/portfolioV1/portfolioV1.png";
import holidaysCalculator from "../../images/holidaysCalculator/holidaysCalculator.png";
import diffingApi from "../../images/diffingApi/diffingApi.png";
import portfoliV2 from "../../images/portfolioV2/portfolioV2.png";
import drumbox from "../../images/drumbox/drumbox.png";
import "./projects.scss";
import { useContext, useState } from "react";
import PopupBox from "../Shared/PopupBox/PopupBox";
import { Col, Container, Row } from "react-bootstrap";
import { TranslationContext } from "../../translations/components/TranslationContext";
import SvgIcon from "../Shared/SvgIcon/SvgIcon";

const Projects = () => {
	const { getTranslation } = useContext(TranslationContext);

	const [showPopupResume, setShowPopupResume] = useState(false);
	const [showPopupHolidays, setShowPopupHolidays] = useState(false);
	const [showPopupDiffing, setShowPopupDiffing] = useState(false);
	const [showPopupportfoliV2, setShowPopupportfoliV2] = useState(false);
	const [showPopupDrumbox, setShowPopupDrumbox] = useState(false);

	const magnifyingGlass = <SvgIcon iconName='magnifyingGlass' svgProp={{ width: "2rem", height: "2rem", fill: "white" }} />;

	const resumeContent = (
			<Row className='popupbox-content'>
				<Col className='popupbox-heading'>
					<h3>{getTranslation("Projects_Portfolio_Title")}</h3>
				</Col>
				<Col className='popupbox-image'>
					<img src={portfolioV1} alt='Online resume' />
				</Col>
				<Col className='popupbox-description'>
					<p>{getTranslation("Projects_Portfolio_Description")}</p>
				</Col>
				<Col className='popupbox-links'>
					<a href='https://github.com/MatijaKocevar/myPortfolio' target='_blank' rel='noopener noreferrer'>
						GitHub
					</a>
					<a href='https://matijakocevar.github.io/myPortfolio/' target='_blank' rel='noopener noreferrer'>
						Live
					</a>
				</Col>
			</Row>
		),
		holidayContent = (
			<Row className='popupbox-content'>
				<Col className='popupbox-heading'>
					<h3>{getTranslation("Projects_HolidaysCalculator_Title")}</h3>
				</Col>
				<Col className='popupbox-image'>
					<img src={holidaysCalculator} alt='Online resume' />
				</Col>
				<Col className='popupbox-description'>
					<p>{getTranslation("Projects_HolidaysCalculator_Description")}</p>
				</Col>
				<Col className='popupbox-links'>
					<a href='https://github.com/MatijaKocevar/HolidaysApi' target='_blank' rel='noopener noreferrer'>
						GitHub
					</a>
				</Col>
			</Row>
		),
		diffingContent = (
			<Row className='popupbox-content'>
				<Col className='popupbox-heading'>
					<h3>{getTranslation("Projects_DiffingAPI_Title")}</h3>
				</Col>
				<Col className='popupbox-image'>
					<img src={diffingApi} alt='Online resume' />
				</Col>
				<Col className='popupbox-description'>
					<p>{getTranslation("Projects_DiffingApi_Description")}</p>
				</Col>
				<Col className='popupbox-links'>
					<a href='https://github.com/MatijaKocevar/diffs' target='_blank' rel='noopener noreferrer'>
						GitHub
					</a>
				</Col>
			</Row>
		),
		portfoliV2Content = (
			<Row className='popupbox-content'>
				<Col className='popupbox-heading'>
					<h3>{getTranslation("Projects_PortfolioV2_Title")}</h3>
				</Col>
				<Col className='popupbox-image'>
					<img src={portfoliV2} alt='Online resume' />
				</Col>
				<Col className='popupbox-description'>
					<p>{getTranslation("Projects_PortfoliV2_Description")}</p>
				</Col>
				<Col className='popupbox-links'>
					<a href='https://github.com/MatijaKocevar/portfolio_V2' target='_blank' rel='noopener noreferrer'>
						GitHub
					</a>
				</Col>
			</Row>
		),
		drumboxContent = (
			<Row className='popupbox-content'>
				<Col className='popupbox-heading'>
					<h3>{getTranslation("Projects_Drumbox_Title")}</h3>
				</Col>
				<Col className='popupbox-image'>
					<img src={drumbox} alt='Online resume' />
				</Col>
				<Col className='popupbox-description'>
					<p>{getTranslation("Projects_Drumbox_Description")}</p>
				</Col>
				<Col className='popupbox-links'>
					<a href='https://github.com/MatijaKocevar/drumbox' target='_blank' rel='noopener noreferrer'>
						GitHub
					</a>
				</Col>
			</Row>
		);

	return (
		<Container id='projects' className='projects'>
			<Row className='heading-row'>
				<h1 className=''>{getTranslation("Navigation_Projects")}</h1>
			</Row>
			<Row className='projects-wrapper'>
				{/* - */}
				{showPopupportfoliV2 && <PopupBox content={portfoliV2Content} onClose={() => setShowPopupportfoliV2(false)} />}
				<Col lg={4} md={6} sm={6} xs={12}>
					<div className='project-wrapper' onClick={() => setShowPopupportfoliV2(true)}>
						<div className='project'>
							<div className='project-icon'>{magnifyingGlass}</div>
							<img className='project-image' src={portfoliV2} alt='Project 4...' />
						</div>
						<h3>{getTranslation("Projects_PortfolioV2_Title")}</h3>
					</div>
				</Col>
				{/* - */}
				{showPopupDrumbox && <PopupBox content={drumboxContent} onClose={() => setShowPopupDrumbox(false)} />}
				<Col lg={4} md={6} sm={6} xs={12}>
					<div className='project-wrapper' onClick={() => setShowPopupDrumbox(true)}>
						<div className='project'>
							<div className='project-icon'>{magnifyingGlass}</div>
							<img className='project-image' src={drumbox} alt='Project 3...' />
						</div>
						<h3>{getTranslation("Projects_Drumbox_Title")}</h3>
					</div>
				</Col>
				{/* - */}
				{showPopupHolidays && <PopupBox content={holidayContent} onClose={() => setShowPopupHolidays(false)} />}
				<Col lg={4} md={6} sm={6} xs={12}>
					<div className='project-wrapper' onClick={() => setShowPopupHolidays(true)}>
						<div className='project'>
							<div className='project-icon'>{magnifyingGlass}</div>
							<img className='project-image' src={holidaysCalculator} alt='Project 2...' />
						</div>
						<h3>{getTranslation("Projects_HolidaysCalculator_Title")}</h3>
					</div>
				</Col>
				{/* - */}
				{showPopupDiffing && <PopupBox content={diffingContent} onClose={() => setShowPopupDiffing(false)} />}
				<Col lg={4} md={6} sm={6} xs={12}>
					<div className='project-wrapper' onClick={() => setShowPopupDiffing(true)}>
						<div className='project'>
							<div className='project-icon'>{magnifyingGlass}</div>
							<img className='project-image' src={diffingApi} alt='Project 3...' />
						</div>
						<h3>{getTranslation("Projects_DiffingAPI_Title")}</h3>
					</div>
				</Col>
				{/* - */}
				{showPopupResume && <PopupBox content={resumeContent} onClose={() => setShowPopupResume(false)} />}
				<Col lg={4} md={6} sm={6} xs={12}>
					<div className='project-wrapper' onClick={() => setShowPopupResume(true)}>
						<div className='project'>
							<div className='project-icon'>{magnifyingGlass}</div>
							<img className='project-image' src={portfolioV1} alt='project webpage' />
						</div>
						<h3>{getTranslation("Projects_Portfolio_Title")}</h3>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Projects;
