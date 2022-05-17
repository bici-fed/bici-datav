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
var Iconshanchu1 = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M983.26 161.646H40.74a40.375 40.375 0 0 0 0 80.75h80.677v659.748c0 69.413 71.095 121.27 134.656 121.27h511.708c63.414 0 107.739-49.883 107.739-121.197V242.395h107.666a40.375 40.375 0 0 0 0-80.822zM794.77 902.217c0 18.432-4.68 40.375-26.916 40.375H256.146c-25.16 0-53.833-21.504-53.833-40.375V242.395H794.77v659.749zM390.802 80.823h242.396a40.375 40.375 0 0 0 0-80.823H390.802a40.375 40.375 0 0 0 0 80.823zM377.417 875.3a40.375 40.375 0 0 0 40.375-40.448V350.135a40.375 40.375 0 0 0-80.75 0v484.718c0 22.308 18.067 40.448 40.375 40.448z m242.396 0a40.375 40.375 0 0 0 40.374-40.448V350.135a40.375 40.375 0 0 0-80.822 0v484.718c0 22.308 18.139 40.448 40.448 40.448z" fill={getIconColor(color, 0, '#D0021B')}/>
    </svg>);
};
Iconshanchu1.defaultProps = {
    size: 18,
};
export default Iconshanchu1;
//# sourceMappingURL=Iconshanchu1.js.map