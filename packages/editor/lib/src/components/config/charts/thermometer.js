import echarts from 'echarts';
export function getThermometerOption() {
    var TP_value = 40;
    var kd = [];
    var Gradient = [];
    var leftColor;
    var showValue;
    var boxPosition = [65, 0];
    var TP_txt = '';
    // 刻度使用柱状图模拟，短设置1，长的设置3；构造一个数据
    for (var i = 0, len = 100; i <= len; i++) {
        if (i <= 0 || i >= 100) {
            kd.push('-2');
        }
        else {
            if ((i - 10) % 20 === 0) {
                kd.push('-2');
            }
            else if ((i - 10) % 4 === 0) {
                kd.push('-1');
            }
            else {
                kd.push('');
            }
        }
    }
    Gradient.push({
        offset: 0,
        color: 'rgb(0, 76, 245)'
    }, {
        offset: 0.5,
        color: 'rgba(33, 120, 246,1)'
    }, {
        offset: 1,
        color: 'rgba(69, 174, 249,11)'
    });
    if (TP_value > 100) {
        showValue = 100;
    }
    else {
        if (TP_value < -0) {
            showValue = 0;
        }
        else {
            showValue = TP_value;
        }
    }
    leftColor = Gradient[Gradient.length - 1].color;
    // 因为柱状初始化为0，温度存在负值，所以加上负值60和空出距离10
    var option = {
        backgroundColor: '#000',
        title: {
            text: '温度计',
            show: false
        },
        yAxis: [{
                show: true,
                data: [],
                min: 0,
                max: 100,
                axisLine: {
                    show: false
                }
            }, {
                show: false,
                min: 0,
                max: 100,
            }, {
                type: 'category',
                data: ['', '', '', '', '', '', '', '', '', '', ''],
                position: 'right',
                offset: -5,
                axisLabel: {
                    fontSize: 10,
                    color: 'white'
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
            }],
        xAxis: [{
                show: false,
                min: -10,
                max: 80,
                data: []
            }, {
                show: false,
                min: -10,
                max: 80,
                data: []
            }, {
                show: false,
                min: -10,
                max: 80,
                data: []
            }, {
                show: false,
                min: -8,
                max: 80,
                splitLine: {
                    lineStyle: {
                        color: 'rgba(56, 128, 138,1)',
                    }
                }
            }],
        series: [{
                name: '条',
                type: 'bar',
                // 对应上面XAxis的第一个对)象配置
                xAxisIndex: 0,
                data: [{
                        value: showValue,
                        label: {
                            normal: {
                                show: true,
                                position: "top",
                                backgroundColor: {
                                //  image: 'plugin/subway_beijing/images/power/bg5Valuebg.png', //文字框背景图
                                },
                                width: 10,
                                height: 50,
                                formatter: '{back| ' + TP_value + ' }',
                                rich: {
                                    back: {
                                        align: 'center',
                                        lineHeight: 50,
                                        fontSize: 16,
                                        fontFamily: 'digifacewide',
                                        color: leftColor
                                    },
                                }
                            }
                        }
                    }],
                barWidth: 25,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, Gradient)
                    }
                },
                z: 2
            }, {
                name: '白框',
                type: 'bar',
                xAxisIndex: 1,
                barGap: '-100%',
                data: [99],
                barWidth: 25,
                itemStyle: {
                    normal: {
                        color: '#000',
                        barBorderRadius: 0,
                    }
                },
                z: 1
            }, {
                name: '外框',
                type: 'bar',
                xAxisIndex: 2,
                barGap: '-100%',
                data: [100],
                barWidth: 33,
                itemStyle: {
                    normal: {
                        color: 'rgba(56, 128, 138,1)',
                        barBorderRadius: 0,
                    }
                },
                z: 0
            }, {
                name: '刻度',
                type: 'bar',
                yAxisIndex: 0,
                xAxisIndex: 3,
                label: {
                    normal: {
                        show: true,
                        position: 'left',
                        distance: 10,
                        color: 'rgba(56, 128, 138,1)',
                        fontSize: 16,
                        formatter: function (params) {
                            if (params.dataIndex % 10 === 0) {
                                return params.dataIndex;
                            }
                            else if (params.dataIndex == 100) {
                                return params.dataIndex;
                            }
                            else {
                                return "";
                            }
                        }
                    }
                },
                barGap: '-40%',
                data: kd,
                barWidth: 2,
                itemStyle: {
                    normal: {
                        color: 'rgba(56, 128, 138,1)',
                    }
                },
                z: 0
            }]
    };
    return option;
}
//# sourceMappingURL=thermometer.js.map