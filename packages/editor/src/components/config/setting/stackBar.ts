import {TONGJI_DATA,CHART_DATA,PEIDING_DATA,TICKET_LIST_DATA,DATA_BASE_API} from './common';
import {getStackBarOption} from "../charts/stackbar";
import {lineRangedefaultColor} from '../../data/defines';



export default {
  name: '堆叠柱状图',
  icon: 'iconzhuzhuangtu1',
  data: {
    text: '',
    rect: {
      width: 362,
      height: 200,
    },
    name: 'echarts',
    strokeStyle: 'rgba(0,0,0,0)',
    elementRendered: false,
    hideRotateCP: true,
    hideInput: true,
    data: {
      echarts: {
        option: getStackBarOption()
      },
    },
    property: {
      echartsType: 'stackBar',
      dataMethod:'restful',
      dataFormat:CHART_DATA,
      dataUrl:DATA_BASE_API+'/creditBalance/storageGoodsReportQtMonth',
      dataSourceId:undefined,
      dataSourceUrl:undefined,
      pullRate: 120,
      dataDot:2,
      pullRateUnit: 60,
      props: {
        iframe:"abcd"
      },
      form:{
        style:[{
          group:'标题字符',
          formItems:[
            { name: ['title'], value: '堆叠柱状图' },
            { name: ['titleShow'], value: true },
            { name: ['titleFontFamily'], value: '"Microsoft YaHei"' },
            { name: ['titleFontColor'], value: "#333333" },
            { name: ['titleFontSize'], value: 14 },
            { name: ['titleFontBold'], value: 800 },
            { name: ['titleFontItalic'], value: "normal" },
            { name: ['titleFontBaseline'], value: "underline" },
            { name: ['titlePosition'], value: "left" },
            { name: ['titleFontStyle'], value: [
                {name:"bold",value: 800,checked:false,icon:'iconjiacu'},
                {name:"italic",value:"italic",checked:false,icon:'iconzu'},
                // {name:"baseline",value:"baseline",checked:false,icon:'iconjiacu'}
              ]},
          ]
        },{
          group:"填充",
          formItems:[
            {name: ['lineGraphRange'],value:lineRangedefaultColor},
            {name:['chartBkColor'],value:'#999999'},
            {name:['chartBkColorShow'], value: false },
            {name:['chartRefLineShow'], value: false },
            {name:['chartRefLineColor'], value: '#ccc' },
          ],
        }],
        data:[]
      }
    },
  },
}