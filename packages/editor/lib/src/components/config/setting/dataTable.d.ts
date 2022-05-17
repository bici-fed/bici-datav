declare const _default: {
    text: string;
    icon: string;
    name: string;
    data: {
        strokeStyle: string;
        rect: {
            x: number;
            y: number;
            width: number;
            height: number;
        };
        name: string;
        hideRotateCP: boolean;
        hideInput: boolean;
        property: {
            props: {};
            echartsType: string;
            dataMethod: string;
            pullRate: number;
            dataDot: number;
            pullRateUnit: number;
            dataFormat: string;
            dataPointSelectedRows: any[];
            dataPointParam: {
                qtDataList: any[];
                subscribe: boolean;
            };
            dataSourceId: any;
            dataSourceUrl: any;
            form: {
                style: {
                    group: string;
                    formItems: ({
                        name: string[];
                        value: boolean;
                    } | {
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
                data: any[];
            };
        };
    };
};
export default _default;
