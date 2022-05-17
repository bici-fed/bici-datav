import { TopologyData } from './models/data';
import { Options } from './options';
import { Layer } from './layer';
export declare class Canvas extends Layer {
    parentElem: HTMLElement;
    options: Options;
    static dpiRatio: number;
    protected data: TopologyData;
    canvas: HTMLCanvasElement;
    width: number;
    height: number;
    constructor(parentElem: HTMLElement, options: Options, TID: string);
    resize(size?: {
        width: number;
        height: number;
    }): void;
    render(): void;
    getDpiRatio(): number;
}
