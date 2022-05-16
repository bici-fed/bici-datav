import {TONGJI_DATA,CHART_DATA,PEIDING_DATA,TICKET_LIST_DATA,DATA_BASE_API} from './common';

export default {
    name: '数据统计',
    icon: 'iconshujukapian',
    data: {
      text: '',
      hideInput: true,
      hideRotateCP: true,
      rect: {
        width: 120,
        height: 70,
      },
      paddingTop: 0,
      font: {
        fontFamily: '"Microsoft YaHei"',
        color: '#fff',
        fontSize: 14,
        fontWeight: 400,
      },
      fillStyle: '#6236FF',
      strokeStyle: '#222',
      lineWidth: 0,
      name: 'biciText',
      children: [
        {
          text: '150T',
          name: 'text',
          hideInput: true,
          hideAnchor: true,
          hideRotateCP: true,
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: '50%',
          paddingBottom: 10,
          rectInParent: {
            x: 0,
            y: 0,
            width: '100%',
            height: '50%',
          },
          font: {
            fontFamily: 'Arial',
            color: '#333333',
            textAlign: 'center',
            fontSize: 24,
            textBaseline: 'middle',
            fontWeight: 100,
            fontStyle:'italic'
          },
        },
        {
          text: '产量',
          name: 'text',
          hideInput: true,
          hideAnchor: true,
          hideRotateCP: true,
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: '50%',
          paddingBottom: 10,
          rectInParent: {
            x: 0,
            y: '50%',
            width: '100%',
            height: '50%',
          },
          font: {
            fontFamily: 'Arial',
            color: '#333333',
            fontSize: 14,
            fontWeight: 800,
            textAlign: 'center',
            textBaseline: 'middle',
          },
        },
      ],
      property: {
        dataMethod:'restful',
        dataFormat:TONGJI_DATA,
        dataUrl:DATA_BASE_API+'/creditBalance/productReceiveMonthQtTitleWeight',
        pullRate: 120,
        dataDot:2,
        props: {
          iframe:"abcd"
        },
        form:{
          style:[{
            group:'标题字符',
            formItems:[
              { name: ['titleFontFamily'], value: 'Arial' },
              { name: ['titleFontColor'], value: "#333333" },
              { name: ['titleFontSize'], value: 24 },
              { name: ['titleFontBold'], value: 800 },
              { name: ['titleFontItalic'], value: "normal" },
              { name: ['titleFontBaseline'], value: "underline" },
              { name: ['titlePosition'], value: "center" },
              { name: ['titleFontStyle'], value: [
                  {name:"bold",value: 800,checked:false,icon:'iconjiacu'},
                  {name:"italic",value:"italic",checked:false,icon:'iconzu'},
                  // {name:"baseline",value:"baseline",checked:false,icon:'iconjiacu'}
                ]},
            ]
          },{
            group:'副标题',
            formItems:[
              { name: ['titleFontFamily'], value: 'Arial' },
              { name: ['titleFontColor'], value: "#333333" },
              { name: ['titleFontSize'], value: 14 },
              { name: ['titleFontBold'], value: 800 },
              { name: ['titleFontItalic'], value: "normal" },
              { name: ['titleFontBaseline'], value: "underline" },
              { name: ['titlePosition'], value: "center" },
              { name: ['titleFontStyle'], value: [
                  {name:"bold",value: 800,checked:false,icon:'iconjiacu'},
                  {name:"italic",value:"italic",checked:false,icon:'iconzu'},
                  // {name:"baseline",value:"baseline",checked:false,icon:'iconjiacu'}
                ]},
            ]
          }],
          data:[{
            group:"绑定数据",
            forItems:[
              { name:['dataMethod'],value:"restful" },
            ]
          }]
        }
      },
    },
  }