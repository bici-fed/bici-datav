import { Point } from '../models/point';
import { Pen } from '../models/pen';
import { Rect } from '../models/rect';
export declare function getRect(pens: Pen[]): Rect;
export declare function getBboxOfPoints(points: Point[]): {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
};
