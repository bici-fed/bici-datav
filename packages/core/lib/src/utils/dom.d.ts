import { Node } from '../models/node';
export declare function createDiv(node: Node): HTMLDivElement;
export declare function createLayerDiv(node: Node): HTMLDivElement;
export declare function loadJS(url: string, callback?: () => void, render?: boolean): void;
