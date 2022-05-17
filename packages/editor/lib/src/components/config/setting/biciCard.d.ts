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
            };
        })[];
        property: {
            cardTitle: string;
            showTitle: boolean;
            limitType: string;
            showLimit: boolean;
            limit: {
                bottom: any;
                top: any;
            };
            normal: {
                fontFamily: string;
                fontSize: number;
                color: string;
                showBkColor: boolean;
                bkColor: string;
            };
            topLimit: {
                fontFamily: string;
                fontSize: number;
                color: string;
                showBkColor: boolean;
                bkColor: string;
            };
            bottomLimit: {
                fontFamily: string;
                fontSize: number;
                color: string;
                showBkColor: boolean;
                bkColor: string;
            };
            dataMethod: string;
            dataDot: number;
            dataPointSelectedRows: any[];
            dataPointParam: {
                qtDataList: any[];
                subscribe: boolean;
            };
        };
    };
};
export default _default;
