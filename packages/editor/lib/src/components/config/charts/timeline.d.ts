import { Node } from '@bici-topology/core';
export declare function getTimeLineOption(node?: Node, changeValues?: any, socketData?: any, timesxAix?: any[], firstLine?: boolean): {
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
