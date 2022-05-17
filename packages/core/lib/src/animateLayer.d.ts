import { Pen } from './models/pen';
import { Line } from './models/line';
import { TopologyData } from './models/data';
import { Options } from './options';
import { Layer } from './layer';
export declare class AnimateLayer extends Layer {
    options: Options;
    protected data: TopologyData;
    pens: Map<any, any>;
    private timer;
    private lastNow;
    private subscribeUpdate;
    private subscribePlay;
    constructor(options: Options, TID: string);
    getAnimateLine(item: Pen): Line;
    findLine(pen: Pen): Pen;
    readyPlay(tag?: string, auto?: boolean, pens?: Pen[]): void;
    animate(): void;
    updateLines(lines: Line[]): void;
    render(ctx: CanvasRenderingContext2D): void;
    stop(): void;
    destroy(): void;
}
