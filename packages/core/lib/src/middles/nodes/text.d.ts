import { Node } from '../../models/node';
import { Pen } from "../../models";
export declare function getWords(txt: string): any[];
export declare function getWrapLines(ctx: CanvasRenderingContext2D, words: string[], maxWidth: number, fontSize: number): any[];
export declare function getLines(ctx: CanvasRenderingContext2D, pen: Pen): any[];
export declare function calcTextRect(ctx: CanvasRenderingContext2D, pen: Pen): {
    width: number;
    height: number;
};
export declare function fillText(ctx: CanvasRenderingContext2D, lines: string[], x: number, y: number, width: number, height: number, lineHeight: number, maxLineLen?: number, bk?: string): void;
export declare function text(ctx: CanvasRenderingContext2D, node: Pen): void;
export declare function iconfont(ctx: CanvasRenderingContext2D, node: Node): void;
