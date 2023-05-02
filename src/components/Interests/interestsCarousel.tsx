import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./interests.scss";
import SvgIcon from "../Shared/SvgIcon/SvgIcon";

const InterestsCarousel = () => {
	return (
		<Carousel showArrows={true} infiniteLoop={true} showThumbs={false} showStatus={false} autoPlay={false} interval={3000}>
			<>
				<div className='bgcircle'>
					<SvgIcon iconName='terminal' svgProp={{ className: "bgicon" }} />
				</div>
				<div className='myCarousel'>
					<h3>Become a better frontend developer</h3>
					<p>I am doing everything I can to further my skills and knowledge.</p>
				</div>
			</>
			<>
				<div className='bgcircle'>
					<SvgIcon iconName='mobileMono' svgProp={{ className: "bgicon" }} />
				</div>
				<div className='myCarousel'>
					<h3>Create an amazing app</h3>
					<p>I want to gain enough skills to create a useful and entertaining app.</p>
				</div>
			</>
			<>
				<div className='bgcircle'>
					<SvgIcon iconName='lightBulb' svgProp={{ className: "bgicon" }} />
				</div>
				<div className='myCarousel'>
					<h3>Learn new skills</h3>
					<p>I am always on the hunt for new knowledge and opportunities to expand what i know.</p>
				</div>
			</>
		</Carousel>
	);
};

export default InterestsCarousel;
