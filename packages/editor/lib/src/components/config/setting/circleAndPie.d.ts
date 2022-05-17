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
                    title: {
                        text: string;
                        textStyle: {
                            fontWeight: string;
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
                    legend: {
                        orient: string;
                        bottom: string;
                    };
                    dataset: {
                        dimensions: string[];
                        source: (string | number)[][];
                    }[];
                    series: {
                        type: string;
                        radius: string[];
                        center: string[];
                        selectedOffset: number;
                        label: {
                            edgeDistance: string;
                            alignTo: string;
                            formatter: (param: any) => string;
                        };
                    }[];
                    media: ({
                        query: {
                            minAspectRatio: number;
                        };
                        option: {
                            series: {
                                center: string[];
                            }[];
                        };
                    } | {
                        option: {
                            series: {
                                center: string[];
                            }[];
                        };
                        query?: undefined;
                    })[];
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
                        value: string;
                    } | {
                        name: string[];
                        value: boolean;
                    } | {
                        name: string[];
                        value: {
                            lineGraphRangeColor: string;
                            lineGraphRangeCheck: boolean;
                        }[];
                    })[];
                })[];
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
