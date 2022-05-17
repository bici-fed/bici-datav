import { Point } from '../../models/point';
import { Line } from '../../models/line';
export declare function polyline(ctx: CanvasRenderingContext2D, l: Line): void;
export declare function polylineControlPoints(ctx: CanvasRenderingContext2D, l: Line): void;
export declare function calcPolylineControlPoints(l: Line): void;
export declare function pointInPolyline(point: Point, l: Line): boolean;
export declare function dockPolylineControlPoint(point: Point, l: Line): void;
