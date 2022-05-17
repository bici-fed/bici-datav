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
var Iconqianyitian = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M0 0m48.761905 0l926.47619 0q48.761905 0 48.761905 48.761905l0 926.47619q0 48.761905-48.761905 48.761905l-926.47619 0q-48.761905 0-48.761905-48.761905l0-926.47619q0-48.761905 48.761905-48.761905Z" fill={getIconColor(color, 0, '#E0E7F5')}/>
      <path d="M364.007619 541.45219l205.482667 156.842667c24.380952 18.627048 59.538286 1.219048 59.538285-29.45219V355.157333c0-30.671238-35.157333-48.079238-59.538285-29.45219l-205.507048 156.818286a37.059048 37.059048 0 0 0 0 58.928761z" fill={getIconColor(color, 1, '#096DD9')}/>
    </svg>);
};
Iconqianyitian.defaultProps = {
    size: 18,
};
export default Iconqianyitian;
//# sourceMappingURL=Iconqianyitian.js.map