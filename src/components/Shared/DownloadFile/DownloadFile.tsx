import SvgIcon from "../SvgIcon/SvgIcon";
import "./DownloadFile.scss";

export const DownloadFile = (props: {
    path: string;
    title: string;
    iconName: string;
    svgProp: React.SVGProps<SVGSVGElement> | undefined;
}) => {
    return (
        <a className='icon-link' href={props.path} target='_blank' rel='noopener noreferrer' title={props.title ?? ""}>
            <SvgIcon iconName={props.iconName} svgProp={props.svgProp}></SvgIcon>
        </a>
    );
};
