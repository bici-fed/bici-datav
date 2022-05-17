declare const _default: {
    name: string;
    icon: string;
    data: {
        text: string;
        rect: {
            width: number;
            height: number;
        };
        name: string;
        strokeStyle: string;
        elementRendered: boolean;
        hideRotateCP: boolean;
        hideInput: boolean;
        data: {
            echarts: {
                option: {
                    backgroundColor: any;
                    title: {
                        text: string;
                        left: string;
                        textStyle: any;
                    };
                    tooltip: {
                        formatter: (value: any) => string;
                    };
                    grid: {
                        top: string;
                        left: string;
                        right: string;
                        bottom: string;
                        containLabel: boolean;
                    };
                    dataset: {
                        dimensions: string[];
                        source: (string | number)[][];
                    }[];
                    xAxis: {
                        name: string;
                        axisLabel: {
                            show: boolean;
                            color: any;
                        };
                        axisTick: {
                            show: boolean;
                        };
                        splitLine: {
                            show: boolean;
                            lineStyle: {
                                color: string;
                            };
                        };
                    };
                    yAxis: {
                        type: string;
                        inverse: boolean;
                        axisLabel: {
                            show: boolean;
                            color: any;
                            formatter: (value: any) => any;
                        };
                        axisTick: {
                            show: boolean;
                        };
                        axisLine: {
                            show: boolean;
                        };
                        splitLine: {
                            show: boolean;
                            lineStyle: {
                                color: string;
                            };
                        };
                    };
                    series: {
                        type: string;
                        realtimeSort: boolean;
                        seriesLayoutBy: string;
                        datasetIndex: number;
                        itemStyle: {
                            color: (param: any) => any;
                        };
                        label: {
                            show: boolean;
                            position: string;
                            valueAnimation: boolean;
                        };
                        encode: {
                            x: string;
                            y: string;
                        };
                    }[];
                };
            };
        };
        property: {
            echartsType: string;
            dataMethod: string;
            dataFormat: string;
            dataUrl: string;
            dataSourceId: any;
            dataSourceUrl: any;
            pullRate: number;
            dataDot: number;
            dataPointSelectedRows: any[];
            dataPointParam: {
                qtDataList: any[];
                subscribe: boolean;
            };
            props: {
                iframe: string;
            };
            form: {
                style: ({
                    group: string;
                    formItems: ({
                        name: string[];
                        value: string;
                    } | {
                        name: string[];
                        value: boolean;
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
                } | {
                    group: string;
                    formItems: ({
                        name: string[];
                        value: {
                            lineGraphRangeColor: string;
                            lineGraphRangeCheck: boolean;
                        }[];
                    } | {
                        name: string[];
                        value: string;
                    } | {
                        name: string[];
                        value: boolean;
                    })[];
                })[];
                data: any[];
            };
        };
    };
};
export default _default;
