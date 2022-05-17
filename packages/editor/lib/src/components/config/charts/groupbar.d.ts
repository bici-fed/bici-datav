export declare function getGroupBarOption(node?: any, resData?: any): {
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
