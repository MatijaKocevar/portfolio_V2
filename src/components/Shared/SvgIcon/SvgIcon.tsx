import useWindowSize from "../../../hooks/useWindowSize";
import { useDynamicSvgImport } from "./useDynamicSvgImport";

interface IProps {
    iconName: string;
    title?: string;
    wrapperStyle?: string;
    svgProp?: React.SVGProps<SVGSVGElement>;
    label?: string;
}

function SvgIcon(props: IProps) {
    const { iconName, wrapperStyle, svgProp, title, label } = props;
    const { loading, SvgIcon } = useDynamicSvgImport(iconName);
    const windowSize = useWindowSize();

    const shouldRenderLabel = windowSize.width >= 992;

    return (
        <>
            {loading && <div></div>}
            {SvgIcon && (
                <div className={wrapperStyle} title={title ?? ""}>
                    <SvgIcon {...svgProp} />
                    {shouldRenderLabel && label && <p>{label}</p>}
                </div>
            )}
        </>
    );
}

export default SvgIcon;
