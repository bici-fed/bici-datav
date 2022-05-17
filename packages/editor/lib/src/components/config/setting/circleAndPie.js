import { CHART_DATA, DATA_BASE_API } from './common';
import { getPieOption } from "../charts/pie";
import { lineRangedefaultColor } from '../../data/defines';
export default {
    name: '饼状图',
    icon: 'iconbingzhuangtu1',
    data: {
        text: '',
        rect: {
            width: 250,
            height: 180,
        },
        name: 'echarts',
        strokeStyle: 'rgba(0,0,0,0)',
        elementRendered: true,
        hideRotateCP: true,
        hideInput: true,
        data: {
            echarts: {
                option: getPieOption()
            },
        },
        property: {
            echartsType: 'circleAndPie',
            dataMethod: 'restful',
            dataFormat: CHART_DATA,
            dataUrl: DATA_BASE_API + '/creditBalance/productReceiveMonthQtChart',
            dataSourceId: undefined,
            dataSourceUrl: undefined,
            pullRate: 120,
            dataDot: 2,
            dataPointSelectedRows: [],
            dataPointParam: {
                qtDataList: [],
                subscribe: true,
            },
            props: {
                iframe: "abcd"
            },
            form: {
                style: [{
                        group: '标题字符',
                        formItems: [
                            { name: ['title'], value: '饼/环状图' },
                            { name: ['titleShow'], value: true },
                            { name: ['titleFontFamily'], value: '"Microsoft YaHei"' },
                            { name: ['titleFontColor'], value: "#333333" },
                            { name: ['titleFontSize'], value: 14 },
                            { name: ['titleFontBold'], value: 800 },
                            { name: ['titleFontItalic'], value: "normal" },
                            { name: ['titleFontBaseline'], value: "underline" },
                            { name: ['titlePosition'], value: "left" },
                            { name: ['titleFontStyle'], value: [
                                    { name: "bold", value: 800, checked: false, icon: 'iconjiacu' },
                                    { name: "italic", value: "italic", checked: false, icon: 'iconzu' },
                                    // {name:"baseline",value:"baseline",checked:false,icon:'iconjiacu'}
                                ] },
                        ]
                    }, {
                        group: '图表设置',
                        formItems: [
                            { name: ['chartShape'], value: 'pie' },
                            { name: ['chartBkColor'], value: '#ccc' },
                            { name: ['chartBkColorChecked'], value: false },
                            { name: ['lineGraphRange'], value: lineRangedefaultColor },
                        ]
                    }],
                data: [{
                        group: "绑定数据",
                        forItems: [
                            { name: ['dataMethod'], value: "restful" },
                        ]
                    }]
            }
        },
    },
};
//# sourceMappingURL=circleAndPie.js.map