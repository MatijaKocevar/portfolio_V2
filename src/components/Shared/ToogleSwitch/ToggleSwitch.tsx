import React, { useState } from "react";
import "./ToggleSwitch.scss";

interface ToggleSwitchProps {
	onChange: (language: string) => void;
	title?: string;
	first: string;
	second: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ onChange, title, first, second }) => {
	const [isChecked, setIsChecked] = useState<boolean>(false);

	const handleChange = () => {
		setIsChecked(!isChecked);
		const newLanguage = isChecked ? first : second;
		onChange(newLanguage);
	};

	return (
		<div className={`toggle-switch ${isChecked ? "toggle-switch-checked" : ""}`} title={title ?? ""}>
			<label className='toggle-switch-toggle' role='presentation' htmlFor='toggleSwitch' onClick={handleChange}>
				<input style={{ display: "none" }} name='toggleSwitch'></input>
			</label>

			<div className='toggle-switch-labels'>
				<div className={`toggle-switch-label ${!isChecked ? "toggle-switch-label-selected" : ""}`}>{first}</div>
				<div className={`toggle-switch-label ${isChecked ? "toggle-switch-label-selected" : ""}`}>{second}</div>
			</div>
		</div>
	);
};

export default ToggleSwitch;
