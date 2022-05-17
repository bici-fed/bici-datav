var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { defaultChartColors } from "../../data/defines";
import * as _ from 'lodash';
import { handleDotData } from "../../utils/cacl";
export function getBarOption(node, resData) {
    if (node === void 0) { node = null; }
    if (resData === void 0) { resData = null; }
    var dimensions = ["xdata", "2020-09"];
    var chartColors = _.cloneDeep(defaultChartColors);
    var source = [
        ["补强板", 99.899],
        ["电梯导轨", 1457.332],
        ["扁钢", 1768.992]
    ];
    var series = {
        type: 'bar',
        barWidth: 20,
        encode: { x: dimensions[0], y: dimensions[1] },
        datasetIndex: 0,
        // itemStyle:{
        //     color: function(obj){
        //         const defaultChartColors2=[
        //             "#157EFB",
        //             "#F7B500",
        //             "#1EC622",
        //             "#E63C5F",
        //             "#44D7B6",
        //             "#6236FF",
        //             "#673D3D",
        //             "#71A3CB",
        //             "#766863",
        //             "#FA6400"
        //           ]
        //         return defaultChartColors2[obj["dataIndex"]]
        //     }
        // }
    };
    // 后端数据
    // 后端数据
    if (node && node.dataMethod === 'restful') {
        if (resData) {
            dimensions = resData["dimensions"];
            source = resData["source"];
            // 处理数据精度问题
            handleDotData(node, source);
            series.encode.y = dimensions[1];
        }
    }
    else if (node && node.property.dataMethod === 'point') {
        dimensions = ['数据点', '数据值'];
        source = [];
        (node.property.dataPointSelectedRows || []).forEach(function (item) {
            var t = [];
            t[0] = item.dataName;
            t[1] = item.value * 1 || 0;
            series.encode.y = dimensions[1];
            source.push(t);
        });
    }
    var chartBackgroundColor;
    var title = "柱状图";
    var titleShow = true;
    var chartRefLineShow = true;
    var chartRefLineColor = '#ccc';
    var font = {};
    var titlePosition = 'left';
    // 组件属性改变
    if (node) {
        title = node.property.props.title;
        titleShow = node.property.props.titleShow;
        if (node.property.props.chartBkColor != '' && node.property.props.chartBkColorShow == true) {
            chartBackgroundColor = node.property.props.chartBkColor;
        }
        else {
            chartBackgroundColor = 'transparent';
        }
        (node.property.props.titleFontStyle || []).forEach(function (item) {
            if (item.name == 'bold') {
                if (item.checked) {
                    font.fontWeight = item.value;
                }
                else {
                    font.fontWeight = 'normal';
                }
            }
            if (item.name == 'italic') {
                if (item.checked) {
                    font.fontStyle = item.value;
                }
                else {
                    font.fontStyle = 'normal';
                }
            }
        });
        titlePosition = node.property.props.titlePosition;
        if (node.property.props.titleFontColor) {
            font.color = node.property.props.titleFontColor;
        }
        if (node.property.props.titleFontFamily) {
            font.fontFamily = node.property.props.titleFontFamily;
        }
        if (node.property.props.titleFontSize) {
            font.fontSize = node.property.props.titleFontSize;
        }
        // 设置图形颜色
        if (node.property.props.lineGraphRange) {
            (node.property.props.lineGraphRange || []).forEach(function (element, index) {
                if (element.lineGraphRangeCheck) {
                    chartColors[index] = node.property.props.lineGraphRange[index].lineGraphRangeColor;
                }
            });
        }
        // 设置参考线
        if (node.property.props.chartRefLineShow) {
            chartRefLineShow = true;
            chartRefLineColor = node.property.props.chartRefLineColor;
        }
        else {
            chartRefLineShow = false;
            chartRefLineColor = node.property.props.chartRefLineColor;
        }
    }
    var option = {
        color: chartColors,
        backgroundColor: chartBackgroundColor,
        tooltip: {
            trigger: 'axis',
        },
        title: {
            text: titleShow ? title : '',
            left: titlePosition,
            textStyle: __assign(__assign({}, font), { rich: {} })
        },
        legend: {
            top: '4%',
            right: '4%',
            itemWidth: 17,
            itemHeight: 12,
            textStyle: {
                color: font.color,
                fontSize: 10
            },
        },
        grid: {
            top: '20%',
            left: '6%',
            right: '6%',
            bottom: '6%',
            containLabel: true
        },
        dataset: [{
                "dimensions": dimensions,
                "source": source
            }],
        xAxis: {
            type: 'category',
            axisLabel: { interval: 0, rotate: 0, color: font.color, },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
        },
        yAxis: {
            axisLine: {
                show: false,
            },
            axisLabel: {
                color: font.color,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: chartRefLineShow,
                lineStyle: {
                    color: chartRefLineColor,
                }
            }
        },
        series: series
    };
    return option;
}
//# sourceMappingURL=bar.js.map