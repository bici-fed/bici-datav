/**
 * @file 管道画布常量定义
 */

import * as React from "react";
import * as _ from "lodash";
import {BarChartOutlined, RadarChartOutlined} from "@ant-design/icons"



// 组件卡片宽度高度
export const NODE_WIDTH = 220;
export const NODE_HEIGHT = 60;

// 右边菜单栏宽度
export const MENU_WIDTH = 120;
export const MENU_HEIGHT = 196;
// 右边抽屉宽度-通用
export const RIGHTDRAWER_WIDTH = 521;
// 右边抽屉宽度-调度配置
export const SHECHEDULE_RIGHTDRAWER_WIDTH = 750;

// 支持缩放的最大值跟最小值
export const MAX_SCALE = 400;
export const MIN_SCALE = 25;

// 组件之间的间距
export const COMPONENT_DISTANCE = 30;

// 全屏状态的坐标差,顶部导航到画布的距离
export const fullscreenDiffY = 130;

// 顶部导航到画布的固定举例，用于计算Context
export const CONTEXT_HEIGHT_DIFF = 155;

// 连接符
export const CONNECTOR = "_";

// 连线可连线的区域
export const LINK_AREA = 30;

// 连线不同状态的颜色
// 未连接状态
export const UNLINK = "#52619b";
// 选中状态
export const ACTIVE = "#92ade3";
// 连接状态
export const LINK = "#b4bdcf";

// 管道节点code为30，为固定值
export const operatorTypeCode = 30;

// 组件库类型
export enum ComponentType {
  /** 通用 */
  common = "common",
  /** 自定义 */
  //self = 'self'
}
// 工业图片属性
export class ImageProps{
  name!:string;// 非空断言，且不能重复
  url!:string;
  width?:number;
  height?:number;
  type?:string;
  rotate?:number;
  key!:string
}
// 工业图库属性
export interface IndustrialImageProps {
  // 分类类型
  type?:string;
  // 分类标题
  name?:string;
  // 图片路径
  images?:ImageProps[]
}

export const ComponentMap: Record<ComponentType, string> = {
  [ComponentType.common]: "通用",
  //[ComponentType.self]: '图表'
};
export class Stroke {// 直线控件有的属性
  color?:string;
  width?:number;
  dashArray?:string;// 线条类型
  startMarker?:string;// 左边线条箭头类型
  endMarker?:string;// 左边线条箭头类型
  x1?:number;
  y1?:number;
  x2?:number;
  y2?:number;
  transformOrigin?:'left'|'center'|'right'|undefined

}
// 定义echarts表
export class EChart {
  type!: string;
  component!:string;
  options?:any;
  format?:any;// 时间控件有的属性
  stroke?:Stroke;
}

export class Node {
  /** 组件分类类型 */
  type?: string;

  /** 组件key */
  key!: string;// ! 为非空断言

  /** 组件名称 */
  name!: string;

  /** 组件icon */
  icon?: React.ReactNode;

  /** 组件在画布中的横坐标 */
  x?: number;

  /** 组件在画布中的纵坐标 */
  y?: number;

  width?: number;

  height?: number;

  id?: string;

  groupId?: string;

  /** 对应的 ref */
  ref?: any;

  /** 数据分发方式, true:轮流 false:copy */
  distribute?: boolean;

  /** 其他配置信息 */
  webConfig?: {};

  disabled?: boolean;
  /** 定义描述node里面包含的图表 */
  chart?:EChart;

  /**定义基本样式*/
  style?:BaseCompStyle;

  /**定义图层**/
  zIndex?:number;

  /**定义旋转*/
  rotate?:number;
  /** 图片组件才有的URL属性 */
  url?:string;
}

export class NodePanel {
  type!: string;

  key!: string;

  name!: string;

  icon!: React.ReactNode;

  disabled!: boolean;
}

export type LINK_POSITION = "left" | "right" | "top" | "bottom"|undefined;

export interface Link {
  /** 连线的唯一id, source+CONNECTOR+target的形式 */
  id: string;
  /** 来源节点id */
  source: string;
  /** 去向节点id */
  target: string;
  /** 来源节点位置 */
  sourcePos?: string;
  /** 去向节点位置 */
  targetPos?: string;
}

export interface Group {
  /** 组的id */
  id: string;
  /** 组在画布中的横坐标 */
  x: number;

  /** 组在画布中的纵坐标 */
  y: number;

  width: number;

  height: number;

  /** 包含的节点id */
  nodes?: Node[];

  /** 对应的 ref */
  ref?: any;

  /** 父级 */
  parentId?: string;

  /** 其他信息 */
  extraInfo?: any;
}

// group padding
export const GROUP_PADDING = 20;

// 连线中的icon，宽高
export const LINKICON_WIDTH = 18;
export const LINKICON_HEIGHT = 18;

export enum ComponentKey {
  rect = "rect",
  rectRadius = "rectRadius",
  circle = "circle",
  diamond = "diamond",
  polygon = "polygon",
  ellipse = "ellipse",
  star = "star",
  text = "text",
  line = "line",
  table = "table",
  time = "time",
}
// 基本组件的基本样式属性
export class BaseCompStyle {
  left?:string;
  top?:string;
  width?:string;
  height?:string;
  fontFamily?:string;
  fontSize?:number
  textAlign?:'left'|'center'|'right'|undefined;
  verticalAlign?:'top'|'middle'|'bottom'|'sub'|'super'|undefined;
  fontWeight?:string;
  textDecoration?:string;
  backgroundColor?:string;
  fontStyle?:string;
  opacity?:number;
  borderSize?:number;
  borderStyle?:'solid'|'dotted'|undefined;
  borderWidth?:number;
  borderColor?:string;
  color?:string;
}

export const keyCodeMap = {
  delete: 8,
  copy: 67,
  paste: 86
};

export const colorList=[
  "rgba(156, 25, 25, 1)",
  "rgba(65, 117, 5, 1)",
  "rgba(144, 19, 254, 1)",
  "rgba(139, 87, 42, 1)",
  "rgba(208, 2, 27, 1)",
  "rgba(126, 211, 33, 1)",
  "rgba(45, 65, 181, 1)",
  "rgba(179, 156, 156, 1)",
  "rgba(137, 116, 116, 1)",
  "rgba(97, 147, 39, 1)"
]

export const defaultLineColors=[
  "#E63C5F",
  "#6236FF",
  "#157EFB",
  "#1EC622",
  "#F7B500",
  "#673D3D",
  "#44D7B6",
  "#71A3CB",
  "#766863",
  "#FA6400"
]
export const defaultChartColors=[
  "#157EFB",
  "#F7B500",
  "#1EC622",
  "#E63C5F",
  "#44D7B6",
  "#6236FF",
  "#673D3D",
  "#71A3CB",
  "#766863",
  "#FA6400"
]

export const DATA_STATUS = {
  '-1': '无数据',
  '1': '正常',
  '2': '超过正常',
  '3': '低于下限'
}


export const lineRangedefaultColor = defaultChartColors.map((color) => {
  return {
    lineGraphRangeColor: color,
    lineGraphRangeCheck:true
  };
});

// 实时曲线显示多少个时刻点
export const defaultTimelineShowData=80;

/** 处理弹窗全屏挂载 */
export function getContainer() {
  const pipelineDoms = document.getElementsByClassName("pipeline-canvas");
  return _.find(
    pipelineDoms,
    dom => (dom as HTMLElement).offsetParent
  ) as HTMLElement;
}

/**
 * @file 类型定义文件
 */
class MenuPos {
  id?: string;

  x!: number;

  y!: number;
}

// 节点宽高
export const VERTEX_WIDTH = 180;
export const VERTEX_HEIGHT = 32;

export { MenuPos };

// 操作类型
export enum OperateType {
  copy = "copy",
  delete = "delete"
}

export class BgImagesProps{
  key:number;
  img:any;
}

export class DataVEditorProps{
  // api域名
  apiURL?:string;
  // token
  token?:string;
  // 数据保存到本地后的回掉的是
  onEditorSaveCb?:(data:any)=>void;
  // 用户自定义图库
  selfIndustrialLibrary:ImageProps[];
  // 预设背景图片 图片访问路径
  preInstallBgImages?:BgImagesProps[];
  // 面板数据和配置
  editorData?: any;// json对象
  // 看板数据
  boardData?: any;
  // 自定义预览按钮的功能
  onPreview?:()=>void;
  // 当点击退出按钮时
  onPoweroff?:()=>void;
  /** 间隔几分钟保存数据 */
  autoSaveInterval?:number;
  // 当点击额外配置按钮的回掉
  onExtraSetting?:()=>void;
  // 预设工业图库
  industrialLibrary?:IndustrialImageProps[];
  // 图片上传配置
  uploadConfig?:uploadConfigProps;
  // websocket配置
  websocketConf?:{
    url:string,
    video?:{
      updateStream:string;
      rePushStream:string;
      pushStream:string;
    };
    toolsConfig:any;
  }
  history?: any;
  key?:number;
  ref?:any;
  // 点击添加数据点的按钮
  onAddDataPoint?:(node:Node,disableSource:string[],selectedRowKeys:string[])=>void;
  // 点击添加视频源按钮
  onAddVedioSource?:(node:Node,disableSource:string[],selectedRowKeys:string[])=>void;
  dataPointPropsMap:DataPointPropsMap;
}

export class DataPointPropsMap {
  id:string;
  type:string;// 数据点、复杂感知点,数字机理，可能没有
  dataName:string;
  intervalTime:string;
  scopeMin:string;
  scopeMax:string;
}

export class uploadConfigProps{
  /**基本路径*/
  baseURL!:string;
  /**自定义组件文件上传路径*/
  self!:UploadURIProps;
  preInstall!:UploadURIProps;
  industry:any;
  // 组合组件
  combineCom?:{
    apiURL:string;
    token:string;
    list:{
      url:string;
      params:object
    },
    add:{
      url:string;
      params:object
    },
    delete:{
      url:string;
      params:object
    },
    rename:{
      url:string;
      params:object
    }
  };
}
export class UploadURIProps{
  baseURL!:string;
  url!:string;
  /**请求token*/
  token!:string;
  /**需要传递的额外数据,json对象，智能嵌套一层*/
  data?:object;
}

// 基于 jsencrypt 的 RSA 验证私匙
export const privateKey =
    'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCvJGaiiS3oLK9QXgm1jpzKe3g4jKRu0zXWqjaazh9NW13vdMcu3ctKT2+GqV9I7FMBgP69p9LX1hOXoSmagYB5Qku1Vrjx03mjnhcYaCleJzv7vksb8Rsx/Dd8pRCVoYvjsgawYB+oxnvlHKvk7d/XuHCOY02Tod21KpsBQ6Z9AwIDAQAB';

