export default {
    name: '分钟格式化',
    icon: 'iconbianliangzhi',
    data: {
      rect: {
        width: 100,
        height: 45,
      },
      font: {
        fontSize: 14,
        fontFamily: 'Arial',
      },
      name: 'dateFormat',
      elementRendered: false,
      hideInput:true,
      strokeStyle: 'rgba(0,0,0,0)',
      iconColor: '#ccc',
      property: {
        props:{
          style:{
            color: 'red',
          }
        },
        text: '1分钟前',
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
