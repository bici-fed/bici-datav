export declare function getBarOption(node?: any, resData?: any): {
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
