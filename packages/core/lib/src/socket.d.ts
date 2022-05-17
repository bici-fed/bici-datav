import { EventAction, EventType, TopologyData } from './models';
import { Pen } from './models/pen';
export declare class Socket {
    url: string;
    data: TopologyData;
    socket: WebSocket;
    fns: any;
    constructor(url: string, data: TopologyData);
    init(): void;
    onmessage: (e: MessageEvent) => void;
    pensMqtt(pens: Pen[], msg: any): void;
    topologyMqtt(index: number, item: {
        type: EventType;
        action: EventAction;
        value: string;
        params: string;
        name?: string;
    }, msg: any, client: any): void;
    private doFn;
    close(): void;
}
