/**
 * @file 管道画布常量定义
 */
var _a;
import * as _ from "lodash";
// 组件卡片宽度高度
export var NODE_WIDTH = 220;
export var NODE_HEIGHT = 60;
// 右边菜单栏宽度
export var MENU_WIDTH = 120;
export var MENU_HEIGHT = 196;
// 右边抽屉宽度-通用
export var RIGHTDRAWER_WIDTH = 521;
// 右边抽屉宽度-调度配置
export var SHECHEDULE_RIGHTDRAWER_WIDTH = 750;
// 支持缩放的最大值跟最小值
export var MAX_SCALE = 400;
export var MIN_SCALE = 25;
// 组件之间的间距
export var COMPONENT_DISTANCE = 30;
// 全屏状态的坐标差,顶部导航到画布的距离
export var fullscreenDiffY = 130;
// 顶部导航到画布的固定举例，用于计算Context
export var CONTEXT_HEIGHT_DIFF = 155;
// 连接符
export var CONNECTOR = "_";
// 连线可连线的区域
export var LINK_AREA = 30;
// 连线不同状态的颜色
// 未连接状态
export var UNLINK = "#52619b";
// 选中状态
export var ACTIVE = "#92ade3";
// 连接状态
export var LINK = "#b4bdcf";
// 管道节点code为30，为固定值
export var operatorTypeCode = 30;
// 组件库类型
export var ComponentType;
(function (ComponentType) {
    /** 通用 */
    ComponentType["common"] = "common";
    /** 自定义 */
    //self = 'self'
})(ComponentType || (ComponentType = {}));
// 工业图片属性
var ImageProps = /** @class */ (function () {
    function ImageProps() {
    }
    return ImageProps;
}());
export { ImageProps };
export var ComponentMap = (_a = {},
    _a[ComponentType.common] = "通用",
    _a);
var Stroke = /** @class */ (function () {
    function Stroke() {
    }
    return Stroke;
}());
export { Stroke };
// 定义echarts表
var EChart = /** @class */ (function () {
    function EChart() {
    }
    return EChart;
}());
export { EChart };
var Node = /** @class */ (function () {
    function Node() {
    }
    return Node;
}());
export { Node };
var NodePanel = /** @class */ (function () {
    function NodePanel() {
    }
    return NodePanel;
}());
export { NodePanel };
// group padding
export var GROUP_PADDING = 20;
// 连线中的icon，宽高
export var LINKICON_WIDTH = 18;
export var LINKICON_HEIGHT = 18;
export var ComponentKey;
(function (ComponentKey) {
    ComponentKey["rect"] = "rect";
    ComponentKey["rectRadius"] = "rectRadius";
    ComponentKey["circle"] = "circle";
    ComponentKey["diamond"] = "diamond";
    ComponentKey["polygon"] = "polygon";
    ComponentKey["ellipse"] = "ellipse";
    ComponentKey["star"] = "star";
    ComponentKey["text"] = "text";
    ComponentKey["line"] = "line";
    ComponentKey["table"] = "table";
    ComponentKey["time"] = "time";
})(ComponentKey || (ComponentKey = {}));
// 基本组件的基本样式属性
var BaseCompStyle = /** @class */ (function () {
    function BaseCompStyle() {
    }
    return BaseCompStyle;
}());
export { BaseCompStyle };
export var keyCodeMap = {
    delete: 8,
    copy: 67,
    paste: 86
};
export var colorList = [
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
];
export var defaultLineColors = [
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
];
export var defaultChartColors = [
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
];
export var DATA_STATUS = {
    '-1': '无数据',
    '1': '正常',
    '2': '超过正常',
    '3': '低于下限'
};
export var lineRangedefaultColor = defaultChartColors.map(function (color) {
    return {
        lineGraphRangeColor: color,
        lineGraphRangeCheck: true
    };
});
// 实时曲线显示多少个时刻点
export var defaultTimelineShowData = 80;
/** 处理弹窗全屏挂载 */
export function getContainer() {
    var pipelineDoms = document.getElementsByClassName("pipeline-canvas");
    return _.find(pipelineDoms, function (dom) { return dom.offsetParent; });
}
/**
 * @file 类型定义文件
 */
var MenuPos = /** @class */ (function () {
    function MenuPos() {
    }
    return MenuPos;
}());
// 节点宽高
export var VERTEX_WIDTH = 180;
export var VERTEX_HEIGHT = 32;
export { MenuPos };
// 操作类型
export var OperateType;
(function (OperateType) {
    OperateType["copy"] = "copy";
    OperateType["delete"] = "delete";
})(OperateType || (OperateType = {}));
var BgImagesProps = /** @class */ (function () {
    function BgImagesProps() {
    }
    return BgImagesProps;
}());
export { BgImagesProps };
var DataVEditorProps = /** @class */ (function () {
    function DataVEditorProps() {
    }
    return DataVEditorProps;
}());
export { DataVEditorProps };
var DataPointPropsMap = /** @class */ (function () {
    function DataPointPropsMap() {
    }
    return DataPointPropsMap;
}());
export { DataPointPropsMap };
var uploadConfigProps = /** @class */ (function () {
    function uploadConfigProps() {
    }
    return uploadConfigProps;
}());
export { uploadConfigProps };
var UploadURIProps = /** @class */ (function () {
    function UploadURIProps() {
    }
    return UploadURIProps;
}());
export { UploadURIProps };
// 基于 jsencrypt 的 RSA 验证私匙
export var privateKey = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCvJGaiiS3oLK9QXgm1jpzKe3g4jKRu0zXWqjaazh9NW13vdMcu3ctKT2+GqV9I7FMBgP69p9LX1hOXoSmagYB5Qku1Vrjx03mjnhcYaCleJzv7vksb8Rsx/Dd8pRCVoYvjsgawYB+oxnvlHKvk7d/XuHCOY02Tod21KpsBQ6Z9AwIDAQAB';
//# sourceMappingURL=defines.js.map