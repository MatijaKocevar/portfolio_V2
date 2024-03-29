import React, { useEffect } from "react";
import "./PopupBox.scss";

type PopupBoxProps = {
    content: JSX.Element;
    onClose: () => void;
};

const PopupBox: React.FC<PopupBoxProps> = ({ content, onClose }) => {
    useEffect(() => {
        document.body.classList.add("no-scroll");

        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, []);

    return (
        <>
            <div className='popup-box-background' role='presentation' onClick={onClose}></div>
            <div className='popup-box'>
                <span className='close-icon' role='presentation' onClick={onClose}>
                    &times;
                </span>
                {content}
            </div>
        </>
    );
};

export default PopupBox;
