import { Lock } from './models/status';
export declare enum KeyType {
    Any = -1,
    CtrlOrAlt = 0,
    Ctrl = 1,
    Shift = 2,
    Alt = 3
}
export declare enum KeydownType {
    None = -1,
    Document = 0,
    Canvas = 1
}
export declare type Padding = number | string | number[];
export interface Options {
    cacheLen?: number;
    locked?: Lock;
    extDpiRatio?: number;
    width?: string | number;
    height?: string | number;
    color?: string;
    activeColor?: string;
    hoverColor?: string;
    anchorRadius?: number;
    anchorFillStyle?: string;
    dockStrokeStyle?: string;
    dockFillStyle?: string;
    dragColor?: string;
    animateColor?: string;
    font?: {
        color?: string;
        fontFamily?: string;
        fontSize?: number;
        lineHeight?: number;
        textAlign?: string;
        textBaseline?: string;
    };
    rotateCursor?: string;
    hoverCursor?: string;
    hideInput?: boolean;
    hideRotateCP?: boolean;
    hideSizeCP?: boolean;
    hideAnchor?: boolean;
    onlySizeX?: boolean;
    onlySizeY?: boolean;
    anchorSize?: number;
    alwaysAnchor?: boolean;
    autoAnchor?: boolean;
    disableEmptyLine?: boolean;
    disableRepeatLine?: boolean;
    disableScale?: boolean;
    disableTranslate?: boolean;
    disableMoveOutParent?: boolean;
    disableDockLine?: boolean;
    playIcon?: string;
    pauseIcon?: string;
    fullScreenIcon?: string;
    loopIcon?: string;
    translateKey?: KeyType;
    scaleKey?: KeyType;
    minScale?: number;
    maxScale?: number;
    autoExpandDistance?: number;
    keydown?: KeydownType;
    viewPadding?: Padding;
    bkColor?: string;
    grid?: boolean;
    gridColor?: string;
    gridSize?: number;
    rule?: boolean;
    ruleColor?: string;
    refresh?: number;
    isApp?: boolean;
    on?: (event: string, data: any) => void;
}
export declare const DefalutOptions: Options;
