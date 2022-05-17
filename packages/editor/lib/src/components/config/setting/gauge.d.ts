declare const _default: {
    name: string;
    icon: string;
    data: {
        elementRendered: boolean;
        text: string;
        hideInput: boolean;
        rect: {
            width: number;
            height: number;
        };
        strokeStyle: string;
        hideRotateCP: boolean;
        lineWidth: number;
        name: string;
        paddingTopNum: number;
        paddingRightNum: number;
        paddingBottomNum: number;
        paddingLeftNum: number;
        data: {
            echarts: {
                option: {
                    tooltip: {
                        formatter: string;
                    };
                    grid: {
                        top: number;
                        left: number;
                        right: number;
                        bottom: number;
                    };
                    toolbox: {
                        feature: {
                            restore: {
                                show: boolean;
                            };
                            saveAsImage: {
                                show: boolean;
                            };
                        };
                    };
                    series: {
                        name: string;
                        type: string;
                        min: number;
                        max: number;
                        radius: string;
                        splitNumber: number;
                        axisLine: {
                            lineStyle: {
                                width: number;
                                color: any[];
                            };
                        };
                        axisTick: {
                            show: boolean;
                            length: number;
                            lineStyle: {
                                color: string;
                            };
                        };
                        splitLine: {
                            show: boolean;
                            length: number;
                            lineStyle: {
                                color: string;
                            };
                        };
                        pointer: {
                            length: string;
                            width: number;
                        };
                        axisLabel: {
                            show: boolean;
                            color: string;
                            padding: number;
                        };
                        title: {
                            fontWeight: string;
                            fontSize: number;
                            fontStyle: string;
                            color: string;
                            show: boolean;
                            offsetCenter: (string | number)[];
                        };
                        detail: {
                            formatter: string;
                            offsetCenter: (string | number)[];
                            textStyle: {
                                fontSize: number;
                                color: string;
                            };
                        };
                        data: {
                            value: number;
                            name: any;
                        }[];
                    }[];
                };
            };
        };
        property: {
            echartsType: string;
            dataMethod: string;
            dataDot: number;
            dataPointSelectedRows: any[];
            dataPointParam: {
                qtDataList: any[];
                subscribe: boolean;
            };
            dataColors: {
                checked: boolean;
                color: string;
                top: number;
                bottom: any;
            }[];
            dataMax: number;
            dataMin: number;
            chartTitle: string;
            chartTitleChecked: boolean;
            chartUnitChecked: boolean;
            chartUnit: string;
            marks: number;
            markChecked: boolean;
            chartTitleColor: string;
            chartTitleColorChecked: boolean;
        };
    };
};
export default _default;
