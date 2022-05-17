import { Point } from '../models/point';
import { Pen } from '../models/pen';
import { Node } from '../models/node';
import { Line } from '../models/line';
export declare function flatNodes(nodes: Pen[]): {
    nodes: Node[];
    lines: Line[];
};
export declare function find(idOrTag: string, pens: Pen[]): Pen | Pen[];
export declare function del(idOrTag: string, pens: Pen[]): Pen[];
export declare function getParent(pens: Pen[], child: Pen): Node;
export declare function pointInRect(point: {
    x: number;
    y: number;
}, vertices: Point[]): boolean;
export declare function pointInLine(point: Point, from: Point, to: Point): boolean;
export declare function lineLen(from: Point, to: Point): number;
export declare function curveLen(from: Point, cp1: Point, cp2: Point, to: Point): number;
