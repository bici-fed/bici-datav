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
export function getStackBarOption(node, resData) {
    var chartColors = _.cloneDeep(defaultChartColors);
    var chartBackgroundColor;
    var title = "堆叠图";
    var titleShow = true;
    var font = {};
    var titlePosition = 'left';
    var chartRefLineShow = false;
    var chartRefLineColor = '#ccc';
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
    /**
     *
     * 后端数据
     *
     *
     * *******/
    var dimensions = ['xdata', '750车间', '740车间'];
    var source = [
        ['202001', 41.1, 30.4],
        ['202002', 86.5, 92.1],
        ['202003', 24.1, 67.2],
        ['202004', 24.1, 67.2],
    ];
    var series = [
        { type: 'bar', stack: 'sum', barWidth: '30%', barGap: "20%" },
        { type: 'bar', stack: 'sum', barWidth: '30%', barGap: "20%" },
    ];
    if (resData) {
        dimensions = resData["dimensions"];
        source = resData["source"];
        // 处理数据精度问题
        handleDotData(node, source);
        series = [];
        for (var i = 0; i < dimensions.length - 1; i++) {
            series.push({ type: 'bar', stack: 'sum', barWidth: '30%', barGap: "20%" });
        }
    }
    var option = {
        backgroundColor: chartBackgroundColor,
        color: chartColors,
        tooltip: {
            trigger: 'axis',
        },
        title: {
            text: titleShow ? title : '',
            left: titlePosition,
            textStyle: __assign(__assign({}, font), { rich: {} })
        },
        legend: {
            orient: 'vertical',
            right: 'right',
            top: 'middle',
            itemWidth: 17,
            itemHeight: 30,
            icon: 'circle',
            textStyle: {
                color: font.color,
                fontSize: 14
            },
        },
        grid: {
            top: '20%',
            left: '2%',
            right: '20%',
            bottom: '10%',
            containLabel: true
        },
        dataset: [{
                dimensions: dimensions,
                source: source,
            }],
        yAxis: {
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            }
        },
        xAxis: {
            type: 'category',
            axisLine: {
                show: false
            },
            splitLine: {
                show: chartRefLineShow,
                lineStyle: {
                    color: chartRefLineColor,
                }
            },
            axisTick: {
                show: false
            }
        },
        series: series
    };
    return option;
}
//# sourceMappingURL=stackbar.js.map