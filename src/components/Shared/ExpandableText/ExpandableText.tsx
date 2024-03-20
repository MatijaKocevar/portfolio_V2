import { useEffect, useRef, useState } from "react";
import "./ExpandableText.scss";

const ExpandableText = (props: { content: string | JSX.Element }) => {
    const [isExpanded, setIsExpanded] = useState(window.innerWidth > 991 ? true : false);
    const [isMobile, setIsMobile] = useState(false);
    const content = useRef<JSX.Element>();

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    addEventListener("resize", () => {
        if (window.innerWidth > 991) {
            setIsMobile(false);
            setIsExpanded(true);
        } else {
            setIsMobile(true);
            setIsExpanded(false);
        }
    });

    useEffect(() => {
        if (!isExpanded) {
            content.current = <div className='expandable-section__content'>{props.content}</div>;
        } else {
            content.current = <div></div>;
        }
    }, [isMobile, isExpanded, props.content]);

    return (
        <div className='expandable-section'>
            {isMobile && (
                <button className='expandable-section__button' onClick={toggleExpand}>
                    {isExpanded ? "Less info" : "More info"}
                </button>
            )}
            {isExpanded && <div className='expandable-section__content'>{props.content}</div>}
        </div>
    );
};

export default ExpandableText;
