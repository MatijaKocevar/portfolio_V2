import React, { useState } from 'react';
import './ToggleSwitch.scss';

interface Props {
  onChange: (language: string) => void;
  language: string;
}

const ToggleSwitch: React.FC<Props> = ({ onChange, language }) => {
  const [isChecked, setIsChecked] = useState<boolean>(language === 'slo');

  const handleChange = () => {
    setIsChecked(!isChecked);
    const newLanguage = isChecked ? 'en' : 'slo';
    onChange(newLanguage);
  };

  return (
    <div className={`toggle-switch ${isChecked ? 'toggle-switch-checked' : ''}`}>
      <label className='toggle-switch-toggle' htmlFor='toggleSwitch' onClick={handleChange} />
      <div className='toggle-switch-labels'>
        <div className={`toggle-switch-label ${!isChecked ? 'toggle-switch-label-selected' : ''}`}>EN</div>
        <div className={`toggle-switch-label ${isChecked ? 'toggle-switch-label-selected' : ''}`}>SLO</div>
      </div>
    </div>
  );
};

export default ToggleSwitch;