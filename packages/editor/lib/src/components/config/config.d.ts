export declare const defaultToolsConfig: string[];
export declare const Tools: ({
    group: string;
    children: {
        rectangle: {
            name: string;
            icon: string;
            data: {
                text: string;
                rect: {
                    width: number;
                    height: number;
                };
                font: {
                    fontSize: number;
                    fontFamily: string;
                };
                paddingLeft: number;
                paddingRight: number;
                paddingTop: number;
                paddingBottom: number;
                borderRadius: number;
                fillStyle: string;
                name: string;
            };
        };
        circle: {
            name: string;
            icon: string;
            data: {
                text: string;
                hideRotateCP: boolean;
                fillStyle: string;
                rect: {
                    width: number;
                    height: number;
                };
                font: {
                    fontSize: number;
                    fontFamily: string;
                };
                name: string;
                textMaxLine: number;
            };
        };
        text: {
            name: string;
            icon: string;
            data: {
                text: string;
                rect: {
                    width: number;
                    height: number;
                };
                font: {
                    fontSize: number;
                    fontFamily: string;
                };
                name: string;
                hideInput: boolean;
            };
        };
        biciTimer: {
            name: string;
            icon: string;
            data: {
                text: string;
                hideInput: boolean;
                rect: {
                    width: number;
                    height: number;
                };
                font: {
                    fontSize: number;
                    fontFamily: string;
                };
                name: string;
                elementRendered: boolean;
                strokeStyle: string;
                property: {
                    date: {
                        show: boolean;
                        format: string;
                    };
                    time: {
                        show: boolean;
                        format: string;
                    };
                };
                iconColor: string;
            };
        };
        dateFormat: {
            name: string;
            icon: string;
            data: {
                rect: {
                    width: number;
                    height: number;
                };
                font: {
                    fontSize: number;
                    fontFamily: string;
                };
                name: string;
                elementRendered: boolean;
                hideInput: boolean;
                strokeStyle: string;
                iconColor: string;
                property: {
                    props: {
                        style: {
                            color: string;
                        };
                    };
                    text: string;
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
        biciVarer: {
            name: string;
            icon: string;
            data: {
                text: string;
                rect: {
                    width: number;
                    height: number;
                };
                font: {
                    fontSize: number;
                    fontFamily: string;
                };
                name: string;
                elementRendered: boolean;
                hideInput: boolean;
                strokeStyle: string;
                iconColor: string;
                property: {
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
        biciCard: {
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
        biciPilot: {
            name: string;
            icon: string;
            data: {
                text: string;
                hideInput: boolean;
                rect: {
                    width: number;
                    height: number;
                };
                font: {
                    fontFamily: string;
                    textAlign: string;
                    fontSize: number;
                };
                hideRotateCP: boolean;
                name: string;
                property: {
                    val: number;
                    color: string;
                    size: number;
                    text: string;
                    showText: boolean;
                    stateType: string;
                    lightRange: any[];
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
        line: {
            name: string;
            icon: string;
            data: {
                text: string;
                type: number;
                data: {
                    type: string;
                };
                rect: {
                    x: number;
                    y: number;
                    width: number;
                    height: number;
                };
                controlPoints: {
                    x: number;
                    y: number;
                }[];
                name: string;
            };
        };
        dataTable: {
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
        webPage: {
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
                elementRendered: boolean;
                isEditable: boolean;
                hideInput: boolean;
                data: {};
                property: {
                    props: {
                        iframe: string;
                    };
                    form: {
                        style: {
                            group: string;
                            formItems: ({
                                name: string[];
                                value: number;
                            } | {
                                name: string[];
                                value: boolean;
                            } | {
                                name: string[];
                                value: string;
                            })[];
                        }[];
                        data: any[];
                    };
                };
            };
        };
        liveVideo: {
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
                elementRendered: boolean;
                isEditable: boolean;
                hideRotateCP: boolean;
                hideInput: boolean;
                data: {};
                property: {
                    video: {
                        selectedRowKeys: any[];
                        selectedRows: any[];
                    };
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
                                value: boolean;
                            })[];
                        }[];
                        data: any[];
                    };
                };
            };
        };
        video: {
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
                elementRendered: boolean;
                isEditable: boolean;
                hideRotateCP: boolean;
                hideInput: boolean;
                data: {};
                property: {
                    video: {
                        selectedRowKeys: any[];
                        selectedRows: any[];
                    };
                    videoURL: string;
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
                                value: boolean;
                            })[];
                        }[];
                        data: any[];
                    };
                };
            };
        };
        groupBar?: undefined;
        verticalBar?: undefined;
        stackBar?: undefined;
        horizontalBar?: undefined;
        circleAndPie?: undefined;
        gauge?: undefined;
        biciMeasure?: undefined;
        timeLine?: undefined;
    };
} | {
    group: string;
    children: {
        groupBar: {
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
        verticalBar: {
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
        stackBar: {
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
        horizontalBar: {
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
        circleAndPie: {
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
        gauge: {
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
        biciMeasure: {
            name: string;
            icon: string;
            data: {
                text: string;
                rect: {
                    width: number;
                    height: number;
                };
                font: {
                    fontSize: number;
                    fontFamily: string;
                };
                paddingLeft: number;
                paddingRight: number;
                paddingTop: number;
                paddingBottom: number;
                borderRadius: number;
                fillStyle: string;
                name: string;
                onlySizeX: boolean;
                property: {
                    dataMethod: string;
                    dataPointSelectedRows: any[];
                    dataDot: number;
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
                    marks: number;
                    markChecked: boolean;
                    value: number;
                    chartUnitChecked: boolean;
                    chartUnit: string;
                    chartTitleColor: string;
                    chartTitleColorChecked: boolean;
                };
            };
        };
        timeLine: {
            elementRendered: boolean;
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
                            title: {
                                text: string;
                                show: boolean;
                                left: string;
                                top: string;
                                textStyle: {
                                    color: string;
                                    fontSize: number;
                                    fontWeight: string;
                                };
                            };
                            backgroundColor: string;
                            color: string[];
                            tooltip: {
                                trigger: string;
                                axisPointer: {
                                    type: string;
                                    crossStyle: {
                                        color: string;
                                    };
                                    lineStyle: {
                                        type: string;
                                    };
                                };
                            };
                            grid: {
                                left: string;
                                right: string;
                                bottom: string;
                                top: string;
                                containLabel: boolean;
                            };
                            legend: {
                                orient: string;
                                icon: string;
                                show: boolean;
                                left: number;
                                top: number;
                                textStyle: {
                                    color: string;
                                };
                            };
                            xAxis: {
                                type: string;
                                boundaryGap: boolean;
                                minInterval: number;
                                maxInterval: number;
                                splitLine: {
                                    show: boolean;
                                };
                                axisTick: {
                                    show: boolean;
                                };
                                axisLine: {
                                    show: boolean;
                                    lineStyle: {
                                        color: string;
                                    };
                                };
                                axisLabel: {
                                    textStyle: {
                                        color: string;
                                    };
                                };
                            };
                            yAxis: {
                                type: string;
                                axisLabel: {
                                    color: string;
                                    textStyle: {
                                        fontSize: number;
                                    };
                                };
                                splitLine: {
                                    show: any;
                                    lineStyle: {
                                        color: string;
                                        type: string;
                                    };
                                };
                                axisTick: {
                                    show: boolean;
                                };
                                axisLine: {
                                    show: boolean;
                                };
                            };
                            animationEasing: string;
                            animation: boolean;
                            dataset: {
                                source: any[];
                            };
                            series: any[];
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
                    smooth: boolean;
                    limitType: string;
                    dataTopChecked: boolean;
                    dataTop: number;
                    dataBottom: number;
                    chartTitleChecked: boolean;
                    chartTitle: string;
                    chartTitleColor: string;
                    chartBackgroundColor: string;
                    chartBackgroundChecked: boolean;
                    lineReferenceChecked: boolean;
                    lineReferenceColor: string;
                    lineColors: any[];
                };
            };
        };
        rectangle?: undefined;
        circle?: undefined;
        text?: undefined;
        biciTimer?: undefined;
        dateFormat?: undefined;
        biciVarer?: undefined;
        biciCard?: undefined;
        biciPilot?: undefined;
        line?: undefined;
        dataTable?: undefined;
        webPage?: undefined;
        liveVideo?: undefined;
        video?: undefined;
    };
})[];
