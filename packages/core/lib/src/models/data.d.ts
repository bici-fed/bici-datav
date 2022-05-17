import { Pen } from './pen';
import { Lock } from './status';
import { EventAction, EventType } from './event';
export declare class TopologyData {
    pens: Pen[];
    lineName: string;
    fromArrow: string;
    toArrow: string;
    lineWidth?: number;
    scale: number;
    locked: Lock;
    bkImage: string;
    bkColor: string;
    grid?: boolean;
    gridColor?: string;
    gridSize?: number;
    width?: number;
    height?: number;
    rule?: boolean;
    ruleColor?: string;
    websocket?: string;
    mqttUrl?: string;
    mqttOptions?: {
        clientId?: string;
        username?: string;
        password?: string;
    };
    mqttTopics?: string;
    events?: {
        type: EventType;
        action: EventAction;
        value: string;
        params: string;
        name?: string;
    }[];
    manualCps?: boolean;
    tooltip?: boolean | number;
    data?: any;
    property?: any;
    constructor(json?: any);
}
