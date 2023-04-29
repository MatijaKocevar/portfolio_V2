import { Col, Container, Row } from "react-bootstrap";
import "./education.scss";
import { forwardRef, useContext, useRef } from "react";
import { TranslationContext } from "../../translations/components/TranslationContext";

const Education = forwardRef<HTMLInputElement>((_, ref) => {
	const { getTranslation } = useContext(TranslationContext);

	return (
		<Container id='timeline' className='education' ref={ref}>
			<Row className='heading-row'>
				<h1>{getTranslation("Navigation_Education")}</h1>
			</Row>
			<Row className='timeline-wrapper'>
				{/* - */}
				<Row>
					<Col className='timeline-block timeline-block-left' xs={12} sm={12} md={12} lg={6}>
						<div className='line-wrapper'>
							<div className='line'></div>
							<div className='marker'></div>
						</div>
						<div className='timeline-content'>{getTranslation("Education_Electrotechnician")}</div>
					</Col>
					<Col xs={0} sm={0} md={0} lg={6}></Col>
				</Row>
				{/* - */}
				<Row>
					<Col xs={0} sm={0} md={0} lg={6}></Col>
					<Col className='timeline-block timeline-block-right' xs={12} sm={12} md={12} lg={6}>
						<div className='line-wrapper'>
							<div className='line'></div>
							<div className='marker'></div>
						</div>
						<div className='timeline-content'>{getTranslation("Education_RIT")}</div>
					</Col>
				</Row>
				{/* - */}
				<Row>
					<Col className='timeline-block timeline-block-left' xs={12} sm={12} md={12} lg={6}>
						<div className='line-wrapper'>
							<div className='line'></div>
							<div className='marker'></div>
						</div>
						<div className='timeline-content'>{getTranslation("Education_Personal")}</div>
					</Col>
					<Col xs={0} sm={0} md={0} lg={6}></Col>
				</Row>
			</Row>
		</Container>
	);
});

export default Education;
