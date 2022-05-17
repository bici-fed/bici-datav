/**
 * @file 管道画布常量定义
 */
import * as React from "react";
export declare const NODE_WIDTH = 220;
export declare const NODE_HEIGHT = 60;
export declare const MENU_WIDTH = 120;
export declare const MENU_HEIGHT = 196;
export declare const RIGHTDRAWER_WIDTH = 521;
export declare const SHECHEDULE_RIGHTDRAWER_WIDTH = 750;
export declare const MAX_SCALE = 400;
export declare const MIN_SCALE = 25;
export declare const COMPONENT_DISTANCE = 30;
export declare const fullscreenDiffY = 130;
export declare const CONTEXT_HEIGHT_DIFF = 155;
export declare const CONNECTOR = "_";
export declare const LINK_AREA = 30;
export declare const UNLINK = "#52619b";
export declare const ACTIVE = "#92ade3";
export declare const LINK = "#b4bdcf";
export declare const operatorTypeCode = 30;
export declare enum ComponentType {
    /** 通用 */
    common = "common"
}
export declare class ImageProps {
    name: string;
    url: string;
    width?: number;
    height?: number;
    type?: string;
    rotate?: number;
    key: string;
}
export interface IndustrialImageProps {
    type?: string;
    name?: string;
    images?: ImageProps[];
}
export declare const ComponentMap: Record<ComponentType, string>;
export declare class Stroke {
    color?: string;
    width?: number;
    dashArray?: string;
    startMarker?: string;
    endMarker?: string;
    x1?: number;
    y1?: number;
    x2?: number;
    y2?: number;
    transformOrigin?: 'left' | 'center' | 'right' | undefined;
}
export declare class EChart {
    type: string;
    component: string;
    options?: any;
    format?: any;
    stroke?: Stroke;
}
export declare class Node {
    /** 组件分类类型 */
    type?: string;
    /** 组件key */
    key: string;
    /** 组件名称 */
    name: string;
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
    chart?: EChart;
    /**定义基本样式*/
    style?: BaseCompStyle;
    /**定义图层**/
    zIndex?: number;
    /**定义旋转*/
    rotate?: number;
    /** 图片组件才有的URL属性 */
    url?: string;
}
export declare class NodePanel {
    type: string;
    key: string;
    name: string;
    icon: React.ReactNode;
    disabled: boolean;
}
export declare type LINK_POSITION = "left" | "right" | "top" | "bottom" | undefined;
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
export declare const GROUP_PADDING = 20;
export declare const LINKICON_WIDTH = 18;
export declare const LINKICON_HEIGHT = 18;
export declare enum ComponentKey {
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
    time = "time"
}
export declare class BaseCompStyle {
    left?: string;
    top?: string;
    width?: string;
    height?: string;
    fontFamily?: string;
    fontSize?: number;
    textAlign?: 'left' | 'center' | 'right' | undefined;
    verticalAlign?: 'top' | 'middle' | 'bottom' | 'sub' | 'super' | undefined;
    fontWeight?: string;
    textDecoration?: string;
    backgroundColor?: string;
    fontStyle?: string;
    opacity?: number;
    borderSize?: number;
    borderStyle?: 'solid' | 'dotted' | undefined;
    borderWidth?: number;
    borderColor?: string;
    color?: string;
}
export declare const keyCodeMap: {
    delete: number;
    copy: number;
    paste: number;
};
export declare const colorList: string[];
export declare const defaultLineColors: string[];
export declare const defaultChartColors: string[];
export declare const DATA_STATUS: {
    '-1': string;
    '1': string;
    '2': string;
    '3': string;
};
export declare const lineRangedefaultColor: {
    lineGraphRangeColor: string;
    lineGraphRangeCheck: boolean;
}[];
export declare const defaultTimelineShowData = 80;
/** 处理弹窗全屏挂载 */
export declare function getContainer(): HTMLElement;
/**
 * @file 类型定义文件
 */
declare class MenuPos {
    id?: string;
    x: number;
    y: number;
}
export declare const VERTEX_WIDTH = 180;
export declare const VERTEX_HEIGHT = 32;
export { MenuPos };
export declare enum OperateType {
    copy = "copy",
    delete = "delete"
}
export declare class BgImagesProps {
    key: number;
    img: any;
}
export declare class DataVEditorProps {
    apiURL?: string;
    token?: string;
    onEditorSaveCb?: (data: any) => void;
    selfIndustrialLibrary: ImageProps[];
    preInstallBgImages?: BgImagesProps[];
    editorData?: any;
    boardData?: any;
    onPreview?: () => void;
    onPoweroff?: () => void;
    /** 间隔几分钟保存数据 */
    autoSaveInterval?: number;
    onExtraSetting?: () => void;
    industrialLibrary?: IndustrialImageProps[];
    uploadConfig?: uploadConfigProps;
    websocketConf?: {
        url: string;
        video?: {
            updateStream: string;
            rePushStream: string;
            pushStream: string;
        };
        toolsConfig: any;
    };
    history?: any;
    key?: number;
    ref?: any;
    onAddDataPoint?: (node: Node, disableSource: string[], selectedRowKeys: string[]) => void;
    onAddVedioSource?: (node: Node, disableSource: string[], selectedRowKeys: string[]) => void;
    dataPointPropsMap: DataPointPropsMap;
}
export declare class DataPointPropsMap {
    id: string;
    type: string;
    dataName: string;
    intervalTime: string;
    scopeMin: string;
    scopeMax: string;
}
export declare class uploadConfigProps {
    /**基本路径*/
    baseURL: string;
    /**自定义组件文件上传路径*/
    self: UploadURIProps;
    preInstall: UploadURIProps;
    industry: any;
    combineCom?: {
        apiURL: string;
        token: string;
        list: {
            url: string;
            params: object;
        };
        add: {
            url: string;
            params: object;
        };
        delete: {
            url: string;
            params: object;
        };
        rename: {
            url: string;
            params: object;
        };
    };
}
export declare class UploadURIProps {
    baseURL: string;
    url: string;
    /**请求token*/
    token: string;
    /**需要传递的额外数据,json对象，智能嵌套一层*/
    data?: object;
}
export declare const privateKey = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCvJGaiiS3oLK9QXgm1jpzKe3g4jKRu0zXWqjaazh9NW13vdMcu3ctKT2+GqV9I7FMBgP69p9LX1hOXoSmagYB5Qku1Vrjx03mjnhcYaCleJzv7vksb8Rsx/Dd8pRCVoYvjsgawYB+oxnvlHKvk7d/XuHCOY02Tod21KpsBQ6Z9AwIDAQAB";
