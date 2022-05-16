import {defaultLineColors} from "../../data/defines";

export default {
  name: '计量器',
  icon: 'iconjiliangqi',
  data: {
    text: '',
    rect: {
      width: 20,
      height: 150,
    },
    font: {
      fontSize: 12,
      fontFamily: '"Microsoft YaHei"',
    },
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 0,
    fillStyle: '#F0F0F0',
    name: 'biciMeasure',
    onlySizeX:true,
    property: {
      dataMethod: 'point',
      dataPointSelectedRows: [],
      dataDot: 1,
      dataPointParam: {
        qtDataList: [],
        subscribe: true,
      },
      dataColors: [
        {
          checked: true,
          color: defaultLineColors[0],
          top: 20,
          bottom: null,
        },
        {
          checked: true,
          color: defaultLineColors[1],
          top: 40,
          bottom: null,
        },
        {
          checked: true,
          color: defaultLineColors[2],
          top: 60,
          bottom: null,
        },
        {
          checked: true,
          color: defaultLineColors[3],
          top: 80,
          bottom: null,
        },
        {
          checked: true,
          color: defaultLineColors[4],
          top: 100,
          bottom: null,
        },
      ],
      dataMax: 100,
      dataMin: 0,
      marks:10,
      markChecked:true,
      value:0,
      chartUnitChecked:false,
      chartUnit:'T',
      chartTitleColor:"#222222",
      chartTitleColorChecked: false,
    },
  },
}