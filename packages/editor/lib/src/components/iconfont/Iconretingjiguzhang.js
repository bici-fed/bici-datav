/* eslint-disable */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { getIconColor } from './helper';
var DEFAULT_STYLE = {
    display: 'block',
};
var Iconretingjiguzhang = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill={getIconColor(color, 0, '#E02020')}/>
      <path d="M512 93.090909a418.909091 418.909091 0 1 1 0 837.818182 418.909091 418.909091 0 0 1 0-837.818182z m92.718545 174.08l-61.44 16.756364c5.026909 8.936727 10.053818 19.549091 14.522182 30.161454H417.605818l7.819637-21.224727-60.32291-18.990545C338.850909 352.628364 293.608727 431.941818 246.132364 482.769455c11.170909 15.639273 28.485818 52.503273 34.071272 68.70109 10.053818-11.729455 20.666182-24.576 30.72-38.539636v279.831273h60.322909v-377.018182c16.756364-31.837091 31.837091-65.908364 45.242182-98.862545v51.944727h349.090909V314.088727h-137.402181a408.389818 408.389818 0 0 0-23.45891-46.917818z m165.888 263.633455H403.642182v101.096727h56.971636V582.749091h250.228364v29.044364H461.172364v51.944727h95.511272v61.998545c0 6.702545-2.792727 8.378182-11.170909 8.378182h-11.636363c-13.963636-0.093091-36.305455-0.325818-55.389091-1.117091 7.819636 17.314909 16.197818 40.215273 19.549091 58.088727 41.332364 0 73.169455 0 96.069818-8.378181 23.458909-8.936727 29.602909-24.576 29.602909-54.737455v-64.232727h87.691636v-31.837091h59.205818v-101.096727z m-43.008-140.753455H450.56v118.411636h277.038545V390.050909z m-63.674181 44.125091v30.161455h-153.6v-30.161455h153.6z" fill={getIconColor(color, 1, '#FFFFFF')}/>
    </svg>);
};
Iconretingjiguzhang.defaultProps = {
    size: 18,
};
export default Iconretingjiguzhang;
//# sourceMappingURL=Iconretingjiguzhang.js.map