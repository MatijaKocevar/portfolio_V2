import { useDynamicSvgImport } from "./useDynamicSvgImport";

interface IProps {
    iconName: string;
    title?: string;
    wrapperStyle?: string;
    svgProp?: React.SVGProps<SVGSVGElement>;
}

function SvgIcon(props: IProps) {
    const { iconName, wrapperStyle, svgProp, title } = props;

    const { loading, SvgIcon } = useDynamicSvgImport(iconName);
    return (
        <>
            {loading && <div></div>}
            {SvgIcon && (
                <div className={wrapperStyle} title={title ?? ""}>
                    <SvgIcon {...svgProp} />
                </div>
            )}
        </>
    );
}

export default SvgIcon;
