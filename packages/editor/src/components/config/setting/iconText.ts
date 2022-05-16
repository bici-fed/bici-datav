import {TONGJI_DATA,CHART_DATA,PEIDING_DATA,TICKET_LIST_DATA,DATA_BASE_API} from './common';

export default {
    name: '图标文本',
    icon: 'iconjuxing',
    data: {
      text: '暂无数据',
      rect: {
        width: 112,
        height: 40,
      },
      font: {
        fontSize: 14,
        fontFamily: '"Microsoft YaHei"',
      },
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 10,
      paddingBottom: 10,
      borderRadius: 4,
      fillStyle: '#F0F0F0',
      hideInput:true,
      name: 'rectangle',
      image:'https://bici-qt.oss-cn-hangzhou.aliyuncs.com/industry/化工/2021/01/2ffed161677c449bb882cdba47c55f67诱导循环结晶器.png',
      imageWidth:20,
      property: {
        dataMethod: 'point',
        dataDot: 2,
        dataPointSelectedRows: [],
        dataPointParam: {
          qtDataList: [],
          subscribe: true,
        },
      },
    },
  }