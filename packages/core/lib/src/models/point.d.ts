import { Direction } from './direction';
import { AnchorMode } from './status';
export declare class Point {
    x: number;
    y: number;
    id: number | string;
    direction: Direction;
    radius: number;
    strokeStyle: string;
    fillStyle: string;
    anchorIndex: number;
    autoAnchor: boolean;
    hidden: boolean;
    mode: AnchorMode;
    data: any;
    constructor(x: number, y: number, direction?: Direction, anchorIndex?: number, id?: number | string, hidden?: boolean, autoAnchor?: boolean);
    floor(): void;
    round(): void;
    clone(): Point;
    hit(pt: {
        x: number;
        y: number;
    }, radius?: number): boolean;
    rotate(angle: number, center: {
        x: number;
        y: number;
    }): Point;
    isSameAs(pt: Point): boolean;
}
