export function getLiquidFillOption(node, resData) {
    if (node === void 0) { node = null; }
    if (resData === void 0) { resData = null; }
    var colors = [
        "#98a4b9",
        "#1EC622",
        "#9ec2ff",
        "#c4daff",
        "#c8cbd2",
        "#b0b7c4",
        "#98a4b9",
        "#778398",
        "#ffc0a9",
        "#ff9898"
    ];
    var names = ['65%'];
    var option = {
        legend: {
            show: false,
        },
        series: [{
                type: 'pie',
                radius: '100%',
                center: ['50%', '50%'],
                startAngle: 0,
                endAngle: 180,
                clockwise: false,
                label: {
                    normal: {
                        show: false,
                    }
                },
                data: [{
                        value: 10,
                        name: names[0],
                        label: {
                            show: true,
                            position: 'center',
                            fontSize: 18,
                            color: '#ffffff',
                            fontWeight: 800,
                        },
                        itemStyle: {
                            normal: {
                                color: colors[0]
                            }
                        },
                    }, {
                        value: 10,
                        name: names[1],
                        itemStyle: {
                            normal: {
                                color: colors[1]
                            }
                        }
                    }]
            }]
    };
    return option;
}
//# sourceMappingURL=liquidFill.js.map