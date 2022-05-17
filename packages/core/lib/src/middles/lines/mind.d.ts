import { Point } from '../../models/point';
import { Line } from '../../models/line';
export declare function mind(ctx: CanvasRenderingContext2D, l: Line): void;
export declare function mindControlPoints(ctx: CanvasRenderingContext2D, l: Line): void;
export declare function calcMindControlPoints(l: Line): void;
export declare function pointInMind(point: Point, l: Line): boolean;
