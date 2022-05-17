export declare const NEW_BOARD_INDUSTRY_CONVEYOR: [number, string];
export declare const NEW_BOARD_INDUSTRY_STORAGE_SILO: [number, string];
export declare const NEW_BOARD_INDUSTRY_CHEMICAL_INDUSTRY: [number, string];
export declare const NEW_BOARD_INDUSTRY_MATERIAL_HANDLING: [number, string];
export declare const NEW_BOARD_INDUSTRY_REACTOR: [number, string];
export declare const NEW_BOARD_INDUSTRY_DIRECTOR: [number, string];
export declare const NEW_BOARD_INDUSTRY_MACHINE_WORK: [number, string];
export declare const NEW_BOARD_INDUSTRY_PUMP: [number, string];
export declare const NEW_BOARD_INDUSTRY_ELECTRIC_MACHINERY: [number, string];
export declare const NEW_BOARD_INDUSTRY_CIRCUITRY: [number, string];
export declare const NEW_BOARD_INDUSTRY_PIPELINE: [number, string];
export declare const NEW_BOARD_INDUSTRY_VENT_LINE: [number, string];
export declare const NEW_BOARD_INDUSTRY_MINE: [number, string];
export declare const NEW_BOARD_INDUSTRY_STEEL_INDUSTRY: [number, string];
export declare const NEW_BOARD_INDUSTRY_BOILER: [number, string];
export declare const NEW_BOARD_INDUSTRY_KLEP: [number, string];
export declare const industry_List: [number, string][];
export declare const onDrag: (event: any, item: any) => void;
export declare const scaleWidthHeight: (width: number, height: number, maxSize: number) => {
    width: number;
    height: number;
};
export declare const rtnImg: (nImg: any, resolve: any, maxSize: number, img: any) => void;
/**
 *
 * @param img
 * @param maxSize
 */
export declare const fitImageSize: (img: any, maxSize?: number) => Promise<unknown>;
