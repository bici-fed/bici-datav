import { CHART_DATA } from './common';
import { getHorizontalBarOption } from "../charts/horizontalbar";
import { lineRangedefaultColor } from '../../data/defines';
export default {
    name: '条形图',
    icon: 'icontiaoxingtu',
    data: {
        text: '',
        rect: {
            width: 450,
            height: 250,
        },
        name: 'echarts',
        strokeStyle: 'rgba(0,0,0,0)',
        elementRendered: true,
        hideRotateCP: true,
        hideInput: true,
        data: {
            echarts: {
                option: getHorizontalBarOption()
            },
        },
        property: {
            echartsType: 'horizontalBar',
            dataMethod: 'restful',
            dataFormat: CHART_DATA,
            dataUrl: 'http://qt.test.bicisims.com/api/applications/service/remote/customComponent/list',
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
                            { name: ['title'], value: '条形图' },
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
                        group: "填充",
                        formItems: [
                            { name: ['lineGraphRange'], value: lineRangedefaultColor },
                            { name: ['chartBkColor'], value: '#999999' },
                            { name: ['chartBkColorShow'], value: false },
                            { name: ['chartRefLineShow'], value: false },
                            { name: ['chartRefLineColor'], value: '#ccc' },
                            { name: ['chartOrder'], value: 'desc' },
                            { name: ['chartOrderChecked'], value: false },
                        ],
                    }],
                data: []
            }
        },
    },
};
//# sourceMappingURL=horizontalBar.js.map