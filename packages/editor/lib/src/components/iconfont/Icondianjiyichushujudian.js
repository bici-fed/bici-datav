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
var Icondianjiyichushujudian = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M875.456 148.544c-198.144-198.08-524.032-198.08-722.112 0-198.08 198.144-198.08 524.032 0 722.112 198.08 198.08 523.968 198.08 722.112 0 198.08-198.08 198.08-517.632 0-722.112z m-204.48 568.704L511.232 557.504 351.36 717.248c-12.8 12.8-31.936 12.8-44.672 0-12.8-12.8-12.8-31.936 0-44.672l159.744-159.808-159.744-159.744c-12.8-12.8-12.8-31.936 0-44.736 12.8-12.8 31.936-12.8 44.672 0l159.808 159.808 159.744-159.808c12.8-12.8 31.936-12.8 44.736 0 12.8 12.8 12.8 32 0 44.8L555.904 512.704l159.808 159.808c12.8 12.8 12.8 31.936 0 44.672-12.8 12.8-32 12.8-44.8 0z" fill={getIconColor(color, 0, '#E02020')}/>
    </svg>);
};
Icondianjiyichushujudian.defaultProps = {
    size: 18,
};
export default Icondianjiyichushujudian;
//# sourceMappingURL=Icondianjiyichushujudian.js.map