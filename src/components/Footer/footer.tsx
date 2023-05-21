import { useContext, useState } from "react";
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, RedditShareButton, RedditIcon, LinkedinShareButton, LinkedinIcon } from "react-share";
import { Link } from "react-scroll";
import "./footer.scss";
import { Col, Container, Row } from "react-bootstrap";
import { TranslationContext } from "../../translations/components/TranslationContext";

const Footer = () => {
	const startingOffset = -66;
	const [offset, setOffset] = useState(startingOffset);
	const { getTranslation } = useContext(TranslationContext);

	window.addEventListener("resize", () => {
		setOffset(-66);
	});

	return (
		<Container className='footer-container'>
			<Row className='footer-row'>
				<Col className='basic-info-column' xs={12} sm={12} md={12} lg={4}>
					<a href='tel:+38670892271'>(+386) 070 892 271</a>
					<a href='mailto: matija.kocev@gmail.com'>matija.kocev@gmail.com</a>
					<p style={{ color: "white" }}>Trzin, Slovenia</p>
				</Col>
				<Col className='footer-navigation-links' xs={12} sm={12} md={12} lg={4}>
					<Col className='footer-navigation-left'>
						<Link smooth={true} to='about-me' offset={offset} ignoreCancelEvents={true} href='#' duration={2}>
							{getTranslation("Navigation_AboutMe")}
						</Link>
						<Link smooth={true} to='projects' offset={offset} ignoreCancelEvents={true} href='#' duration={2}>
							{getTranslation("Navigation_Projects")}
						</Link>
						<Link smooth={true} to='education' offset={offset} ignoreCancelEvents={true} href='#' duration={2}>
							{getTranslation("Navigation_Education")}
						</Link>
					</Col>
					<Col className='footer-navigation-right'>
						<Link smooth={true} to='experience' offset={offset} ignoreCancelEvents={true} href='#' duration={2}>
							{getTranslation("Navigation_Experience")}
						</Link>
						<Link smooth={true} to='skills' offset={offset} ignoreCancelEvents={true} href='#' duration={2}>
							{getTranslation("Navigation_Skills")}
						</Link>
						<Link smooth={true} to='interests' offset={offset} ignoreCancelEvents={true} href='#' duration={2}>
							{getTranslation("Navigation_Interests")}
						</Link>
					</Col>
				</Col>

				<Col className='footer-social-links' xs={12} sm={12} md={12} lg={4}>
					<FacebookShareButton url={"https://matijakocevar.github.io/portfolio_V2/"} quote={"Matija Kočevar's portfolio"}>
						<FacebookIcon size={36} />
					</FacebookShareButton>
					<TwitterShareButton url={"https://matijakocevar.github.io/portfolio_V2/"}>
						<TwitterIcon size={36} />
					</TwitterShareButton>
					<RedditShareButton url={"https://matijakocevar.github.io/portfolio_V2/"}>
						<RedditIcon size={36} />
					</RedditShareButton>
					<LinkedinShareButton url={"https://matijakocevar.github.io/portfolio_V2/"}>
						<LinkedinIcon size={36} />
					</LinkedinShareButton>
				</Col>
			</Row>
		</Container>
	);
};

export default Footer;
