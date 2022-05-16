import {TONGJI_DATA,CHART_DATA,PEIDING_DATA,TICKET_LIST_DATA,DATA_BASE_API} from './common';

export default {
  text: '视频监控',
  icon: 'iconshipinjiankong',
  name: '视频监控',
  data: {
    strokeStyle: '#fff',
    rect: {
      x: 100,
      y: 200,
      width: 350,
      height: 200
    },
    name: 'liveVideo',
    elementRendered:false,
    isEditable:false,
    hideRotateCP: true,
    hideInput: true,
    data:{},
    property: {
      video:{
        selectedRowKeys:[],
        selectedRows:[],
      },
      props: {
        iframe:"http://localhost:3000/"
      },
      form:{
        style:[{
          group:'路径配置',
          formItems:[
            { name: ['username'], value: 'Ant Design' },
            { name: ['fontStyle'], value: '#ccc000' },
            { name: ['refreshRate'], value: 10 },
            { name: ['refreshRateCheck'], value: true },
            { name: ['iframe'], value: 'http://localhost:3000/' },
          ]
        },{
          group:'其他设置',
          formItems:[{ name: ['color'], value: '#ccc' }]
        }],
        data:[]
      }
    }
  }
}