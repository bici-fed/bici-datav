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
            paddingTop: string;
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
                fontStyle: string;
            };
        } | {
            text: string;
            name: string;
            hideInput: boolean;
            hideAnchor: boolean;
            hideRotateCP: boolean;
            paddingLeft: number;
            paddingRight: number;
            paddingTop: string;
            paddingBottom: number;
            rectInParent: {
                x: number;
                y: string;
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
                fontStyle?: undefined;
            };
        })[];
        property: {
            dataMethod: string;
            dataFormat: string;
            dataUrl: string;
            pullRate: number;
            dataDot: number;
            props: {
                iframe: string;
            };
            form: {
                style: {
                    group: string;
                    formItems: ({
                        name: string[];
                        value: string;
                    } | {
                        name: string[];
                        value: number;
                    } | {
                        name: string[];
                        value: ({
                            name: string;
                            value: number;
                            checked: boolean;
                            icon: string;
                        } | {
                            name: string;
                            value: string;
                            checked: boolean;
                            icon: string;
                        })[];
                    })[];
                }[];
                data: {
                    group: string;
                    forItems: {
                        name: string[];
                        value: string;
                    }[];
                }[];
            };
        };
    };
};
export default _default;
