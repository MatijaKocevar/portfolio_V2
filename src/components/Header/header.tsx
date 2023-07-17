import { useContext, useState } from "react";
import "./header.scss";
import { TranslationContext } from "../../translations/components/TranslationContext";
import { Col, Container, Row } from "react-bootstrap";
import Author from "../../images/me.jpg";
import SpaceInvaders from "../SpaceInvaders/SpaceInvaders";
import SvgIcon from "../Shared/SvgIcon/SvgIcon";
import PopupBox from "../Shared/PopupBox/PopupBox";
import SpaceInvaderPic from "../../images/space-invaders/space-invaders.png";

const Header = () => {
	const { getTranslation } = useContext(TranslationContext);
	const [showChangeLogUpcoming, setShowChangeLogUpcoming] = useState(false);
	const [showPopupSpaceInvaders, setShowPopupSpaceInvaders] = useState(false);

	const magnifyingGlass = <SvgIcon iconName='magnifyingGlass' svgProp={{ width: "2rem", height: "2rem", fill: "white" }} />;

	const changeLogUpcomingContent = (
			<Row className='popupbox-content'>
				<div className='upcoming-section'>
					<Col className='popupbox-heading'>
						<h3>Upcoming</h3>
					</Col>
					<Col className='popupbox-description'>{getTranslation("Header_WIP_Upcoming")}</Col>
				</div>

				<div className='changelog-section'>
					<Col className='popupbox-heading'>
						<h3>Change Log</h3>
					</Col>
					<Col className='popupbox-description'>{getTranslation("Header_WIP_Changelog")}</Col>
				</div>
			</Row>
		),
		spaceInvadersContent = (
			<div className='space-invaders-wrapper'>
				<div className='space-invaders__title'>{getTranslation("Header_SpaceInvaders_Title")}</div>
				<div className='space-invaders__sub-title'>{getTranslation("Header_SpaceInvaders_Sub-Title")}</div>
				<SpaceInvaders />
			</div>
		);

	return (
		<Container id='home' className='header-wraper'>
			<Row className='header-content'>
				<Col className='main-info' xs={12} sm={12} md={12} lg={3} xxl={3}>
					<Row className='photo-header'>
						<img className='profile-img' src={Author} alt='author' />
						<h1>{getTranslation("Header_Title")}</h1>
					</Row>
					<Row className='heading-row'>
						<h3>{getTranslation("Header_Subtitle")}</h3>
					</Row>
					<Row className='skill-icons-wrapper'>
						<h3 className='icon-heading'>{getTranslation("Header_Sub_Subtitle")}</h3>
						<Row className='skills-neka'>
							<Col xs={6} sm={6} md={6} lg={6} className='skill-icon'>
								<SvgIcon iconName='javascript' svgProp={{ className: "skill-icon-svg" }} />
								<span>Javascript</span>
							</Col>
							<Col xs={6} sm={6} md={6} lg={6} className='skill-icon'>
								<SvgIcon iconName='typescript' svgProp={{ className: "skill-icon-svg" }} />
								<span>Typescript</span>
							</Col>
							<Col xs={6} sm={6} md={6} lg={6} className='skill-icon'>
								<SvgIcon iconName='dotNet' svgProp={{ className: "skill-icon-svg" }} />
								<span>.NET(C#)</span>
							</Col>
							<Col xs={6} sm={6} md={6} lg={6} className='skill-icon'>
								<SvgIcon iconName='sql' svgProp={{ className: "skill-icon-svg" }} />
								<span>SQL</span>
							</Col>
						</Row>
					</Row>
				</Col>
				<Col className='games' xs={12} sm={12} md={12} lg={9} xxl={9}>
					<Row className='heading-row'>
						<h1>{getTranslation("Header_SpaceInvaders_Title")}</h1>
						<h5>{getTranslation("Header_WIP-Title")}</h5>
						<div className='game-description'>{getTranslation("Header_WIP_Description")}</div>
					</Row>
					<Row className='space-invaders'>
						{showPopupSpaceInvaders && <PopupBox content={spaceInvadersContent} onClose={() => setShowPopupSpaceInvaders(false)} />}

						<div className='game-wrapper' role='presentation' onClick={() => setShowPopupSpaceInvaders(true)}>
							<div className='game'>
								<div className='project-icon'>{magnifyingGlass}</div>
								<img className='game-image' src={SpaceInvaderPic} alt='Space Invaders...' />
							</div>
						</div>
					</Row>
					<Row className='subtitle-links'>
						{showChangeLogUpcoming && <PopupBox content={changeLogUpcomingContent} onClose={() => setShowChangeLogUpcoming(false)} />}

						<button className='change-log' onClick={() => setShowChangeLogUpcoming(true)} title='Open change log' rel='noopener noreferrer'>
							Change Log / Upcoming
						</button>

						<a
							className='game-code-link'
							href='https://github.com/MatijaKocevar/portfolio_V2/tree/master/src/components/SpaceInvaders'
							target='_blank'
							title='Open in GitHub'
							rel='noopener noreferrer'
						>
							Code
						</a>
					</Row>
				</Col>
			</Row>
		</Container>
	);
};

export default Header;
