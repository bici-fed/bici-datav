import {TONGJI_DATA,CHART_DATA,PEIDING_DATA,TICKET_LIST_DATA,DATA_BASE_API} from './common';

export default {
  text: '表格',
  icon: 'iconshujuliebiao1',
  name: '数据列表',
  data: {
    strokeStyle: 'rgba(0,0,0,0)',
    rect: {
      x: 100,
      y: 200,
      width: 515,
      height: 180
    },
    name: 'dataTable',
    hideRotateCP: true,
    hideInput: true,
    property: {
      props: {
        
      },
      echartsType: 'dataTable',
      dataMethod: 'point',
      pullRate: 120,
      dataDot:2,
      pullRateUnit: 60,
      dataFormat: CHART_DATA,
      dataPointSelectedRows: [],
      dataPointParam: {
        qtDataList: [],
        subscribe: true,
      },
      dataSourceId:undefined,
      dataSourceUrl:undefined,
      form:{
        style:[{
          group:'字符',
          formItems:[
            { name: ['titleShow'], value: true },
            { name: ['titleFontFamily'], value: '"Microsoft YaHei"' },
            { name: ['titleFontColor'], value: "#333333" },
            { name: ['titleFontSize'], value: 14 },
            { name: ['headerFontColor'], value: "#666666" },
            { name: ['headerFontSize'], value: 18 },
            { name: ['titleFontBold'], value: 800 },
            { name: ['titleFontItalic'], value: "normal" },
            { name: ['titleFontBaseline'], value: "underline" },
            { name: ['titlePosition'], value: "left" },
            { name: ['titleFontStyle'], value: [
                {name:"bold",value: 800,checked:false,icon:'iconjiacu'},
                {name:"italic",value:"italic",checked:false,icon:'iconzu'},
                {name:"baseline",value:"baseline",checked:false,icon:'iconxiahuaxian1'}
              ]},
          ]
        },{
          group:'填充和边框',
          formItems:[
            {name:['theadBkColor'],value:'#999999'},
            {name:['theadBkColorShow'], value: true },
            {name:['tbodyBkColor'],value:'#999999'},
            {name:['tbodyBkColorShow'], value: true },
            {name:['tbBorderShow'], value: true },
            {name:['tbBorderColor'], value: "#333333" },
            {name:['tbBorderSize'], value: 1 },
          ]
        }],
        data:[]
      },
    }
  }
}