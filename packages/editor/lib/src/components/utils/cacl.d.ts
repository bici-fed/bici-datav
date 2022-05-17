export declare function calcCanvas(width?: string | number, height?: string | number): {
    minWidth: number;
    minHeight: number;
    left: number;
    top: number;
};
export declare function calcScroll(width?: string | number, height?: string | number): void;
export declare function getHexColor(color: any): any;
/**
 * 将base64的图片数据转化成file对象上传
 * @param data
 */
export declare function base64ToFile(data: any): File;
export declare function roundFun(value: any, n: any): any;
export declare function getFixed(num: any, fix: any): string;
/**
 * 处理图表二维数组中数字精度问题
 * @param node
 * @param source
 */
export declare function handleDotData(node: any, source: any): void;
export declare function eraseOverlapIntervals(intervals: any): any[];
export declare function calcRepeatIndex(newArr: any): {};
export declare function rgbaStringToRgb(rgba: any, isFilter: any): number[];
export declare function getContrastColor(rgbStr: any): string;
/**

 * Converts an HSL color value to RGB. Conversion formula

 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.

 * Assumes h, s, and l are contained in the set [0, 1] and

 * returns r, g, and b in the set [0, 255].

 *

 * @param   Number  h       The hue

 * @param   Number  s       The saturation

 * @param   Number  l       The lightness

 * @return  Array           The RGB representation

 */
export declare function hslToRgb(h: any, s: any, l: any): number[];
/**

 * Converts an RGB color value to HSL. Conversion formula

 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.

 * Assumes r, g, and b are contained in the set [0, 255] and

 * returns h, s, and l in the set [0, 1].

 *

 * @param   Number  r       The red color value

 * @param   Number  g       The green color value

 * @param   Number  b       The blue color value

 * @return  Array           The HSL representation

 */
export declare function rgbToHsl(r: any, g: any, b: any): any[];
export declare function isNumber(obj: any): boolean;
export declare function isRTSP(str: any): boolean;
