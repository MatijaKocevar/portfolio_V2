import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useContext, useState } from "react";
import { TranslationContext } from "../../../translations/components/TranslationContext";
import SvgIcon from "../../Shared/SvgIcon/SvgIcon";
import { Row } from "react-bootstrap";
import PopupBox from "../../Shared/PopupBox/PopupBox";
import "./ShowcaseCarousel.scss";
import zeldaClone from "../../../images/zelda-clone/zelda-clone.png";
import anasPlaceImg from "../../../images/anas-place/anas-place.png";
import anasPlaceThumbImg from "../../../images/anas-place/anas-place-thumb.png";

const InterestsCarousel = () => {
    const { getTranslation } = useContext(TranslationContext);
    const [showPopupSpaceInvaders, setShowPopupSpaceInvaders] = useState(false);
    const [showPopupAnasPlace, setShowPopupAnasPlace] = useState(false);

    const magnifyingGlass = (
        <SvgIcon iconName='magnifyingGlass' svgProp={{ width: "2rem", height: "2rem", fill: "white" }} />
    );

    const onOpenLiveZelda = () => {
        window.open("https://matijakocevar.github.io/zelda-clone/", "_blank");
    };

    const onOpenLiveAnasPlace = () => {
        window.open("https://anasplaces.com", "_blank");
    };

    const spaceInvadersContent = (
        <div className='popup-content-wrapper'>
            <div className='titles'>
                <div className='popup-content__title'>{getTranslation("Showcase_Zelda-Clone")}</div>
                <div className='popup-content__sub-title'>{getTranslation("Showcase_Zelda-Clone_Description")}</div>
            </div>
            <button onClick={onOpenLiveZelda}>OPEN LIVE</button>
            <div className='popup-content'>
                <div className='coming-soon__popup'>
                    <iframe src='https://matijakocevar.github.io/zelda-clone/' title='A Tie to the past'></iframe>
                </div>
            </div>
        </div>
    );

    const anasPlaceContent = (
        <div className='popup-content-wrapper'>
            <div className='titles'>
                <div className='popup-content__title'>{getTranslation("Showcase_Anas-Place")}</div>
                <div className='popup-content__sub-title'>{getTranslation("Showcase_Anas-Place_Description")}</div>
            </div>
            <button onClick={onOpenLiveAnasPlace}>OPEN LIVE</button>
            <div className='popup-content'>
                <div className='coming-soon__popup'>
                    <img src={anasPlaceImg} alt='zelda-clone' />
                </div>
            </div>
        </div>
    );

    return (
        <>
            {showPopupSpaceInvaders && (
                <PopupBox content={spaceInvadersContent} onClose={() => setShowPopupSpaceInvaders(false)} />
            )}
            {showPopupAnasPlace && <PopupBox content={anasPlaceContent} onClose={() => setShowPopupAnasPlace(false)} />}
            <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={5000}
                className='carousel-wrapper'
            >
                <div className='project-wrapper'>
                    <Row className='heading-row'>
                        <h1>{getTranslation("Showcase_Zelda-Clone")}</h1>
                        <h3>{getTranslation("Header_WIP-Title")}</h3>
                    </Row>
                    <Row className='project-content'>
                        <div className='project' role='presentation' onClick={() => setShowPopupSpaceInvaders(true)}>
                            <div className='project-image-wrapper'>
                                <div className='project-icon'>{magnifyingGlass}</div>
                                <img src={zeldaClone} alt='zelda-clone' className='project-img' />
                            </div>
                        </div>
                    </Row>
                    <Row className='subtitle-links'>
                        <a
                            href='https://github.com/MatijaKocevar/zelda-clone'
                            target='_blank'
                            title='Open in GitHub'
                            rel='noopener noreferrer'
                        >
                            Code
                        </a>
                    </Row>
                </div>
                <div className='project-wrapper'>
                    <Row className='heading-row'>
                        <h1>{getTranslation("Showcase_Anas-Place")}</h1>
                        <h3>{getTranslation("Header_WIP-Title")}</h3>
                    </Row>
                    <Row className='project-content'>
                        <div className='project' role='presentation' onClick={() => setShowPopupAnasPlace(true)}>
                            <div className='project-image-wrapper'>
                                <div className='project-icon'>{magnifyingGlass}</div>
                                <img src={anasPlaceThumbImg} alt='zelda-clone' className='project-img' />
                            </div>
                        </div>
                    </Row>
                    <Row className='subtitle-links'>
                        <a
                            href='https://github.com/MatijaKocevar/anas-place'
                            target='_blank'
                            title='Open in GitHub'
                            rel='noopener noreferrer'
                        >
                            Code
                        </a>
                    </Row>
                </div>
            </Carousel>
        </>
    );
};

export default InterestsCarousel;
