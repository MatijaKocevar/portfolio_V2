import { Col, Row } from "react-bootstrap"
import PopupBox from "../../Shared/PopupBox/PopupBox"
import SvgIcon from "../../Shared/SvgIcon/SvgIcon";
import { useContext, useState } from "react";
import { TranslationContext } from "../../../translations/components/TranslationContext";
import SpaceInvaders from "../../SpaceInvaders/SpaceInvaders";
import SpaceInvaderPic from "../../../images/space-invaders/space-invaders.png";
import "./showcase.scss"


const Showcase = () => { 

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

    return <Col className='games' >
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
					</Row>
				</Col>
}

export default Showcase;