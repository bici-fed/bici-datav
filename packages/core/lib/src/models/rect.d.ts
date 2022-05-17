import { Point } from './point';
export declare class Rect {
    x: number;
    y: number;
    width: number;
    height: number;
    ex: number;
    ey: number;
    center: Point;
    constructor(x: number, y: number, width: number, height: number);
    init(): void;
    floor(): void;
    round(): void;
    clone(): Rect;
    hit(pt: {
        x: number;
        y: number;
    }, padding?: number): boolean;
    hitByRect(rect: Rect): boolean;
    hitRotate(point: {
        x: number;
        y: number;
    }, rotate: number, center: Point): boolean;
    calcCenter(): void;
    toPoints(): Point[];
    translate(x: number, y: number): void;
    scale(scale: number, center?: Point, scaleY?: number): void;
}
