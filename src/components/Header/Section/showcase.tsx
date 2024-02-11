import { Col, Row } from "react-bootstrap";
import PopupBox from "../../Shared/PopupBox/PopupBox";
import SvgIcon from "../../Shared/SvgIcon/SvgIcon";
import { useContext, useState } from "react";
import { TranslationContext } from "../../../translations/components/TranslationContext";
import "./showcase.scss";
import zeldaClone from "../../../images/zelda-clone/zelda-clone.png";

const Showcase = () => {
	const { getTranslation } = useContext(TranslationContext);
	const [showPopupSpaceInvaders, setShowPopupSpaceInvaders] = useState(false);

	const magnifyingGlass = <SvgIcon iconName='magnifyingGlass' svgProp={{ width: "2rem", height: "2rem", fill: "white" }} />;

	const onOpenLive = () => {
		//i need to open a new tab with the game
		window.open("https://matijakocevar.github.io/zelda-clone/", "_blank");
	};

	const spaceInvadersContent = (
		<div className='zelda-clone-wrapper'>
			<div className='titles'>
				<div className='zelda-clone__title'>Legend of Griselda - A Tie to the Past</div>
				<div className='zelda-clone__sub-title'>
					This project takes inspiration from Legend of Zelda - A Link to the Past, a classic game from the 90s. The game is a top-down shooter where the player must navigate through a maze of enemies
					and obstacles to reach the end of the level. The game is built using Phaser.js, React.js and TypeScript.
					<br />
					<br />
					Controls: W,A,S,D keys to move, Space to attack.
				</div>
			</div>
			<div className='game'>
				<div className='coming-soon__popup'>
					<iframe src='https://matijakocevar.github.io/zelda-clone/' title='A Tie to the past'></iframe>
				</div>
			</div>
			<button onClick={onOpenLive}>OPEN LIVE</button>
		</div>
	);

	return (
		<Col className='games'>
			<Row className='heading-row'>
				<h1>Legend of Griselda - A Tie to the Past</h1>
				<h5>{getTranslation("Header_WIP-Title")}</h5>
			</Row>
			<Row className='zelda-clone'>
				{showPopupSpaceInvaders && <PopupBox content={spaceInvadersContent} onClose={() => setShowPopupSpaceInvaders(false)} />}

				<div className='game-wrapper' role='presentation' onClick={() => setShowPopupSpaceInvaders(true)}>
					<div className='game'>
						<div className='project-icon'>{magnifyingGlass}</div>
						<img src={zeldaClone} alt='zelda-clone' className='zelda-clone-img' />
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
