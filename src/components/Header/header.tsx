import React, { useContext, useRef, useState } from "react";
import "./header.scss";
import { TranslationContext } from "../../translations/components/TranslationContext";

const TEXTS = ["Creative", "Hard working", "Positive"];

const Header = () => {
	const { getTranslation } = useContext(TranslationContext);
	const ref = useRef<HTMLDivElement>(null);

	const [index, setIndex] = useState(0);

	React.useEffect(() => {
		const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
		return () => clearTimeout(intervalId);
	}, []);

	return (
		<div id='home' className='header-wraper' ref={ref}>
			<div className='main-info'>
				<h1 className='heading'>portfolio</h1>
				<h1 className='heading' style={{ color: "red" }}>
					{getTranslation("Header_Subtitle")}
				</h1>
			</div>
		</div>
	);
};

export default Header;
