export default {
    name: '时间',
    icon: 'iconshijian',
    data: {
      text: '2021-01-01 12:00:00',
      hideInput: true,
      rect: {
        width: 200,
        height: 45,
      },
      font: {
        fontSize: 14,
        fontFamily: 'Arial',
      },
      name: 'biciTimer',
      elementRendered: false,
      strokeStyle: 'rgba(0,0,0,0)',
      property: {
        date: {
          show: true,
          format: 'L',
        },
        time: {
          show: true,
          format: 'LTS',
        },
      },
      iconColor: '#ccc',
    },
  }