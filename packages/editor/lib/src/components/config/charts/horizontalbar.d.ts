export declare function getHorizontalBarOption(node?: any, resData?: any): {
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
