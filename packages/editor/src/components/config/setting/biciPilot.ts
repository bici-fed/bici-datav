import {TONGJI_DATA,CHART_DATA,PEIDING_DATA,TICKET_LIST_DATA,DATA_BASE_API} from './common';

export default  {
    name: '指示灯',
    icon: 'iconzhishideng',
    data: {
      text: '指示灯',
      hideInput: true,
      rect: {
        width: 30,
        height: 30,
      },
      font: {
        fontFamily: '"Microsoft YaHei"',
        textAlign: 'left',
        fontSize: 14,
      },
      // hideAnchor: true,
      hideRotateCP: true,
      name: 'biciPilot',
      property: {
        val: 0,
        color: '#222',
        size: 15,
        text: '指示灯',
        showText: true,
        stateType: 'single', // 状态定义: single 单点值,  range 范围值
        lightRange: [], // 指示灯 状态定义 列表
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