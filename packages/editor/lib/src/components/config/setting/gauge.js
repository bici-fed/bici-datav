import { defaultLineColors } from "../../data/defines";
import { getGaugeOption } from "../charts/gauge";
export default {
    name: '仪表盘',
    icon: 'iconyibiaopan',
    data: {
        elementRendered: false,
        text: '',
        hideInput: true,
        rect: {
            width: 300,
            height: 300,
        },
        strokeStyle: 'rgba(0,0,0,0)',
        hideRotateCP: true,
        lineWidth: 0,
        name: 'echarts',
        paddingTopNum: 0,
        paddingRightNum: 0,
        paddingBottomNum: 0,
        paddingLeftNum: 0,
        data: {
            echarts: {
                option: getGaugeOption(),
            },
        },
        property: {
            echartsType: 'gauge',
            dataMethod: 'point',
            dataDot: 1,
            dataPointSelectedRows: [],
            dataPointParam: {
                qtDataList: [],
                subscribe: true,
            },
            dataColors: [
                {
                    checked: false,
                    color: defaultLineColors[0],
                    top: 20,
                    bottom: null,
                },
                {
                    checked: false,
                    color: defaultLineColors[1],
                    top: 40,
                    bottom: null,
                },
                {
                    checked: false,
                    color: defaultLineColors[2],
                    top: 60,
                    bottom: null,
                },
                {
                    checked: false,
                    color: defaultLineColors[3],
                    top: 80,
                    bottom: null,
                },
                {
                    checked: false,
                    color: defaultLineColors[4],
                    top: 100,
                    bottom: null,
                },
            ],
            dataMax: 100,
            dataMin: 0,
            chartTitle: '仪表盘',
            chartTitleChecked: false,
            chartUnitChecked: false,
            chartUnit: 'C',
            marks: 10,
            markChecked: true,
            chartTitleColor: "#222222",
            chartTitleColorChecked: false,
        },
    },
};
//# sourceMappingURL=gauge.js.map