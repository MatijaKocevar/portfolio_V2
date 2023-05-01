import React, { useState } from "react";
import "./FlipBox.scss";

interface BoxProps {
	frontContent: React.ReactNode;
	backContent: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({ frontContent, backContent }) => {
	const [flipped, setFlipped] = useState(false);

	const handleBoxClick = () => {
		setFlipped(!flipped);
	};

	return (
		<div className={`flip-box ${flipped ? "flipped" : ""}`} onClick={handleBoxClick}>
			<div className='front'>{frontContent}</div>
			<div className='back'>{backContent}</div>
		</div>
	);
};

export default Box;
