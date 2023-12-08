import PortfolioV1 from "../../images/portfolioV1/portfolioV1.png";
import HolidaysCalculator from "../../images/holidaysCalculator/holidaysCalculator.png";
import DiffingApi from "../../images/diffingApi/diffingApi.png";
import PortfoliV2 from "../../images/portfolioV2/portfolioV2.png";
import Drumbox from "../../images/drumbox/drumbox.png";
import TaskManagement from "../../images/task-management/task-management.png";
import VueDynamicForms from "../../images/vue-dynamic-forms/vue-dynamic-forms.png";
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
	const [showPopupTaskManagement, setShowPopupTaskManagement] = useState(false);
	const [showPopupVueDynamicForms, setShowVueDynamicForms] = useState(false);

	const magnifyingGlass = <SvgIcon iconName='magnifyingGlass' svgProp={{ width: "2rem", height: "2rem", fill: "white" }} />;

	const resumeContent = (
			<Row className='popupbox-content'>
				<Row className='popupbox-heading'>
					<h3>{getTranslation("Projects_Portfolio_Title")}</h3>
				</Row>
				<Row className='popupbox-image'>
					<img src={PortfolioV1} alt='Online resume' />
				</Row>
				<Row className='popupbox-description'>
					<p>{getTranslation("Projects_Portfolio_Description")}</p>
				</Row>
				<Row className='popupbox-links'>
					<a href='https://github.com/MatijaKocevar/myPortfolio' target='_blank' rel='noopener noreferrer'>
						GitHub
					</a>
					<a href='https://matijakocevar.github.io/myPortfolio/' target='_blank' rel='noopener noreferrer'>
						Live
					</a>
				</Row>
			</Row>
		),
		holidayContent = (
			<Row className='popupbox-content'>
				<Row className='popupbox-heading'>
					<h3>{getTranslation("Projects_HolidaysCalculator_Title")}</h3>
				</Row>
				<Row className='popupbox-image'>
					<img src={HolidaysCalculator} alt='Online resume' />
				</Row>
				<Row className='popupbox-description'>
					<p>{getTranslation("Projects_HolidaysCalculator_Description")}</p>
				</Row>
				<Row className='popupbox-links'>
					<a href='https://github.com/MatijaKocevar/HolidaysApi' target='_blank' rel='noopener noreferrer'>
						GitHub
					</a>
				</Row>
			</Row>
		),
		diffingContent = (
			<Row className='popupbox-content'>
				<Row className='popupbox-heading'>
					<h3>{getTranslation("Projects_DiffingAPI_Title")}</h3>
				</Row>
				<Row className='popupbox-image'>
					<img src={DiffingApi} alt='Online resume' />
				</Row>
				<Row className='popupbox-description'>
					<p>{getTranslation("Projects_DiffingApi_Description")}</p>
				</Row>
				<Row className='popupbox-links'>
					<a href='https://github.com/MatijaKocevar/diffs' target='_blank' rel='noopener noreferrer'>
						GitHub
					</a>
				</Row>
			</Row>
		),
		portfoliV2Content = (
			<Row className='popupbox-content'>
				<Row className='popupbox-heading'>
					<h3>{getTranslation("Projects_PortfolioV2_Title")}</h3>
				</Row>
				<Row className='popupbox-image'>
					<img src={PortfoliV2} alt='Online resume' />
				</Row>
				<Row className='popupbox-description'>
					<p>{getTranslation("Projects_PortfoliV2_Description")}</p>
				</Row>
				<Row className='popupbox-links'>
					<a href='https://github.com/MatijaKocevar/portfolio_V2' target='_blank' rel='noopener noreferrer'>
						GitHub
					</a>
				</Row>
			</Row>
		),
		drumboxContent = (
			<Row className='popupbox-content'>
				<Row className='popupbox-heading'>
					<h3>{getTranslation("Projects_Drumbox_Title")}</h3>
				</Row>
				<Row className='popupbox-image'>
					<img src={Drumbox} alt='Online resume' />
				</Row>
				<Row className='popupbox-description'>
					<p>{getTranslation("Projects_Drumbox_Description")}</p>
				</Row>
				<Row className='popupbox-links'>
					<a href='https://github.com/MatijaKocevar/drumbox' target='_blank' rel='noopener noreferrer'>
						GitHub
					</a>
				</Row>
			</Row>
		),
		taskManagementContent = (
			<Row className='popupbox-content'>
				<Row className='popupbox-heading'>
					<h3>{getTranslation("Projects_TaskManagement_Title")}</h3>
				</Row>
				<Row className='popupbox-image'>
					<img src={TaskManagement} alt='Task Management' />
				</Row>
				<Row className='popupbox-description'>
					<p>{getTranslation("Projects_TaskManagement_Description")}</p>
				</Row>
				<Row className='popupbox-links'>
					<a href='https://github.com/MatijaKocevar/task-management' target='_blank' rel='noopener noreferrer'>
						GitHub
					</a>
					<a href='https://matijakocevar.github.io/task-management-frontend/' target='_blank' rel='noopener noreferrer'>
						Live
					</a>
				</Row>
			</Row>
		),
		vueDynamicFormsContent = (
			<Row className='popupbox-content'>
				<Row className='popupbox-heading'>
					<h3>{getTranslation("Projects_VueDynamicForms_Title")}</h3>
				</Row>
				<Row className='popupbox-image'>
					<img src={VueDynamicForms} alt='Task Management' />
				</Row>
				<Row className='popupbox-description'>
					<p>{getTranslation("Projects_VueDynamicForms_Description")}</p>
				</Row>
				<Row className='popupbox-links'>
					<a href='https://github.com/MatijaKocevar/vue-dynamic-forms' target='_blank' rel='noopener noreferrer'>
						GitHub
					</a>
					<a href='https://matijakocevar.github.io/vue-dynamic-forms/#/registration' target='_blank' rel='noopener noreferrer'>
						Live
					</a>
				</Row>
			</Row>
		);

	return (
		<Container id='projects' className='projects'>
			<Row className='heading-row'>
				<h1 className=''>{getTranslation("Navigation_Projects")}</h1>
			</Row>
			<Row className='projects-wrapper'>
				{/* - */}
				{showPopupVueDynamicForms && <PopupBox content={vueDynamicFormsContent} onClose={() => setShowVueDynamicForms(false)} />}
				<Col lg={4} md={6} sm={6} xs={12}>
					<div className='project-wrapper' role='presentation' onClick={() => setShowVueDynamicForms(true)}>
						<div className='project'>
							<div className='project-icon'>{magnifyingGlass}</div>
							<img className='project-image' src={VueDynamicForms} alt='project webpage' />
						</div>
						<h3>{getTranslation("Projects_VueDynamicForms_Title")}</h3>
					</div>
				</Col>
				{/* - */}
				{showPopupTaskManagement && <PopupBox content={taskManagementContent} onClose={() => setShowPopupTaskManagement(false)} />}
				<Col lg={4} md={6} sm={6} xs={12}>
					<div className='project-wrapper' role='presentation' onClick={() => setShowPopupTaskManagement(true)}>
						<div className='project'>
							<div className='project-icon'>{magnifyingGlass}</div>
							<img className='project-image' src={TaskManagement} alt='project webpage' />
						</div>
						<h3>{getTranslation("Projects_TaskManagement_Title")}</h3>
					</div>
				</Col>
				{/* - */}
				{showPopupportfoliV2 && <PopupBox content={portfoliV2Content} onClose={() => setShowPopupportfoliV2(false)} />}
				<Col lg={4} md={6} sm={6} xs={12}>
					<div className='project-wrapper' role='presentation' onClick={() => setShowPopupportfoliV2(true)}>
						<div className='project'>
							<div className='project-icon'>{magnifyingGlass}</div>
							<img className='project-image' src={PortfoliV2} alt='Project 4...' />
						</div>
						<h3>{getTranslation("Projects_PortfolioV2_Title")}</h3>
					</div>
				</Col>
				{/* - */}
				{showPopupDrumbox && <PopupBox content={drumboxContent} onClose={() => setShowPopupDrumbox(false)} />}
				<Col lg={4} md={6} sm={6} xs={12}>
					<div className='project-wrapper' role='presentation' onClick={() => setShowPopupDrumbox(true)}>
						<div className='project'>
							<div className='project-icon'>{magnifyingGlass}</div>
							<img className='project-image' src={Drumbox} alt='Project 3...' />
						</div>
						<h3>{getTranslation("Projects_Drumbox_Title")}</h3>
					</div>
				</Col>
				{/* - */}
				{showPopupHolidays && <PopupBox content={holidayContent} onClose={() => setShowPopupHolidays(false)} />}
				<Col lg={4} md={6} sm={6} xs={12}>
					<div className='project-wrapper' role='presentation' onClick={() => setShowPopupHolidays(true)}>
						<div className='project'>
							<div className='project-icon'>{magnifyingGlass}</div>
							<img className='project-image' src={HolidaysCalculator} alt='Project 2...' />
						</div>
						<h3>{getTranslation("Projects_HolidaysCalculator_Title")}</h3>
					</div>
				</Col>
				{/* - */}
				{showPopupDiffing && <PopupBox content={diffingContent} onClose={() => setShowPopupDiffing(false)} />}
				<Col lg={4} md={6} sm={6} xs={12}>
					<div className='project-wrapper' role='presentation' onClick={() => setShowPopupDiffing(true)}>
						<div className='project'>
							<div className='project-icon'>{magnifyingGlass}</div>
							<img className='project-image' src={DiffingApi} alt='Project 3...' />
						</div>
						<h3>{getTranslation("Projects_DiffingAPI_Title")}</h3>
					</div>
				</Col>
				{/* - */}
				{showPopupResume && <PopupBox content={resumeContent} onClose={() => setShowPopupResume(false)} />}
				<Col lg={4} md={6} sm={6} xs={12}>
					<div className='project-wrapper' role='presentation' onClick={() => setShowPopupResume(true)}>
						<div className='project'>
							<div className='project-icon'>{magnifyingGlass}</div>
							<img className='project-image' src={PortfolioV1} alt='project webpage' />
						</div>
						<h3>{getTranslation("Projects_Portfolio_Title")}</h3>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Projects;
