import { TopologyData } from './models';
export declare class MQTT {
    url: string;
    options: any;
    topics: string;
    data: TopologyData;
    client: any;
    constructor(url: string, options: any, topics: string, data: TopologyData);
    init(): void;
    onmessage: (topic: string, message: any) => void;
    publish(topic: string, message: string): void;
    close(): void;
}
