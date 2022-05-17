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
import { getFixed, handleDotData } from "../../utils/cacl";
export function getPieOption() {
    var option = {
        color: defaultChartColors,
        title: {
            text: '饼/环状图',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 14,
            }
        },
        grid: {
            top: '10%',
            left: '2%',
            right: '2%',
            bottom: '10%',
            containLabel: true
        },
        legend: {
            orient: 'horizontal',
            bottom: 'bottom',
        },
        dataset: [{
                "dimensions": ["xdata", "2020-09"],
                "source": [
                    ["补强板", 99.899],
                    ["电梯导轨", 1457.332],
                    ["扁钢", 1768.992]
                ]
            }],
        series: [{
                type: 'pie',
                radius: ['50%'],
                center: ['50%', '25%'],
                selectedOffset: 30,
                label: {
                    edgeDistance: 'auto',
                    alignTo: 'labelLine',
                    formatter: function (param) {
                        return param.value[0] + '\n' + param.value[1];
                    }
                }
            }],
        // Optional. Only for responsive layout:图表响应式
        media: [{
                query: { minAspectRatio: 1 },
                option: {
                    series: [
                        { center: ['50%', '50%'] },
                    ]
                }
            }, {
                option: {
                    series: [
                        { center: ['50%', '50%'] },
                    ]
                }
            }]
    };
    return option;
}
export function getPieOptionByChangeProp(node, resData) {
    var _a;
    var chartShape = '50%';
    var chartShape2 = false;
    var chartColors = _.cloneDeep(defaultChartColors);
    if (node.property.props.chartShape == "circle") {
        chartShape = ["30%", "50%"];
        chartShape2 = true;
    }
    var chartBackgroundColor;
    if (node.property.props.chartBkColor != '' && node.property.props.chartBkColorChecked == true) {
        chartBackgroundColor = node.property.props.chartBkColor;
    }
    else {
        chartBackgroundColor = 'transparent';
    }
    var title = '饼/环状图';
    var titleShow = node.property.props.titleShow;
    var font = {};
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
    /****后端数据***/
    var dimensions = ["xdata", "2020-09"];
    var source = [
        ["补强板", 99.899],
        ["电梯导轨", 1457.332],
        ["扁钢", 1768.992]
    ];
    // 后端数据
    if (node && node.dataMethod === 'restful') {
        if (resData) {
            dimensions = resData["dimensions"];
            source = resData["source"];
            // 处理数据精度问题
            handleDotData(node, source);
            console.log(source);
        }
    }
    else if (node && node.property.dataMethod === 'point') {
        dimensions = ['数据点', '数据值'];
        source = [];
        console.log(node.property.dataPointSelectedRows);
        (node.property.dataPointSelectedRows || []).forEach(function (item) {
            var t = [];
            t[0] = item.dataName;
            t[1] = (item.value * 1) || 0;
            source.push(t);
        });
        console.log(source);
    }
    var chartData = [];
    (source || []).forEach(function (item) {
        chartData.push(Number(item[1]) * 1);
    });
    var total = chartData.reduce(function (a, b) {
        return a + b * 1;
    }, 0);
    var option = {
        color: chartColors,
        backgroundColor: chartBackgroundColor,
        tooltip: {
            trigger: 'item',
        },
        title: [{
                show: chartShape2,
                text: '{val|' + getFixed(total, ((_a = node === null || node === void 0 ? void 0 : node.property) === null || _a === void 0 ? void 0 : _a.dataDot) || 2) + '}',
                top: 'center',
                left: 'center',
                textStyle: {
                    rich: {
                        name: {
                            fontSize: 14,
                            fontWeight: 'normal',
                            color: node.property.props.titleFontColor,
                            padding: [10, 0]
                        },
                        val: {
                            fontSize: 14,
                            fontWeight: 'bold',
                            color: node.property.props.titleFontColor,
                        }
                    }
                }
            }, {
                text: titleShow ? title : '',
                left: node.property.props.titlePosition,
                textStyle: __assign(__assign({}, font), { color: node.property.props.titleFontColor, fontFamily: node.property.props.titleFontFamily, fontSize: node.property.props.titleFontSize })
            }],
        grid: {
            top: '10%',
            left: '2%',
            right: '2%',
            bottom: '10%',
            containLabel: true
        },
        legend: {
            orient: 'horizontal',
            bottom: 'bottom',
            textStyle: {
                color: font.color,
                fontSize: 12
            }
        },
        dataset: [{
                "dimensions": dimensions,
                "source": source
            }],
        series: [{
                type: 'pie',
                radius: chartShape,
                center: ['50%', '25%'],
                selectedOffset: 30,
                label: {
                    edgeDistance: 'auto',
                    alignTo: 'labelLine',
                    color: font.color,
                    formatter: function (param) {
                        return param.value[0] + '\n' + param.percent + '%';
                    }
                },
                labelLine: {
                    length: 10,
                    length2: 10,
                    minTurnAngle: 120,
                }
            }],
        // Optional. Only for responsive layout:图表响应式
        media: [{
                query: { minAspectRatio: 1 },
                option: {
                    series: [
                        { center: ['50%', '50%'] },
                    ]
                }
            }, {
                option: {
                    series: [
                        { center: ['50%', '50%'] },
                    ]
                }
            }]
    };
    return option;
}
//# sourceMappingURL=pie.js.map