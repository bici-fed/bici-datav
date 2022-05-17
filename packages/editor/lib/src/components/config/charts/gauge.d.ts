/***
 * 仪表盘
 * @param opt
 * @param changeValues
 */
export declare function getGaugeOption(opt?: {
    min: number;
    max: number;
    lineColors: any[];
    chartTitle: string;
    chartTitleChecked: boolean;
    chartUnitChecked: boolean;
    chartUnit: string;
    chartTitleColor: string;
    markChecked: boolean;
    marks: number;
}, changeValues?: any): {
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
