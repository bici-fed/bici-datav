import 'antd/dist/antd.less';
export declare let canvas: any;
export declare class PreviewProps {
    history?: any;
    key?: number;
    ref?: any;
    data?: any;
    websocketConf?: {
        url: string;
    };
    isApp?: boolean;
}
declare const Preview: ({ data, websocketConf, isApp }: PreviewProps) => JSX.Element;
export default Preview;
