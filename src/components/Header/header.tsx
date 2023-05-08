import { useContext } from "react";
import "./header.scss";
import { TranslationContext } from "../../translations/components/TranslationContext";
// import SnakeGame from "../SnakeGame/SnakeGame";
// import GameBoard from "../SpaceInvaders/SpaceInvaders";
import { Col, Container, Row } from "react-bootstrap";
import Author from "../../images/me.jpg";
import SpaceInvaders from "../SpaceInvaders/SpaceInvaders";
import SvgIcon from "../Shared/SvgIcon/SvgIcon";

const Header = () => {
	const { getTranslation } = useContext(TranslationContext);

	return (
		<Container id='home' className='header-wraper'>
			<Row className='main-info'>
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
			<Row className='games'>
				{/* <Col>
					<SnakeGame />
				</Col> */}
				<Col className='game'>
					<Row className='heading-row'>
						<h1>Work in progress: SPACE INVADERS</h1>
						<p>
							<span style={{ color: "white" }}>Just trying to hone my skills and have some fun.</span>
							<br />
							<a
								style={{ color: "white" }}
								href='https://github.com/MatijaKocevar/portfolio_V2/tree/master/src/components/SpaceInvaders'
								target='_blank'
								title='Open in GitHub'
								rel='noopener noreferrer'
							>
								CODE
							</a>
						</p>
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
