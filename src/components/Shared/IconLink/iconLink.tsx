import SvgIcon from "../SvgIcon/SvgIcon";
import "./IconLink.scss";

export const IconLink = (props: { iconName: string; href: string; svgProp: React.SVGProps<SVGSVGElement> | undefined }) => {
	return (
		<a className='icon-link' href={props.href} target='_blank' rel='noopener noreferrer'>
			<SvgIcon iconName={props.iconName} svgProp={props.svgProp}></SvgIcon>
		</a>
	);
};
