import React from 'react';
import './PopupBox.scss';

type PopupBoxProps = {
  content: JSX.Element;
  onClose: () => void;
};

const PopupBox: React.FC<PopupBoxProps> = ({ content, onClose }) => {
  return (
    <>
      <div className='popup-box-background' onClick={onClose}></div>
      <div className='popup-box'>
        <div className='box'>
          <span className='close-icon' onClick={onClose}>
            &times;
          </span>
          {content}
        </div>
      </div>
    </>
  );
};

export default PopupBox;
