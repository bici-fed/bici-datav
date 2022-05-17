import { Options } from './options';
import { Canvas } from './canvas';
import { TopologyData } from './models/data';
export declare class RenderLayer extends Canvas {
    parentElem: HTMLElement;
    options: Options;
    offscreen: any;
    data: TopologyData;
    bkImg: HTMLImageElement;
    bkImgRect: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    constructor(parentElem: HTMLElement, options: Options, TID: string);
    loadBkImg(cb?: any): void;
    clearBkImg(): void;
    render: () => void;
    rule(): void;
    grid(): void;
    coverRect(canvasWidth: number, canvasHeight: number, imgWidth: number, imgHeight: number): {
        x: number;
        y: number;
        width: number;
        height: number;
    };
}
