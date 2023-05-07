import React, { useState } from "react";
import "./ToggleSwitch.scss";

interface ToggleSwitchProps {
	onChange: (language: string) => void;
	language: string;
	title?: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ onChange, language, title }) => {
	const [isChecked, setIsChecked] = useState<boolean>(language === "slo");

	const handleChange = () => {
		setIsChecked(!isChecked);
		const newLanguage = isChecked ? "en" : "slo";
		onChange(newLanguage);
	};

	return (
		<div className={`toggle-switch ${isChecked ? "toggle-switch-checked" : ""}`} title={title ?? ""}>
			<label className='toggle-switch-toggle' role='presentation' htmlFor='toggleSwitch' onClick={handleChange}>
				<input style={{ display: "none" }} name='toggleSwitch'></input>
			</label>

			<div className='toggle-switch-labels'>
				<div className={`toggle-switch-label ${!isChecked ? "toggle-switch-label-selected" : ""}`}>EN</div>
				<div className={`toggle-switch-label ${isChecked ? "toggle-switch-label-selected" : ""}`}>SLO</div>
			</div>
		</div>
	);
};

export default ToggleSwitch;
