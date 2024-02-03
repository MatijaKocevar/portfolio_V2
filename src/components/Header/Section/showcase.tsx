import { Col, Row } from "react-bootstrap";
import PopupBox from "../../Shared/PopupBox/PopupBox";
import SvgIcon from "../../Shared/SvgIcon/SvgIcon";
import { useContext, useState } from "react";
import { TranslationContext } from "../../../translations/components/TranslationContext";
import "./showcase.scss";

const Showcase = () => {
	const { getTranslation } = useContext(TranslationContext);
	const [showPopupSpaceInvaders, setShowPopupSpaceInvaders] = useState(false);

	const magnifyingGlass = <SvgIcon iconName='magnifyingGlass' svgProp={{ width: "2rem", height: "2rem", fill: "white" }} />;

	const spaceInvadersContent = (
		<div className='zelda-clone-wrapper'>
			<div className='titles'>
				<div className='zelda-clone__title'>Zelda clone</div>
				<div className='zelda-clone__sub-title'>WIP</div>
			</div>
			<div className='game'>
				<div className='coming-soon__popup'>COMING SOON</div>
			</div>
		</div>
	);

	return (
		<Col className='games'>
			<Row className='heading-row'>
				<h1>Zelda clone</h1>
				<h5>{getTranslation("Header_WIP-Title")}</h5>
				<div className='game-description'>I will be making a clone of a Zelda game. Probably the gameboy era.</div>
			</Row>
			<Row className='zelda-clone'>
				{showPopupSpaceInvaders && <PopupBox content={spaceInvadersContent} onClose={() => setShowPopupSpaceInvaders(false)} />}

				<div className='game-wrapper' role='presentation' onClick={() => setShowPopupSpaceInvaders(true)}>
					<div className='game'>
						<div className='project-icon'>{magnifyingGlass}</div>
						<div className='coming-soon'>COMING SOON</div>
					</div>
				</div>
			</Row>
			<Row className='subtitle-links'>
				<a className='game-code-link' href='https://github.com/MatijaKocevar/zelda-clone' target='_blank' title='Open in GitHub' rel='noopener noreferrer'>
					Code
				</a>
			</Row>
		</Col>
	);
};

export default Showcase;
