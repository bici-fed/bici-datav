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
                    color: string[];
                    tooltip: {
                        trigger: string;
                    };
                    title: {
                        text: string;
                        left: string;
                        textStyle: any;
                    };
                    legend: {
                        orient: string;
                        right: string;
                        top: string;
                        itemWidth: number;
                        itemHeight: number;
                        icon: string;
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
                    yAxis: {
                        axisLine: {
                            show: boolean;
                        };
                        splitLine: {
                            show: boolean;
                        };
                    };
                    xAxis: {
                        type: string;
                        axisLine: {
                            show: boolean;
                        };
                        splitLine: {
                            show: boolean;
                            lineStyle: {
                                color: string;
                            };
                        };
                        axisTick: {
                            show: boolean;
                        };
                    };
                    series: {
                        type: string;
                        stack: string;
                        barWidth: string;
                        barGap: string;
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
            pullRateUnit: number;
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
