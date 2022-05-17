import { Observer } from './observer';
export declare class Store {
    data: any;
    observers: any;
    constructor();
    get(key?: string): any;
    set(key: string, value: any): void;
    updated(key: string): void;
    subscribe(key: string, fn: (data: any) => void): Observer;
    static get(key?: string, store?: any): any;
    static set(key: string, value: any, store?: any, obs?: any): void;
    static updated(key: string, store?: any, obs?: any): void;
    static subscribe(key: string, fn: (data: any) => void, store?: any, obs?: any): Observer;
}
