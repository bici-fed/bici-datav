export default Iconrili;
declare function Iconrili({ size, color, style: _style, ...rest }: {
    [x: string]: any;
    size: any;
    color: any;
    style: any;
}): JSX.Element;
declare namespace Iconrili {
    namespace defaultProps {
        const size: number;
    }
}
