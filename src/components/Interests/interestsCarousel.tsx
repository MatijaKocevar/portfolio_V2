import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./interests.scss";
import SvgIcon from "../Shared/SvgIcon/SvgIcon";
import { useContext } from "react";
import { TranslationContext } from "../../translations/components/TranslationContext";

const InterestsCarousel = () => {
	const { getTranslation } = useContext(TranslationContext);

	return (
		<Carousel showArrows={true} infiniteLoop={true} showThumbs={false} showStatus={false} autoPlay={true} interval={5000}>
			<>
				<div className='bgcircle'>
					<SvgIcon iconName='terminal' svgProp={{ className: "bgicon" }} />
				</div>
				<div className='myCarousel'>
					<h3>{getTranslation("Interests_Developer_Title")}</h3>
					<p>{getTranslation("Interests_Developer_Description")}</p>
				</div>
			</>
			<>
				<div className='bgcircle'>
					<SvgIcon iconName='mobileMono' svgProp={{ className: "bgicon" }} />
				</div>
				<div className='myCarousel'>
					<h3>{getTranslation("Interests_App_Title")}</h3>
					<p>{getTranslation("Interests_App_Description")}</p>
				</div>
			</>
			<>
				<div className='bgcircle'>
					<SvgIcon iconName='lightBulb' svgProp={{ className: "bgicon" }} />
				</div>
				<div className='myCarousel'>
					<h3>{getTranslation("Interests_NewSkills_Title")}</h3>
					<p>{getTranslation("Interests_NewSkills_Description")}</p>
				</div>
			</>
			<>
				<div className='bgcircle'>
					<SvgIcon iconName='music' svgProp={{ className: "bgicon" }} />
				</div>
				<div className='myCarousel'>
					<h3>{getTranslation("Interests_Music_Title")}</h3>
					<p>{getTranslation("Interests_Music_Description")}</p>
				</div>
			</>
		</Carousel>
	);
};

export default InterestsCarousel;
