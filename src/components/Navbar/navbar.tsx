import { useContext, useEffect, useRef, useState } from "react";
import "./navbar.scss";
import { Link } from "react-scroll";
import logo from "../../images/logo.png";
import ToggleSwitch from "../Shared/ToogleSwitch/ToggleSwitch";
import { TranslationContext } from "../../translations/components/TranslationContext";
import { FaGithub, FaLinkedin, FaLinkedinIn } from "react-icons/fa";

const GitHubLink = (props: { href: string }) => {
	return (
		<a className='icon-link' href={props.href} target='_blank' rel='noopener noreferrer'>
			<FaGithub />
		</a>
	);
};

const LinkedinLink = (props: { href: string }) => {
	return (
		<a className='icon-link' href={props.href} target='_blank' rel='noopener noreferrer'>
			<FaLinkedin />
		</a>
	);
};

const NavBar = (props: { sectionRefs: React.RefObject<HTMLDivElement>[] }) => {
	const { setLanguage, getTranslation } = useContext(TranslationContext);

	const startingOffset = -66;
	const startingToggle = window.innerWidth < 1199 ? "collapse" : "keep";
	const [offset, setOffset] = useState(startingOffset);
	const [toggle, setToggle] = useState(startingToggle);
	const hamburgerRef = useRef<HTMLButtonElement>(null);
	// Intersection Observer callback
	const handleIntersection = (entries: IntersectionObserverEntry[]) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				setActiveLink(entry.target.id);
			}
		});
	};
	// Create an Intersection Observer instance and attach it to each section ref
	const observer = new IntersectionObserver(handleIntersection, {
		root: null,
		rootMargin: "0px",
		threshold: 0.5,
	});

	window.addEventListener("resize", () => {
		setOffset(-66);
		setToggle(window.innerWidth < 1199 ? "collapse" : "keep");
	});

	const onLanguageChange = (language: string) => {
		setLanguage(language);
	};

	const [activeLink, setActiveLink] = useState<string>("");

	props.sectionRefs.forEach((ref) => {
		if (ref.current) {
			observer.observe(ref.current);
		}
	});

	useEffect(() => {
		const handleScroll = () => {
			const sectionIds = props.sectionRefs.map((ref) => ref.current?.id);
			const activeSectionIndex = sectionIds.findIndex((id) => {
				const section = document.getElementById(id as string);
				if (!section) return false;
				const rect = section.getBoundingClientRect();
				return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
			});

			console.log(sectionIds[activeSectionIndex]);
			setActiveLink(sectionIds[activeSectionIndex] || "");
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [props.sectionRefs]);

	return (
		<nav
			className='navbar fixed-top navbar-expand-lg navbar-dark bg-dark p-2'
			onBlur={() => {
				console.log(hamburgerRef.current?.ariaExpanded);
				// if (hamburgerRef.current?.ariaExpanded === 'true') hamburgerRef.current?.click();
			}}
		>
			<Link smooth={true} to='home' className='navbar-brand' href='#' duration={2}>
				<img className='logo' src={logo} alt='logo' />
			</Link>
			<button
				id='navbar-toggler'
				className='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#navbarText'
				aria-controls='navbarText'
				aria-expanded='false'
				aria-label='Toggle navigation'
				ref={hamburgerRef}
			>
				<span className='navbar-toggler-icon'></span>
			</button>
			<div className='collapse navbar-collapse' id='navbarText'>
				<ul className='navbar-nav mr-auto'>
					<li className='nav-item'>
						<Link
							smooth={true}
							to='about-me'
							offset={offset}
							duration={2}
							ignoreCancelEvents={true}
							className={activeLink === "aboutMe" ? "active" : "" + "nav-link"}
							href='#'
							data-toggle={toggle}
							data-target='#navbarText'
							// onClick={() => hamburgerRef.current?.click()}
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
							// onClick={() => hamburgerRef.current?.click()}
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
							// onClick={() => hamburgerRef.current?.click()}
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
							// onClick={() => hamburgerRef.current?.click()}
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
							// onClick={() => hamburgerRef.current?.click()}
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
							// onClick={() => hamburgerRef.current?.click()}
						>
							{getTranslation("Navigation_Interests")}
						</Link>
					</li>
					<li className='nav-item'>
						<Link
							smooth={true}
							to='contacts'
							offset={offset}
							duration={2}
							ignoreCancelEvents={true}
							className='nav-link'
							href='#'
							data-toggle={toggle}
							data-target='#navbarText'
							// onClick={() => hamburgerRef.current?.click()}
						>
							{getTranslation("Navigation_ContactMe")}
						</Link>
					</li>
				</ul>
				<div className='navbar-right'>
					<GitHubLink href='https://github.com/MatijaKocevar' />
					<LinkedinLink href='https://www.linkedin.com/in/matija-ko%C4%8Devar-59a198109/' />
					<ToggleSwitch onChange={onLanguageChange} language='en' />
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
