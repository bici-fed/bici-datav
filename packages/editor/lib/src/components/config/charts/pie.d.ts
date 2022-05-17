export declare function getPieOption(): {
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
export declare function getPieOptionByChangeProp(node: any, resData: any): {
    color: string[];
    backgroundColor: any;
    tooltip: {
        trigger: string;
    };
    title: ({
        show: any;
        text: string;
        top: string;
        left: string;
        textStyle: {
            rich: {
                name: {
                    fontSize: number;
                    fontWeight: string;
                    color: any;
                    padding: number[];
                };
                val: {
                    fontSize: number;
                    fontWeight: string;
                    color: any;
                };
            };
        };
    } | {
        text: string;
        left: any;
        textStyle: any;
        show?: undefined;
        top?: undefined;
    })[];
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
        textStyle: {
            color: any;
            fontSize: number;
        };
    };
    dataset: {
        dimensions: string[];
        source: (string | number)[][];
    }[];
    series: {
        type: string;
        radius: any;
        center: string[];
        selectedOffset: number;
        label: {
            edgeDistance: string;
            alignTo: string;
            color: any;
            formatter: (param: any) => string;
        };
        labelLine: {
            length: number;
            length2: number;
            minTurnAngle: number;
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
