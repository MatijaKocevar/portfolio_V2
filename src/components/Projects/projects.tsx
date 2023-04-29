import project1 from "../../images/project1.png";
import project2 from "../../images/project2.png";
import project3 from "../../images/project3.png";
import woi from "../../images/woi.png";
import "./projects.scss";
import { forwardRef, useContext, useRef, useState } from "react";
import PopupBox from "../Shared/PopupBox/PopupBox";
import { Col, Container, Row } from "react-bootstrap";
import { TranslationContext } from "../../translations/components/TranslationContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassPlus } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
	const { getTranslation } = useContext(TranslationContext);

	const [showPopupResume, setShowPopupResume] = useState(false);
	const [showPopupHolidays, setShowPopupHolidays] = useState(false);
	const [showPopupDiffing, setShowPopupDiffing] = useState(false);
	const [showPopupWOI, setShowPopupWOI] = useState(false);

	const magnifyingGlass = <FontAwesomeIcon icon={faMagnifyingGlassPlus} />;

	const resumeContent = (
			<>
				<h3>Portfolio</h3>
				<img className='projects-image-popupbox' src={project1} alt='Online resume' />
				<p>This is a popup box!This is a popup box!This is a popup box!This is a popup box!This is a popup box!This is a popup box!</p>
			</>
		),
		holidayContent = (
			<>
				<h3>Holidays calculator</h3>
				<img className='projects-image-popupbox' src={project2} alt='Online resume' />
				<p>This is a popup box!This is a popup box!This is a popup box!This is a popup box!This is a popup box!This is a popup box!</p>
			</>
		),
		diffingContent = (
			<>
				<h3>Diffing API</h3>
				<img className='projects-image-popupbox' src={project3} alt='Online resume' />
				<p>This is a popup box!This is a popup box!This is a popup box!This is a popup box!This is a popup box!This is a popup box!</p>
			</>
		),
		WOIContent = (
			<>
				<h3>WORKING ON IT</h3>
				<img className='projects-image-popupbox' src={woi} alt='Online resume' />
				<p>This is a popup box!This is a popup box!This is a popup box!This is a popup box!This is a popup box!This is a popup box!</p>
			</>
		);

	return (
		<Container id='projects' className='projects'>
			<Row className='heading-row'>
				<h1 className=''>{getTranslation("Navigation_Projects")}</h1>
			</Row>
			<Row>
				{showPopupResume && <PopupBox content={resumeContent} onClose={() => setShowPopupResume(false)} />}
				<Col lg={3} md={6} sm={6} xs={12}>
					<div className='project-wrapper'>
						<div className='project'>
							<div className='project-icon' onClick={() => setShowPopupResume(true)}>
								{magnifyingGlass}
							</div>
							<img className='project-image' src={project1} alt='project webpage' />
						</div>
						<h3>Portfolio</h3>
					</div>
				</Col>
				{/* - */}
				{showPopupHolidays && <PopupBox content={holidayContent} onClose={() => setShowPopupHolidays(false)} />}
				<Col lg={3} md={6} sm={6} xs={12}>
					<div className='project-wrapper'>
						<div className='project'>
							<div className='project-icon' onClick={() => setShowPopupHolidays(true)}>
								{magnifyingGlass}
							</div>
							<img className='project-image' src={project2} alt='Project 2...' />
						</div>
						<h3>Holidays calculator</h3>
					</div>
				</Col>
				{/* - */}
				{showPopupDiffing && <PopupBox content={diffingContent} onClose={() => setShowPopupDiffing(false)} />}
				<Col lg={3} md={6} sm={6} xs={12}>
					<div className='project-wrapper'>
						<div className='project'>
							<div className='project-icon' onClick={() => setShowPopupDiffing(true)}>
								{magnifyingGlass}
							</div>
							<img className='project-image' src={project3} alt='Project 3...' />
						</div>
						<h3>Diffing API</h3>
					</div>
				</Col>
				{/* - */}
				{showPopupWOI && <PopupBox content={WOIContent} onClose={() => setShowPopupWOI(false)} />}
				<Col lg={3} md={6} sm={6} xs={12}>
					<div className='project-wrapper'>
						<div className='project'>
							<div className='project-icon' onClick={() => setShowPopupWOI(true)}>
								{magnifyingGlass}
							</div>
							<img className='project-image' src={woi} alt='Project 4...' />
						</div>
						<h3>...</h3>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Projects;
