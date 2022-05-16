import rectangle from './setting/rectangle';
import circle from './setting/circle';
import text from './setting/text';
import biciTimer from './setting/biciTimer';
import biciVarer from './setting/biciVarer';
import biciCard from './setting/biciCard';
import biciPilot from './setting/biciPilot';
import line from './setting/line';
import dataTable from "./setting/dataTable";
import webPage from "./setting/webPage";
import liveVideo from "./setting/liveVideo";
import groupBar from "./setting/groupBar";
import verticalBar from "./setting/verticalBar";
import stackBar from "./setting/stackBar";
import horizontalBar from "./setting/horizontalBar";
import circleAndPie from "./setting/circleAndPie";
import gauge from "./setting/gauge";
import biciMeasure from "./setting/biciMeasure";
import timeLine from "./setting/timeLine";
import video from "./setting/video";
import dateFormat from "./setting/dateFormat";


// biciText=数据统计
// biciCard2=数据卡片2 华夏演示专用
export const defaultToolsConfig=[
  'rectangle',
  'circle',
  'text',
  'biciTimer',
  'biciVarer',
  'biciPilot',
  'biciText',
  'biciCard',
  'biciCard2',
  'line',
  'webPage',
  'dataTable',
  'liveVideo',
  'video',
  'groupBar',
  'verticalBar',
  'stackBar',
  'horizontalBar',
  'circleAndPie',
  'gauge',
  'biciMeasure',
  'timeLine',
  'gbImage',
  'productionStatus',
  'pointEnergyCarousel',
  'dateFormat',
];


export const Tools = [
  {
    group: '通用组件',
    children: {
      rectangle: rectangle,
      circle: circle,
      text: text,
      biciTimer:biciTimer,
      dateFormat:dateFormat,
      biciVarer:biciVarer,
      biciCard: biciCard,
      biciPilot: biciPilot,
      line: line,
      dataTable: dataTable,
      webPage: webPage,
      liveVideo: liveVideo,
      video: video,
    },
  },
  {
    group: '图表控件',
    children: {
      groupBar: groupBar,
      verticalBar: verticalBar,
      stackBar: stackBar,
      horizontalBar: horizontalBar,
      circleAndPie: circleAndPie,
      gauge: gauge,
      biciMeasure: biciMeasure,
      timeLine: timeLine,
    },
  },
];
