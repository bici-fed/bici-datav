import { TopologyData } from './models/data';
import { Rect } from './models/rect';
import { Point } from './models/point';
import { Line } from './models/line';
import { Node } from './models/node';
import { Options } from './options';
import { Layer } from './layer';
export declare class HoverLayer extends Layer {
    options: Options;
    protected data: TopologyData;
    line: Line;
    initLine: Line;
    node: Node;
    hoverLineCP: Point;
    lasthoverLineCP: Point;
    dockAnchor: Point;
    hoverAnchorIndex: number;
    dockLineX: number;
    dockLineY: number;
    root: Node;
    dragRect: Rect;
    constructor(options: Options, TID: string);
    lineTo(to: Point, toArrow?: string): void;
    lineFrom(from: Point): void;
    lineMove(pt: {
        x: number;
        y: number;
    }, initPos: {
        x: number;
        y: number;
    }): void;
    render(ctx: CanvasRenderingContext2D): void;
    getRoot(node: Node): any;
    clear(): void;
}
