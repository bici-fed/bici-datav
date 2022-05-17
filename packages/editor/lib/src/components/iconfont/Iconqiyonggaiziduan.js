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
var Iconqiyonggaiziduan = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1609 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M804.571429 18.285714a871.716571 871.716571 0 0 1 761.417142 467.382857 54.857143 54.857143 0 0 1 0 54.857143A871.643429 871.643429 0 0 1 804.571429 1005.714286 871.643429 871.643429 0 0 1 43.154286 538.331429a54.857143 54.857143 0 0 1 0-54.857143A871.716571 871.716571 0 0 1 804.571429 18.285714z m0 109.714286A758.125714 758.125714 0 0 0 154.550857 512 758.125714 758.125714 0 0 0 804.571429 896 758.125714 758.125714 0 0 0 1454.592 512 758.125714 758.125714 0 0 0 804.571429 128zM1024 512a219.428571 219.428571 0 1 1-438.857143 0 219.428571 219.428571 0 0 1 438.857143 0" fill={getIconColor(color, 0, '#096DD9')}/>
    </svg>);
};
Iconqiyonggaiziduan.defaultProps = {
    size: 18,
};
export default Iconqiyonggaiziduan;
//# sourceMappingURL=Iconqiyonggaiziduan.js.map