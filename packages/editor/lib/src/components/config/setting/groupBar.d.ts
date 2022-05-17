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
                    color: string[];
                    tooltip: {};
                    backgroundColor: any;
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
                            color: any;
                        };
                        axisTick: {
                            show: boolean;
                        };
                    };
                    yAxis: {
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
                        seriesLayoutBy: string;
                    }[];
                };
            };
        };
        property: {
            echartsType: string;
            dataMethod: string;
            dataFormat: string;
            dataUrl: string;
            dataSourceId: string;
            dataSourceUrl: string;
            pullRate: number;
            dataDot: number;
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
