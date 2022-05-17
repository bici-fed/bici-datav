import { Emitter, EventType, Handler } from 'mitt';
import { Options, Padding } from './options';
import { Pen } from './models/pen';
import { Node } from './models/node';
import { Point } from './models/point';
import { Line } from './models/line';
import { TopologyData } from './models/data';
import { Lock } from './models/status';
import { Offscreen } from './offscreen';
import { RenderLayer } from './renderLayer';
import { HoverLayer } from './hoverLayer';
import { ActiveLayer } from './activeLayer';
import { AnimateLayer } from './animateLayer';
import { DivLayer } from './divLayer';
import { Rect } from './models/rect';
import { Socket } from './socket';
import { MQTT } from './mqtt';
declare enum MoveInType {
    None = 0,
    Line = 1,
    LineMove = 2,
    LineFrom = 3,
    LineTo = 4,
    LineControlPoint = 5,
    Nodes = 6,
    ResizeCP = 7,
    HoverAnchors = 8,
    AutoAnchor = 9,
    Rotate = 10
}
interface ICaches {
    index: number;
    list: TopologyData[];
}
export declare class Topology {
    id: string;
    data: TopologyData;
    clipboard: TopologyData;
    caches: ICaches;
    options: Options;
    parentElem: HTMLElement;
    canvas: RenderLayer;
    offscreen: Offscreen;
    hoverLayer: HoverLayer;
    activeLayer: ActiveLayer;
    animateLayer: AnimateLayer;
    divLayer: DivLayer;
    private isMac;
    private subcribe;
    private subcribeRender;
    private subcribeImage;
    private imageTimer;
    private subcribeAnimateEnd;
    private subcribeAnimateMoved;
    private subcribeMediaEnd;
    touchedNode: any;
    lastHoverNode: Node;
    lastHoverLine: Line;
    touches?: TouchList;
    touchScale?: number;
    touchStart?: number;
    input: HTMLTextAreaElement;
    inputObj: Pen;
    mouseDown: {
        x: number;
        y: number;
        restore?: boolean;
    };
    lastTranlated: {
        x: number;
        y: number;
    };
    moveIn: {
        type: MoveInType;
        activeAnchorIndex: number;
        hoverAnchorIndex: number;
        hoverNode: Node;
        hoverLine: Line;
        activeNode: Node;
        lineControlPoint: Point;
    };
    canvasPos?: DOMRect;
    needCache: boolean;
    private tip;
    private raf;
    tipMarkdown: HTMLElement;
    tipElem: HTMLElement;
    socket: Socket;
    mqtt: MQTT;
    _emitter: Emitter;
    private scheduledAnimationFrame;
    private scrolling;
    private rendering;
    constructor(parent: string | HTMLElement, options?: Options);
    private setupDom;
    private setupSubscribe;
    private setupMouseEvent;
    private onScroll;
    private preventDefault;
    private ontouchend;
    winResize: () => void;
    resize(size?: {
        width: number;
        height: number;
    }): void;
    dropNodes(jsonList: any[], offsetX: number, offsetY: number): void;
    addNode(node: Node | any, focus?: boolean): any;
    addLine(line: any, focus?: boolean): any;
    render(noFocus?: boolean): this;
    open(data?: any): void;
    openSocket(url?: string): void;
    closeSocket(): void;
    openMqtt(url?: string, options?: any): void;
    closeMqtt(): void;
    overflow(padding?: number): {
        width: number;
        height: number;
    };
    private setNodeText;
    onMouseMove: (e: {
        x: number;
        y: number;
        buttons?: number;
        ctrlKey?: boolean;
        shiftKey?: boolean;
        altKey?: boolean;
    }) => boolean;
    onmousedown: (e: {
        x: number;
        y: number;
        button?: number;
        ctrlKey?: boolean;
        shiftKey?: boolean;
        altKey?: boolean;
    }) => void;
    onmouseup: () => void;
    private switchNodeEditable;
    private ondblclick;
    private onkeydown;
    private getMoveIn;
    inChildNode(pt: {
        x: number;
        y: number;
    }, children: Pen[]): any;
    inNode(pt: {
        x: number;
        y: number;
    }, node: Node, inChild?: boolean): any;
    inLine(point: {
        x: number;
        y: number;
    }, line: Line): Line;
    private getLineDock;
    private getPensInRect;
    private getAngle;
    showInput(item: Pen, force?: boolean): void;
    getRect(pens?: Pen[]): Rect;
    getDockPos(offsetX: number, offsetY: number, noDock?: boolean): {
        x: number;
        y: number;
    };
    cache(): void;
    cacheReplace(pens: Pen[]): void;
    undo(noRedo?: boolean, force?: boolean): void;
    redo(force?: boolean): void;
    toImage(padding?: Padding, type?: string, quality?: number, callback?: any): string;
    saveAsImage(name?: string, padding?: Padding, type?: string, quality?: number): void;
    delete(param?: string | Pen[], force?: boolean): void;
    delEmptyLines(deleteedId?: string): void;
    cut(): void;
    copy(): void;
    paste(): void;
    newId(node: any, idMaps: any): void;
    animate(autoplay?: boolean): void;
    updateProps(cache?: boolean, pens?: Pen[]): void;
    lock(lock: Lock): void;
    lockPens(pens: Pen[], lock: Lock): void;
    up(pen: Pen, pens?: Pen[]): void;
    top(pen: Pen, pens?: Pen[]): void;
    down(pen: Pen, pens?: Pen[]): void;
    bottom(pen: Pen, pens?: Pen[]): void;
    getParent(pen: Pen): Node;
    combine(pens?: Pen[], stand?: boolean): void;
    uncombine(node?: Pen): void;
    find(idOrTag: string, pens?: Pen[]): Pen | Pen[];
    findIndex(pen: Pen, pens?: Pen[]): number;
    translate(x: number, y: number, process?: boolean, noNotice?: boolean): void;
    scale(scale: number, center?: Point): void;
    scaleTo(scale: number, center?: Point): void;
    scaleContainer(scale: number): void;
    round(): void;
    centerView(padding?: Padding): boolean;
    fitView(viewPadding?: Padding): void;
    hasView(): boolean;
    getViewCenter(viewPadding?: Padding): {
        x: number;
        y: number;
    };
    generateStoreKey(key: string): string;
    private createMarkdownTip;
    private showTip;
    private hideTip;
    scroll(x: number, y: number): void;
    toComponent(pens?: Pen[]): Node;
    clearBkImg(): void;
    dispatch(event: string, data: any): this;
    on(eventType: EventType, handler: Handler): this;
    off(eventType: EventType, handler: Handler): this;
    fire(eventType: EventType, params: any): this;
    getValue(idOrTag: string, attr?: string): any;
    setValue(idOrTag: string, val: any, attr?: string): void;
    setLineName(name: 'curve' | 'line' | 'polyline' | 'mind', render?: boolean): void;
    setColor(color: string): void;
    setFontColor(color: string): void;
    setIconColor(color: string): void;
    pureData(): any;
    pureDataChildren(data: any): void;
    destroy(): void;
}
export {};
