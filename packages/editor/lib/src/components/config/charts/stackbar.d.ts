export declare function getStackBarOption(node?: any, resData?: any): {
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
