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
var Icon9Ping = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1450 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M0 0h439.594667v298.666667H0zM505.536 0h448.384v298.666667H505.536zM1011.072 0H1450.666667v298.666667H1011.072z" fill={getIconColor(color, 0, '#C8DEF7')}/>
      <path d="M0 362.666667h439.594667v298.666666H0zM505.536 362.666667h439.594667v298.666666H505.536zM1011.072 362.666667H1450.666667v298.666666H1011.072z" fill={getIconColor(color, 1, '#C8DEF7')}/>
      <path d="M0 725.333333h439.594667v298.666667H0zM505.536 725.333333h439.594667v298.666667H505.536zM1011.072 725.333333H1450.666667v298.666667H1011.072z" fill={getIconColor(color, 2, '#C8DEF7')}/>
    </svg>);
};
Icon9Ping.defaultProps = {
    size: 18,
};
export default Icon9Ping;
//# sourceMappingURL=Icon9Ping.js.map