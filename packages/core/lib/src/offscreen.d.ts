import { Options } from './options';
import { Canvas } from './canvas';
import { ActiveLayer } from './activeLayer';
import { HoverLayer } from './hoverLayer';
import { AnimateLayer } from './animateLayer';
export declare class Offscreen extends Canvas {
    parentElem: HTMLElement;
    options: Options;
    activeLayer: ActiveLayer;
    hoverLayer: HoverLayer;
    animateLayer: AnimateLayer;
    constructor(parentElem: HTMLElement, options: Options, TID: string);
    render(): void;
}
