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
        hideInput: boolean;
        data: {
            echarts: {
                option: {
                    color: string[];
                    backgroundColor: any;
                    tooltip: {
                        trigger: string;
                    };
                    title: {
                        text: string;
                        left: string;
                        textStyle: any;
                    };
                    legend: {
                        top: string;
                        right: string;
                        itemWidth: number;
                        itemHeight: number;
                        textStyle: {
                            color: any;
                            fontSize: number;
                        };
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
                        type: string;
                        axisLabel: {
                            interval: number;
                            rotate: number;
                            color: any;
                        };
                        axisLine: {
                            show: boolean;
                        };
                        axisTick: {
                            show: boolean;
                        };
                    };
                    yAxis: {
                        axisLine: {
                            show: boolean;
                        };
                        axisLabel: {
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
                    series: {
                        type: string;
                        barWidth: number;
                        encode: {
                            x: string;
                            y: string;
                        };
                        datasetIndex: number;
                    };
                };
            };
        };
        property: {
            echartsType: string;
            dataMethod: string;
            dataFormat: string;
            dataUrl: any;
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
