import { Options } from './options';
import { Node } from './models/node';
import { TopologyData } from './models/data';
import { Layer } from './layer';
export declare class DivLayer extends Layer {
    parentElem: HTMLElement;
    options: Options;
    protected data: TopologyData;
    canvas: HTMLDivElement;
    player: HTMLDivElement;
    curNode: Node;
    playBtn: HTMLElement;
    currentTime: HTMLElement;
    progressCurrent: HTMLElement;
    progress: HTMLElement;
    loop: HTMLElement;
    media: HTMLMediaElement;
    videos: {
        [key: string]: {
            player: HTMLElement;
            current: HTMLElement;
            media: HTMLMediaElement;
        };
    };
    audios: {
        [key: string]: {
            player: HTMLElement;
            current: HTMLElement;
            media: HTMLMediaElement;
        };
    };
    iframes: {
        [key: string]: HTMLIFrameElement;
    };
    elements: {
        [key: string]: HTMLElement;
    };
    gifs: {
        [key: string]: HTMLImageElement | HTMLDivElement;
    };
    private subcribe;
    private subcribeNode;
    constructor(parentElem: HTMLElement, options: Options, TID: string);
    addDiv: (node: Node) => void;
    createPlayer(): void;
    getMediaCurrent(): void;
    addMedia(node: Node, type: string): HTMLDivElement;
    playNext(next: string): void;
    addIframe(node: Node): HTMLIFrameElement;
    addGif(node: Node): HTMLDivElement;
    setElemPosition(node: Node, elem: HTMLElement, layer?: boolean): void;
    removeDiv(item: Node): void;
    clear(shallow?: boolean): void;
    formatSeconds(seconds: number): string;
    resize(size?: {
        width: number;
        height: number;
    }): void;
    render(): void;
    destroy(): void;
    changeDivNodePosition(pen: Node, pens: Node[], type: string): void;
}
