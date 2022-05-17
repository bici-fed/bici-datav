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
var Iconchaxun = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 3072 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M384 163.84c-195.7888 0-348.16 152.3712-348.16 348.16s152.3712 348.16 348.16 348.16 348.16-152.3712 348.16-348.16S579.7888 163.84 384 163.84zM1536 163.84c-195.7888 0-348.16 152.3712-348.16 348.16s152.3712 348.16 348.16 348.16 348.16-152.3712 348.16-348.16S1731.7888 163.84 1536 163.84z m1152 0c-195.7888 0-348.16 152.3712-348.16 348.16s152.3712 348.16 348.16 348.16 348.16-152.3712 348.16-348.16-174.08-348.16-348.16-348.16z" fill={getIconColor(color, 0, '#222222')} fill-opacity=".7"/>
    </svg>);
};
Iconchaxun.defaultProps = {
    size: 18,
};
export default Iconchaxun;
//# sourceMappingURL=Iconchaxun.js.map