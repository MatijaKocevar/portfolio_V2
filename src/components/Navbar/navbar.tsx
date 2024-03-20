import { useContext, useEffect, useRef, useState } from "react";
import "./navbar.scss";
import { Link } from "react-scroll";
import Logo from "../../images/logo.png";
import ToggleSwitch from "../Shared/ToogleSwitch/ToggleSwitch";
import { TranslationContext } from "../../translations/components/TranslationContext";
import { IconLink } from "../Shared/IconLink/iconLink";
import { DownloadFile } from "../Shared/DownloadFile/DownloadFile";

const NavBar = () => {
    const { setLanguage, getTranslation, language } = useContext(TranslationContext);

    const startingOffset = -58;
    const startingToggle = window.innerWidth < 1199 ? "collapse" : "keep";
    const [offset, setOffset] = useState(startingOffset);
    const [toggle, setToggle] = useState(startingToggle);
    const navbarRef = useRef<HTMLDivElement>(null);
    const hamburgerRef = useRef<HTMLButtonElement>(null);
    const [navbarVisible, setNavbarVisible] = useState(true);
    const lastScrollRef = useRef(window.scrollY);
    const inactivityTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const cvPath =
        language === "slo"
            ? "https://drive.google.com/file/d/15ySI6terqnLd0efA1awH19adB9euHqQs/view?usp=sharing"
            : "https://drive.google.com/file/d/1sdTFxbLUjzXg92JSD6KeJ0TA_qlzC6qi/view?usp=sharing";

    const onLanguageChange = (language: string) => {
        setLanguage(language);
    };

    useEffect(() => {
        const handleResize = () => {
            setOffset(-58);
            setToggle(window.innerWidth < 1199 ? "collapse" : "keep");
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (window.scrollY > 67) setNavbarVisible(lastScrollRef.current > currentScrollY || currentScrollY < 10);
            lastScrollRef.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const resetNavbarVisibilityTimer = () => {
        if (inactivityTimeoutRef.current) {
            clearTimeout(inactivityTimeoutRef.current);
        }

        inactivityTimeoutRef.current = setTimeout(() => {
            if (window.scrollY > 67) setNavbarVisible(false);
        }, 2000);
    };

    useEffect(() => {
        document.addEventListener("mousemove", resetNavbarVisibilityTimer);
        document.addEventListener("scroll", resetNavbarVisibilityTimer);
        document.addEventListener("touchstart", resetNavbarVisibilityTimer);

        resetNavbarVisibilityTimer();

        return () => {
            if (inactivityTimeoutRef.current) {
                clearTimeout(inactivityTimeoutRef.current);
            }
            document.removeEventListener("mousemove", resetNavbarVisibilityTimer);
            document.removeEventListener("scroll", resetNavbarVisibilityTimer);
            document.removeEventListener("touchstart", resetNavbarVisibilityTimer);
        };
    }, []);

    return (
        <nav className={`navbar fixed-top navbar-expand-lg navbar-dark bg-dark p-2 ${navbarVisible ? "" : "hidden"}`}>
            <Link
                smooth={true}
                to='root'
                className='navbar-brand'
                href='#'
                duration={2}
                onClick={() => {
                    if (hamburgerRef.current?.ariaExpanded === "true" && navbarRef.current) {
                        hamburgerRef.current.click();
                    }
                }}
            >
                <img className='logo' src={Logo} alt='logo' />
            </Link>
            <button
                id='navbar-toggler'
                className='navbar-toggler'
                type='button'
                data-toggle={toggle}
                data-target='#navbarText'
                aria-controls='navbarText'
                aria-expanded='false'
                aria-label='Toggle navigation'
                ref={hamburgerRef}
            >
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarText' ref={navbarRef}>
                <ul className='navbar-nav mr-auto'>
                    <li className='nav-item'>
                        <Link
                            smooth={true}
                            to='about-me'
                            offset={offset}
                            duration={2}
                            ignoreCancelEvents={true}
                            className='nav-link'
                            href='#'
                            data-toggle={toggle}
                            data-target='#navbarText'
                            onClick={() => {
                                if (hamburgerRef.current?.ariaExpanded === "true" && navbarRef.current) {
                                    hamburgerRef.current.click();
                                }
                            }}
                        >
                            {getTranslation("Navigation_AboutMe")}
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            smooth={true}
                            to='projects'
                            offset={offset}
                            duration={2}
                            ignoreCancelEvents={true}
                            className='nav-link'
                            href='#'
                            data-toggle={toggle}
                            data-target='#navbarText'
                            onClick={() => {
                                if (hamburgerRef.current?.ariaExpanded === "true" && navbarRef.current) {
                                    hamburgerRef.current.click();
                                }
                            }}
                        >
                            {getTranslation("Navigation_Projects")}
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            smooth={true}
                            to='education'
                            offset={offset}
                            duration={2}
                            ignoreCancelEvents={true}
                            className='nav-link'
                            href='#'
                            data-toggle={toggle}
                            data-target='#navbarText'
                            onClick={() => {
                                if (hamburgerRef.current?.ariaExpanded === "true" && navbarRef.current) {
                                    hamburgerRef.current.click();
                                }
                            }}
                        >
                            {getTranslation("Navigation_Education")}
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            smooth={true}
                            to='experience'
                            offset={offset}
                            duration={2}
                            ignoreCancelEvents={true}
                            className='nav-link'
                            href='#'
                            data-toggle={toggle}
                            data-target='#navbarText'
                            onClick={() => {
                                if (hamburgerRef.current?.ariaExpanded === "true" && navbarRef.current) {
                                    hamburgerRef.current.click();
                                }
                            }}
                        >
                            {getTranslation("Navigation_Experience")}
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            smooth={true}
                            to='skills'
                            offset={offset}
                            duration={2}
                            ignoreCancelEvents={true}
                            className='nav-link'
                            href='#'
                            data-toggle={toggle}
                            data-target='#navbarText'
                            onClick={() => {
                                if (hamburgerRef.current?.ariaExpanded === "true" && navbarRef.current) {
                                    hamburgerRef.current.click();
                                }
                            }}
                        >
                            {getTranslation("Navigation_Skills")}
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            smooth={true}
                            to='interests'
                            offset={offset}
                            duration={2}
                            ignoreCancelEvents={true}
                            className='nav-link'
                            href='#'
                            data-toggle={toggle}
                            data-target='#navbarText'
                            onClick={() => {
                                if (hamburgerRef.current?.ariaExpanded === "true" && navbarRef.current) {
                                    hamburgerRef.current.click();
                                }
                            }}
                        >
                            {getTranslation("Navigation_Interests")}
                        </Link>
                    </li>
                </ul>
                <div className='navbar-right'>
                    <div className='navbar-icon-links'>
                        <IconLink iconName='github' href='https://github.com/MatijaKocevar' title='GitHub' svgProp={{ width: "2rem", height: "2rem" }} />
                        <IconLink iconName='linkedin' href='https://www.linkedin.com/in/matija-ko%C4%8Devar-59a198109/' title='Linkedin' svgProp={{ width: "2rem", height: "2rem" }} />
                        <DownloadFile path={cvPath} title='Open CV' iconName='resumeRound' svgProp={{ width: "2rem", height: "2rem" }} />
                    </div>
                    <div className='navbar-language-switch'>
                        <ToggleSwitch title='Change language' onChange={onLanguageChange} first='en' second='slo' />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
