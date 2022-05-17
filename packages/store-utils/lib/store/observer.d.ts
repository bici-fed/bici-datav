export declare class Observer {
    id: string;
    key: string;
    fn: (data: any) => void;
    constructor(id: string, key: string, fn: (data: any) => void);
    unsubscribe(): void;
}
