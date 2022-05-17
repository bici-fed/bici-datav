declare const _default: {
    name: string;
    icon: string;
    data: {
        text: string;
        hideInput: boolean;
        hideRotateCP: boolean;
        rect: {
            width: number;
            height: number;
        };
        paddingTop: number;
        paddingBottom: number;
        font: {
            fontFamily: string;
            color: string;
            fontSize: number;
            fontWeight: number;
        };
        fillStyle: string;
        strokeStyle: string;
        lineWidth: number;
        name: string;
        children: ({
            text: string;
            name: string;
            hideInput: boolean;
            hideAnchor: boolean;
            hideRotateCP: boolean;
            paddingLeft: number;
            paddingRight: number;
            paddingTop: number;
            paddingBottom: number;
            rectInParent: {
                x: number;
                y: number;
                width: string;
                height: string;
            };
            font: {
                fontFamily: string;
                color: string;
                textAlign: string;
                fontSize: number;
                textBaseline: string;
                fontWeight: number;
            };
        } | {
            text: string;
            name: string;
            hideInput: boolean;
            hideAnchor: boolean;
            hideRotateCP: boolean;
            paddingLeft: number;
            paddingRight: number;
            paddingTop: number;
            paddingBottom: number;
            rectInParent: {
                x: string;
                y: number;
                width: string;
                height: string;
            };
            font: {
                fontFamily: string;
                color: string;
                fontSize: number;
                fontWeight: number;
                textAlign: string;
                textBaseline: string;
            };
        })[];
        property: {
            dataMethod: string;
            dataDot: number;
            dataFormat: string;
            dataUrl: string;
            pullRate: number;
            props: {
                iframe: string;
            };
        };
    };
};
export default _default;
