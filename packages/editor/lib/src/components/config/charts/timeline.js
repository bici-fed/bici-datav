import { defaultLineColors, defaultTimelineShowData } from "../../data/defines";
import * as _ from 'lodash';
import moment from 'moment';
import { getContrastColor, getFixed } from "../../utils/cacl";
moment.locale('zh-cn', {
    months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
    monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
    weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
    weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
    longDateFormat: {
        LT: 'HH:mm A',
        LTS: 'HH:mm:ss',
        L: 'YYYY-MM-DD HH:mm:ss',
        LL: 'YYYY/MM/DD',
        LLL: 'YYYY年MM月DD日Ah点mm分',
        LLLL: 'YYYY年MM月DD日ddddAh点mm分',
        l: 'YY/MM/DD',
        ll: 'MM/DD',
        lll: 'YYYY年M月D日 HH:mm',
        llll: 'YYYY年M月D日dddd HH:mm',
    },
    meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
    meridiemHour: function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === '凌晨' || meridiem === '早上' ||
            meridiem === '上午') {
            return hour;
        }
        else if (meridiem === '下午' || meridiem === '晚上') {
            return hour + 12;
        }
        else {
            // '中午'
            return hour >= 11 ? hour : hour + 12;
        }
    },
    meridiem: function (hour, minute, isLower) {
        var hm = hour * 100 + minute;
        if (hm < 600) {
            return '凌晨';
        }
        else if (hm < 900) {
            return '早上';
        }
        else if (hm < 1130) {
            return '上午';
        }
        else if (hm < 1230) {
            return '中午';
        }
        else if (hm < 1800) {
            return '下午';
        }
        else {
            return '晚上';
        }
    },
    calendar: {
        sameDay: '[今天]LT',
        nextDay: '[明天]LT',
        nextWeek: '[下]ddddLT',
        lastDay: '[昨天]LT',
        lastWeek: '[上]ddddLT',
        sameElse: 'L'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
    relativeTime: {
        future: '%s内',
        past: '%s前',
        s: '几秒',
        ss: '%d秒',
        m: '1分钟',
        mm: '%d分钟',
        h: '1小时',
        hh: '%d小时',
        d: '1天',
        dd: '%d天',
        M: '1个月',
        MM: '%d个月',
        y: '1年',
        yy: '%d年'
    },
    week: {
        // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
        dow: 1,
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
});
export function getTimeLineOption(node, changeValues, socketData, timesxAix, firstLine) {
    if (firstLine === void 0) { firstLine = false; }
    var datasetSource = [];
    var source0 = [null];
    var lineColors = _.cloneDeep(defaultLineColors);
    var series = [];
    // 改变属性
    if (node != undefined) {
        node.property = Object.assign({}, node.property, changeValues);
    }
    if (node != undefined) {
        (node.property.lineGraphRange || []).map(function (colorObj, index) {
            if (colorObj.lineGraphRangeCheck) {
                lineColors[index] = colorObj.lineGraphRangeColor;
            }
            else {
                lineColors[index] = defaultLineColors[index];
            }
        });
    }
    /******/
    var smooth;
    if (node && node.property.smooth == true) {
        smooth = true;
    }
    else {
        smooth = false;
    }
    /****上下线**/
    var dataTopShow;
    var dataTop = 100;
    var dataBottom = 0;
    if (node && node.property.dataTopChecked == true) {
        dataTopShow = 1;
    }
    else {
        dataTopShow = 0;
    }
    if (node) {
        dataTop = node.property.dataTop;
        dataBottom = node.property.dataBottom;
    }
    /*****背景颜色和参考线**/
    var showReference;
    var showReferenceColor = "#1b2735";
    var showBackground;
    var showBackgroundColor = "transparent";
    if (node && node.property.chartBackgroundChecked == true) {
        showBackground = true;
        showBackgroundColor = node.property.chartBackgroundColor;
    }
    else {
        showBackground = false;
        if (node) {
            showBackgroundColor = "transparent";
        }
    }
    if (node && node.property.lineReferenceChecked == true) {
        showReference = true;
        showReferenceColor = node.property.lineReferenceColor;
    }
    else {
        showReference = false;
    }
    var trastColor = getContrastColor(showBackgroundColor);
    if (showBackgroundColor == 'transparent') {
        trastColor = "#4a4a4a";
    }
    /**title**/
    var chartTitleChecked = false, chartTitle = '实时曲线', chartTitleColor = '#c0c0c0';
    if (node && node.property.chartTitleChecked == true) {
        chartTitleChecked = node.property.chartTitleChecked;
        chartTitle = node.property.chartTitle;
        chartTitleColor = node.property.chartTitleColor;
    }
    else if (node && node.property.chartTitleChecked == false) {
        chartTitleChecked = false;
        chartTitle = '';
        chartTitleColor = '#c0c0c0';
    }
    else {
        chartTitleChecked = false;
        chartTitle = '';
        chartTitleColor = '#c0c0c0';
    }
    //
    if (node && node.data.echarts.option) { // 添加默认的时间
        for (var i = defaultTimelineShowData; i > 0; i--) {
            // source0.push(moment().subtract(i,'seconds').format("LTS"));
            source0.push(null);
        }
    }
    if (node && node.property.dataPointSelectedRows) { // 添加数据源和数据线定义
        (node.property.dataPointSelectedRows || []).map(function (item) {
            var source = [];
            source.push(item.dataName);
            series.push({ type: 'line', smooth: smooth, seriesLayoutBy: 'row', symbol: 'none', label: { color: 'auto' } });
            datasetSource.push(source);
        });
    }
    // 设置显示时间
    datasetSource.map(function (item, index) {
        if (item.length < defaultTimelineShowData) {
            for (var i = 0; i < defaultTimelineShowData; i++) {
                item.push("");
            }
            datasetSource[index] = item;
        }
    });
    if (timesxAix) {
        source0 = timesxAix;
    }
    datasetSource.unshift(source0);
    // 设置数据线
    if (socketData) {
        if (node.data.echarts.option.dataset.source) {
            datasetSource = node.data.echarts.option.dataset.source;
        }
        (node.property.dataPointSelectedRows || []).map(function (row, index) {
            if (node.data.echarts.option.dataset.source) {
                datasetSource = node.data.echarts.option.dataset.source;
            }
            if (socketData.id == row.dataCode) {
                datasetSource[index + 1].push(getFixed(socketData.value, node.property.dataDot));
                if (datasetSource[index + 1].length > defaultTimelineShowData) {
                    datasetSource[index + 1].splice(1, 1);
                }
            }
            else if (datasetSource[index + 1] && firstLine) {
                // if(row.intervalTime>1){
                //     datasetSource[index+1].push(datasetSource[index+1][datasetSource[index+1].length-1]);
                // }
                if (datasetSource[index + 1].length > (defaultTimelineShowData + 1)) {
                    datasetSource[index + 1].splice(1, 1);
                }
            }
        });
    }
    // 添加标注线
    series.push({
        name: '',
        type: 'line',
        symbolSize: 0,
        data: [dataBottom],
        showSymbol: false,
        markLine: {
            itemStyle: {
                normal: {
                    lineStyle: {
                        color: '#18D8F7',
                        opacity: dataTopShow
                    },
                },
            },
            label: {
                show: dataTopShow
            },
            data: [
                {
                    type: 'median',
                    name: '下限',
                },
            ],
        },
    });
    series.push({
        name: '',
        type: 'line',
        data: [dataTop],
        symbolSize: 0,
        showSymbol: false,
        label: {
            show: false
        },
        markLine: {
            itemStyle: {
                normal: {
                    lineStyle: {
                        color: '#FF0000',
                        opacity: dataTopShow
                    },
                },
            },
            label: {
                show: dataTopShow
            },
            data: [
                {
                    type: 'median',
                    name: '上限',
                },
            ],
        },
    });
    var option = {
        title: {
            text: chartTitle,
            show: chartTitleChecked,
            left: "18px",
            top: "0",
            textStyle: {
                color: chartTitleColor,
                fontSize: 12,
                fontWeight: '400'
            }
        },
        backgroundColor: showBackgroundColor,
        color: lineColors,
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                },
                lineStyle: {
                    type: 'dashed'
                }
            }
        },
        grid: {
            left: '25',
            right: '25',
            bottom: '24',
            top: '75',
            containLabel: true
        },
        legend: {
            orient: 'horizontal',
            icon: "rect",
            show: true,
            left: 20,
            top: 25,
            textStyle: {
                color: trastColor
            },
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            minInterval: 1000,
            maxInterval: 5000,
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: trastColor
                }
            },
            axisLabel: {
                textStyle: {
                    color: trastColor,
                },
            },
        },
        yAxis: {
            type: 'value',
            // max: max_value>=100? max_value + 100: max_value+10,
            // max: max_value > 100 ? max_value * 2 : max_value + 10,
            // interval: 10,
            // nameLocation: "center",
            axisLabel: {
                color: '#999',
                textStyle: {
                    fontSize: 12
                },
            },
            // splitLine: {
            //     show: true,
            //     lineStyle: {
            //         color: '#F3F4F4',
            //         type: 'dashed',
            //     }
            // },
            splitLine: {
                show: showReference,
                lineStyle: {
                    color: showReferenceColor,
                    type: 'dashed',
                },
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
        },
        animationEasing: 'linear',
        animation: false,
        dataset: {
            // 用 dimensions 指定了维度的顺序。直角坐标系中，
            // 默认把第一个维度映射到 X 轴上，第二个维度映射到 Y 轴上。
            // 如果不指定 dimensions，也可以通过指定 series.encode
            // 完成映射，参见后文。
            source: datasetSource
        },
        series: series
    };
    return option;
}
//# sourceMappingURL=timeline.js.map