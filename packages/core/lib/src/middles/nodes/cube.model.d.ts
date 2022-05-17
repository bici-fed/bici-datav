import { Point } from '../../models/point';
import { Rect } from '../../models/rect';
export declare class Surface {
    points: Point[];
    fillStyle: string;
    strokeStyle: string;
    constructor(pt1: Point, pt2: Point, pt3: Point, pt4: Point, fillStyle?: string, strokeStyle?: string);
    render(ctx: CanvasRenderingContext2D): void;
}
export declare class Cube {
    surfaces: Surface[];
    constructor(rect: Rect, z: number, zRotate: number, fillStyle?: string, strokeStyle?: string);
    render(ctx: CanvasRenderingContext2D): void;
}
