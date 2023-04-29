import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTable, faDesktop, faFileCode, faPenFancy } from "@fortawesome/free-solid-svg-icons";
import "./skills.scss";
import { Col, Container, Row } from "react-bootstrap";
import FlipBox from "../Shared/FlipBox/FlipBox";
import { forwardRef, useContext, useRef } from "react";
import { TranslationContext } from "../../translations/components/TranslationContext";
import { FaReact } from "react-icons/fa";

const Skills = () => {
	const { getTranslation } = useContext(TranslationContext);

	return (
		<>
			<Container id='skills' className='skills'>
				<Row className='heading-row'>
					<h1>{getTranslation("Navigation_Skills")}</h1>
				</Row>
				<Row>
					{/* - */}
					<Col lg={3} md={6} sm={6} xs={12}>
						<FlipBox
							frontContent={
								<div className='box'>
									<div className='circle'>
										<FontAwesomeIcon className='icon' icon={faFileCode} size='3x' />
									</div>
									<h3>{getTranslation("Skills_WebDevelopment_Title")}</h3>
								</div>
							}
							backContent={
								<div className='box'>
									<FaReact />
									<p>{getTranslation("Skills_WebDevelopment")}</p>
								</div>
							}
						/>
					</Col>
					{/* - */}
					<Col lg={3} md={6} sm={6} xs={12}>
						<FlipBox
							frontContent={
								<div className='box'>
									<div className='circle'>
										<FontAwesomeIcon className='icon' icon={faPenFancy} size='3x' />
									</div>
									<h3>{getTranslation("Skills_Design_Title")}</h3>
								</div>
							}
							backContent={
								<div className='box'>
									<p>{getTranslation("Skills_Design")}</p>
								</div>
							}
						/>
					</Col>
					{/* - */}
					<Col lg={3} md={6} sm={6} xs={12}>
						<FlipBox
							frontContent={
								<div className='box'>
									<div className='circle'>
										<FontAwesomeIcon className='icon' icon={faTable} size='3x' />
									</div>
									<h3>{getTranslation("Skills_DataVisualising_Title")}</h3>
								</div>
							}
							backContent={
								<div className='box'>
									<p>{getTranslation("Skills_DataVisualising")}</p>
								</div>
							}
						/>
					</Col>
					{/* - */}
					<Col lg={3} md={6} sm={6} xs={12}>
						<FlipBox
							frontContent={
								<div className='box'>
									<div className='circle'>
										<FontAwesomeIcon className='icon' icon={faDesktop} size='3x' />
									</div>
									<h3>{getTranslation("Skills_PcMobileRepair_Title")}</h3>
								</div>
							}
							backContent={
								<div className='box'>
									<p>{getTranslation("Skills_PcMobileRepair")}</p>
								</div>
							}
						/>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Skills;
