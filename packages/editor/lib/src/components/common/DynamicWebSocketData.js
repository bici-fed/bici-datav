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
import { canvas } from '../Layout';
import moment from 'moment';
// 里面的字符可以根据自己的需要进行调整
moment.locale('zh-cn', {
    months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
    monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
    weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
    weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
    longDateFormat: {
        LT: 'HH:mm A',
        LTS: 'HH:mm:ss',
        L: 'YYYY-MM-DD',
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
        if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
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
        sameElse: 'L',
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
        yy: '%d年',
    },
    week: {
        // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
        dow: 1,
        doy: 4, // The week that contains Jan 4th is the first week of the year.
    },
});
export function dynamicWebSocketData() {
    canvas.socket.socket.onerror = function () {
    };
    canvas.socket.socket.onopen = function () {
        if (canvas.data && canvas.data.pens.length > 0) {
            // 有数据，去遍历有websocket的组件，并订阅
            if (canvas.socket != undefined) {
                (canvas.data.pens || []).map(function (node) {
                    var _a, _b, _c, _d, _e, _f;
                    if (((_c = (_b = (_a = node.property) === null || _a === void 0 ? void 0 : _a.dataPointParam) === null || _b === void 0 ? void 0 : _b.qtDataList) === null || _c === void 0 ? void 0 : _c.length) > 0) {
                        canvas.socket.socket.send(JSON.stringify(__assign(__assign({}, node.property.dataPointParam), { tid: node.TID, id: node.id })));
                    }
                    else if (node.data != '' &&
                        node.data != undefined &&
                        ((_f = (_e = (_d = node.data.property) === null || _d === void 0 ? void 0 : _d.dataPointParam) === null || _e === void 0 ? void 0 : _e.qtDataList) === null || _f === void 0 ? void 0 : _f.length) > 0) {
                        canvas.socket.socket.send(JSON.stringify(__assign(__assign({}, node.data.property.dataPointParam), { tid: node.TID, id: node.id })));
                    }
                });
            }
        }
    };
    var times = [];
    canvas.socket.socket.onmessage = function (data) {
        if (canvas.data && canvas.data.pens.length > 0) {
            // 有数据，去遍历有websocket的组件，并订阅
            if (canvas.socket != undefined) {
                (canvas.data.pens || []).map(function (node) {
                    var _a, _b, _c;
                    if (((_c = (_b = (_a = node.property) === null || _a === void 0 ? void 0 : _a.dataPointParam) === null || _b === void 0 ? void 0 : _b.qtDataList) === null || _c === void 0 ? void 0 : _c.length) > 0) {
                        var r = JSON.parse(data.data);
                        if (node.name == 'biciVarer') {
                            if (node.text != r.value) {
                                node.text = r.value;
                                canvas.updateProps(false);
                            }
                        }
                    }
                    else if (node.name == 'echarts') {
                        // 如果是图表组件，下面就需要判断具体的是那种图表组件
                        var theChart = node.data.property.echartsType;
                        var r = JSON.parse(data.data);
                        switch (theChart) {
                            case 'gauge':
                                node.data.echarts.option.series[0].data[0].value = r.value;
                                canvas.updateProps(false);
                                break;
                            case 'timeLine':
                                // const source1 = node.data.echarts.option.series[0].data;
                                //  const time=[r.time,r.value]
                                //  if(source1.length>5){
                                //    source1.shift()
                                //  }
                                //  source1.push(time)
                                //  node.data.echarts.option.series[0].data=source1;
                                //  canvas.updateProps(false)
                                var xAxisData = node.data.echarts.option.xAxis.data;
                                var yAxisData = node.data.echarts.option.series[0].data;
                                if (xAxisData.length > 10) {
                                    xAxisData.shift();
                                }
                                if (yAxisData.length > 10) {
                                    yAxisData.shift();
                                }
                                xAxisData.push(moment(r.time).format('LTS'));
                                yAxisData.push(r.value);
                                node.data.echarts.option.xAxis.data = xAxisData;
                                node.data.echarts.option.series[0].data = yAxisData;
                                canvas.updateProps(false);
                                break;
                            default:
                        }
                    }
                });
            }
        }
    };
}
//# sourceMappingURL=DynamicWebSocketData.js.map