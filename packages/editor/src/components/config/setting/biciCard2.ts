import {TONGJI_DATA,CHART_DATA,PEIDING_DATA,TICKET_LIST_DATA,DATA_BASE_API} from './common';

export default {
  name: '数据卡片2',
  icon: 'iconshujukapian',
  data: {
    text: '',
    hideInput: true,
    hideRotateCP: true,
    rect: {
      width: 200,
      height: 40,
    },
    paddingTop: 10,
    paddingBottom: 10,
    font: {
      fontFamily: '"Microsoft YaHei"',
      color: '#fff',
      fontSize: 14,
      fontWeight: 400,
    },
    fillStyle: '',
    strokeStyle: 'rgba(0,0,0,0)',
    lineWidth: 0,
    name: 'biciCard2',
    children: [
      {
        text: '正在生产',
        name: 'text',
        hideInput: true,
        hideAnchor: true,
        hideRotateCP: true,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        rectInParent: {
          x: 0,
          y: 0,
          width: '35%',
          height: '100%',
        },
        font: {
          fontFamily: 'Arial',
          color: '#fff',
          textAlign: 'center',
          fontSize: 14,
          textBaseline: 'middle',
          fontWeight: 400,
        },
      },
      {
        text: '数字钢厂产品名称',
        name: 'text',
        hideInput: true,
        hideAnchor: true,
        hideRotateCP: true,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        rectInParent: {
          x: '35%',
          y: 0,
          width: '35%',
          height: '100%',
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
      {
        text: '1234567',
        name: 'text',
        hideInput: true,
        hideAnchor: true,
        hideRotateCP: true,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        rectInParent: {
          x: '70%',
          y: 0,
          width: '30%',
          height: '100%',
        },
        font: {
          fontFamily: 'Arial',
          color: '#fff',
          fontSize: 14,
          fontWeight: 400,
          textAlign: 'center',
          textBaseline: 'middle',
        },
      }
    ],
    property: {
      dataMethod: 'restful',
      dataDot: 2,
      dataFormat:TONGJI_DATA,
      dataUrl:DATA_BASE_API+'/creditBalance/currentProduceTicket',
      pullRate: 120,
      props: {
        iframe:"abcd"
      },
    }
  },
}