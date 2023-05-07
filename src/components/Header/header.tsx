import { useContext } from "react";
import "./header.scss";
import { TranslationContext } from "../../translations/components/TranslationContext";
// import SnakeGame from "../SnakeGame/SnakeGame";
// import GameBoard from "../SpaceInvaders/SpaceInvaders";
import { Col, Container, Row } from "react-bootstrap";
import author from "../../images/me.jpg";
import SpaceInvaders from "../SpaceInvaders/SpaceInvaders";
import SvgIcon from "../Shared/SvgIcon/SvgIcon";

const Header = () => {
	const { getTranslation } = useContext(TranslationContext);

	return (
		<Container id='home' className='header-wraper'>
			<Row className='main-info'>
				<Col className='photo'>
					<img className='profile-img' src={author} alt='author' />
				</Col>
				<Col className='headings'>
					<Row className='heading-row'>
						<h1>{getTranslation("Header_Title")}</h1>
					</Row>
					<Row className='subtitle-row'>
						<h3>{getTranslation("Header_Subtitle")}</h3>
					</Row>
					<Row className='skill-icons-wrapper'>
						<Col xs={2} sm={2} md={2} lg={2} className='skill-icon'>
							<SvgIcon iconName='javascript' svgProp={{ className: "skill-icon-back" }} />
							<span>Javascript</span>
						</Col>
						<Col xs={2} sm={2} md={2} lg={2} className='skill-icon'>
							<SvgIcon iconName='typescript' svgProp={{ className: "skill-icon-back" }} />
							<span>Typescript</span>
						</Col>
						<Col xs={2} sm={2} md={2} lg={2} className='skill-icon'>
							<SvgIcon iconName='dotNet' svgProp={{ className: "skill-icon-back" }} />
							<span>.NET(C#)</span>
						</Col>
						<Col xs={2} sm={2} md={2} lg={2} className='skill-icon'>
							<SvgIcon iconName='sql' svgProp={{ className: "skill-icon-back" }} />
							<span>SQL</span>
						</Col>
					</Row>
					<Row>
						<div style={{ color: "white", textAlign: "center" }}>{getTranslation("Header_AdditionalInfo")}</div>
					</Row>
				</Col>
			</Row>
			<Row className='games'>
				{/* <Col>
					<SnakeGame />
				</Col> */}
				<Col className='game'>
					<Row className='heading-row'>
						<h1>GAME</h1>
					</Row>
					<Row>
						<SpaceInvaders />
					</Row>
				</Col>
			</Row>
		</Container>
	);
};

export default Header;
