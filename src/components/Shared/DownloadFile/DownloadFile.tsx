import { useCallback } from "react";
import SvgIcon from "../SvgIcon/SvgIcon";
import "./DownloadFile.scss";

export const DownloadFile = (props: { path: string; fileName: string; title: string; iconName: string; svgProp: React.SVGProps<SVGSVGElement> | undefined }) => {
	const downloadPdf = useCallback(
		(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
			e.preventDefault();
			fetch(props.path)
				.then((response) => response.blob())
				.then((blob) => {
					console.log(blob);
					const url = window.URL.createObjectURL(new Blob([blob]));
					const link = document.createElement("a");
					link.href = url;
					link.setAttribute("download", props.fileName);
					document.body.appendChild(link);
					link.click();
					document.body.removeChild(link);
				});
		},
		[props.path]
	);

	return (
		<a className='icon-link' href='#' target='_blank' rel='noopener noreferrer' title={props.title ?? ""} onClick={downloadPdf}>
			<SvgIcon iconName={props.iconName} svgProp={props.svgProp}></SvgIcon>
		</a>
	);
};
