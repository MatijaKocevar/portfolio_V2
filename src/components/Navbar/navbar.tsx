import { useContext, useEffect, useRef, useState } from "react";
import "./navbar.scss";
import { Link } from "react-scroll";
import logo from "../../images/logo.png";
import ToggleSwitch from "../Shared/ToogleSwitch/ToggleSwitch";
import { TranslationContext } from "../../translations/components/TranslationContext";
import { IconLink } from "../Shared/IconLink/iconLink";
import { DownloadFile } from "../Shared/DownloadFile/DownloadFile";

const NavBar = () => {
	const { setLanguage, getTranslation, language } = useContext(TranslationContext);

	const startingOffset = -66;
	const startingToggle = window.innerWidth < 1199 ? "collapse" : "keep";
	const [offset, setOffset] = useState(startingOffset);
	const [toggle, setToggle] = useState(startingToggle);
	const navbarRef = useRef<HTMLDivElement>(null);
	const hamburgerRef = useRef<HTMLButtonElement>(null);

	const cvPath = language === "slo" ? "/src/cv/slo/cv_sl.pdf" : "/src/cv/en/cv_eng.pdf";
	const cvName = language === "slo" ? "Življenjepis_MatijaKočevar.pdf" : "Resume_MatijaKočevar.pdf";

	const onLanguageChange = (language: string) => {
		setLanguage(language);
	};

	useEffect(() => {
		const handleResize = () => {
			setOffset(-66);
			setToggle(window.innerWidth < 1199 ? "collapse" : "keep");
		};

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<nav className='navbar fixed-top navbar-expand-lg navbar-dark bg-dark p-2'>
			<Link
				smooth={true}
				to='home'
				className='navbar-brand'
				href='#'
				duration={2}
				onClick={() => {
					if (hamburgerRef.current?.ariaExpanded === "true" && navbarRef.current) {
						hamburgerRef.current.click();
					}
				}}
			>
				<img className='logo' src={logo} alt='logo' />
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
						<DownloadFile path={cvPath} fileName={cvName} title='Download CV' iconName='resumeRound' svgProp={{ width: "2rem", height: "2rem" }} />
					</div>
					<div className='navbar-language-switch'>
						<ToggleSwitch title='Change language' onChange={onLanguageChange} language='en' />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
