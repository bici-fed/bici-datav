import {TONGJI_DATA,CHART_DATA,PEIDING_DATA,TICKET_LIST_DATA,DATA_BASE_API} from './common';

export default {
  name: '直线',
  icon: 'iconzhixian',
  data: {
    text: '',
    type: 1,
    data:{
      type:'myLine'
    },
    rect:{
      x:0,
      y:100,
      width:100,
      height:0,
    },
    controlPoints: [
      { x: 0, y: 0 },
      { x: 0, y: 100 },
    ],
    name: 'line',
  },
}