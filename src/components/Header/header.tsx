import { useContext, useState } from "react";
import "./header.scss";
import { TranslationContext } from "../../translations/components/TranslationContext";
import { Col, Container, Row } from "react-bootstrap";
import Author from "../../images/me.jpg";
import SpaceInvaders from "../SpaceInvaders/SpaceInvaders";
import SvgIcon from "../Shared/SvgIcon/SvgIcon";
import PopupBox from "../Shared/PopupBox/PopupBox";

const Header = () => {
	const { getTranslation } = useContext(TranslationContext);
	const [showChangeLogUpcoming, setShowChangeLogUpcoming] = useState(false);

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
	);

	return (
		<Container id='home' className='header-wraper'>
			<Row className='main-info' xs={12} sm={12} md={12} lg={3} xxl={3}>
				<Col className='photo-header'>
					<img className='profile-img' src={Author} alt='author' />
				</Col>
				<Col className='headings'>
					<Row className='heading-row'>
						<h1>{getTranslation("Header_Title")}</h1>
					</Row>
					<Row className='subtitle-row'>
						<h3>{getTranslation("Header_Subtitle")}</h3>
					</Row>
					<Row className='skill-icons-wrapper'>
						<Col xs={6} sm={6} md={3} lg={3} className='skill-icon'>
							<SvgIcon iconName='javascript' svgProp={{ className: "skill-icon-back" }} />
							<span>Javascript</span>
						</Col>
						<Col xs={6} sm={6} md={3} lg={3} className='skill-icon'>
							<SvgIcon iconName='typescript' svgProp={{ className: "skill-icon-back" }} />
							<span>Typescript</span>
						</Col>
						<Col xs={6} sm={6} md={3} lg={3} className='skill-icon'>
							<SvgIcon iconName='dotNet' svgProp={{ className: "skill-icon-back" }} />
							<span>.NET(C#)</span>
						</Col>
						<Col xs={6} sm={6} md={3} lg={3} className='skill-icon'>
							<SvgIcon iconName='sql' svgProp={{ className: "skill-icon-back" }} />
							<span>SQL</span>
						</Col>
					</Row>
				</Col>
			</Row>
			<Row className='games' xs={12} sm={12} md={12} lg={9} xxl={9}>
				{/* <Col>
					<SnakeGame />
				</Col> */}
				<Col className='game'>
					{/* <p className='WIP'>Work in progress</p> */}
					<Row className='heading-row' style={{ textAlign: "center" }}>
						<h1>{getTranslation("Header_WIP_Title")}</h1>
						<h5 style={{ fontSize: "1rem", marginBottom: ".5rem", color: "red" }}>Work in progress</h5>
						<div className='game-description'>{getTranslation("Header_WIP_Description")}</div>
						<div className='subtitle-links'>
							{showChangeLogUpcoming && <PopupBox content={changeLogUpcomingContent} onClose={() => setShowChangeLogUpcoming(false)} />}
							<button className='change-log' onClick={() => setShowChangeLogUpcoming(true)} title='Open change log' rel='noopener noreferrer'>
								Change Log
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
						</div>
					</Row>
					<Row className='space-invaders'>
						<SpaceInvaders />
					</Row>
				</Col>
			</Row>
		</Container>
	);
};

export default Header;
