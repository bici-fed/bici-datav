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
var IconZYshouqi = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1280 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M156.8 440.96a64 64 0 1 1-57.6-113.92l512-256a64 64 0 0 1 57.6 0l512 256a64 64 0 0 1-57.6 113.92L640 199.68 156.8 440.96z m0 576a64 64 0 0 1-57.6-113.92l512-256a64 64 0 0 1 57.6 0l512 256a64 64 0 0 1-57.6 113.92L640 775.68 156.8 1016.96z" fill={getIconColor(color, 0, '#096DD9')}/>
    </svg>);
};
IconZYshouqi.defaultProps = {
    size: 18,
};
export default IconZYshouqi;
//# sourceMappingURL=IconZYshouqi.js.map