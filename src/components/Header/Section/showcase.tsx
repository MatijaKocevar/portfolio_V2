import { Col, Row } from "react-bootstrap";
import PopupBox from "../../Shared/PopupBox/PopupBox";
import SvgIcon from "../../Shared/SvgIcon/SvgIcon";
import { useContext, useState } from "react";
import { TranslationContext } from "../../../translations/components/TranslationContext";
import SpaceInvaderPic from "../../../images/space-invaders/space-invaders.png";
import "./showcase.scss";

const Showcase = () => {
	const { getTranslation } = useContext(TranslationContext);
	const [showPopupSpaceInvaders, setShowPopupSpaceInvaders] = useState(false);

	const magnifyingGlass = <SvgIcon iconName='magnifyingGlass' svgProp={{ width: "2rem", height: "2rem", fill: "white" }} />;

	const spaceInvadersContent = (
		<div className='space-invaders-wrapper'>
			<div className='space-invaders__title'>{getTranslation("Header_SpaceInvaders_Title")}</div>
			<div className='space-invaders__sub-title'>{getTranslation("Header_SpaceInvaders_Sub-Title")}</div>
			{/* <SpaceInvaders /> */}
			<iframe
				style={{
					width: "600px",
					height: "100%",
					border: "none",
					maxWidth: "100%",
				}}
				src='https://matijakocevar.github.io/space-invaders/'
				title='Space Invaders'
			></iframe>
		</div>
	);

	return (
		<Col className='games'>
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
				<a className='game-code-link' href='https://github.com/MatijaKocevar/space-invaders/tree/develop' target='_blank' title='Open in GitHub' rel='noopener noreferrer'>
					Code
				</a>
			</Row>
		</Col>
	);
};

export default Showcase;
