import {TONGJI_DATA,CHART_DATA,PEIDING_DATA,TICKET_LIST_DATA,DATA_BASE_API} from './common';

export default {
    name: '数据卡片',
    icon: 'iconshujukapian',
    data: {
      text: '数据卡片',
      hideInput: true,
      hideRotateCP: true,
      rect: {
        width: 200,
        height: 100,
      },
      paddingTop: 30,
      font: {
        fontFamily: '"Microsoft YaHei"',
        color: '#fff',
        fontSize: 14,
        fontWeight: 400,
      },
      fillStyle: '#6236FF',
      strokeStyle: '#222',
      lineWidth: 0,
      name: 'biciCard',
      children: [
        {
          text: '0.00',
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
            color: '#fff',
            textAlign: 'center',
            fontSize: 42,
            textBaseline: 'middle',
            fontWeight: 400,
          },
        },
        {
          text: '',
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
            color: '#fff',
            fontSize: 14,
            fontWeight: 400,
            textAlign: 'center',
            textBaseline: 'middle',
          },
        },
      ],
      property: {
        cardTitle: '数据卡片',
        showTitle: true,
        limitType: 'custom', // 数据类型：dataPoint 数据点  custom 自定义
        showLimit: false, // 展示上下限
        limit: {
          bottom: undefined, // 下限
          top: undefined, // 上限
        },
        normal: {
          fontFamily: 'Arial',
          fontSize: 42,
          color: '#fff',
          showBkColor: true,
          bkColor: '#6236FF',
        },
        topLimit: {
          fontFamily: 'Arial',
          fontSize: 42,
          color: '#fff',
          showBkColor: true,
          bkColor: '#766863',
        },
        bottomLimit: {
          fontFamily: 'Arial',
          fontSize: 42,
          color: '#fff',
          showBkColor: true,
          bkColor: '#FA6400',
        },
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