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
var Iconwuzhuangtai = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill={getIconColor(color, 0, '#F4F4F4')}/>
      <path d="M512 93.090909a418.909091 418.909091 0 1 1 0 837.818182 418.909091 418.909091 0 0 1 0-837.818182z m207.220364 186.181818h-444.043637v65.349818h174.266182a1306.996364 1306.996364 0 0 1-6.144 93.277091h-201.076364v65.908364h188.229819C407.552 588.706909 355.607273 663.552 232.727273 710.469818c17.314909 13.405091 35.188364 37.981091 44.683636 55.854546 134.609455-55.296 192.139636-145.780364 218.391273-245.76v143.546181c0 67.025455 18.432 88.808727 88.808727 88.808728h83.223273c60.322909 0 79.313455-25.693091 87.133091-120.645818-18.990545-4.468364-49.152-16.197818-63.674182-27.927273-3.351273 71.493818-6.702545 83.223273-29.044364 83.223273h-68.701091c-23.458909 0-27.927273-3.351273-27.927272-24.576v-159.185455h184.32V437.899636h-239.057455c3.909818-30.72 5.585455-62.557091 7.261091-93.277091h201.076364V279.272727z" fill={getIconColor(color, 1, '#222222')} fill-opacity=".7"/>
    </svg>);
};
Iconwuzhuangtai.defaultProps = {
    size: 18,
};
export default Iconwuzhuangtai;
//# sourceMappingURL=Iconwuzhuangtai.js.map