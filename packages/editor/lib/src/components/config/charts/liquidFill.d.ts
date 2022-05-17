export declare function getLiquidFillOption(node?: any, resData?: any): {
    legend: {
        show: boolean;
    };
    series: {
        type: string;
        radius: string;
        center: string[];
        startAngle: number;
        endAngle: number;
        clockwise: boolean;
        label: {
            normal: {
                show: boolean;
            };
        };
        data: ({
            value: number;
            name: string;
            label: {
                show: boolean;
                position: string;
                fontSize: number;
                color: string;
                fontWeight: number;
            };
            itemStyle: {
                normal: {
                    color: string;
                };
            };
        } | {
            value: number;
            name: string;
            itemStyle: {
                normal: {
                    color: string;
                };
            };
            label?: undefined;
        })[];
    }[];
};
