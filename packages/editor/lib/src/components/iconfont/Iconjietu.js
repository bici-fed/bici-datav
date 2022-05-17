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
var Iconjietu = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M465.92 457.92L233.92 146.56a38.912 38.912 0 0 1 5.248-52.416 34.624 34.624 0 0 1 49.536 3.52L530.56 381.76l241.92-284.096a34.624 34.624 0 0 1 49.472-3.584c14.912 13.44 17.152 35.968 5.248 52.096L595.136 457.6l144.128 169.408a174.08 174.08 0 0 1 212.864 79.36 182.08 182.08 0 0 1-40.704 227.648 172.992 172.992 0 0 1-226.56-2.56 182.144 182.144 0 0 1-35.776-228.48 75.136 75.136 0 0 1-3.712-4.608L530.56 544.192 465.92 457.92z m-47.104 55.616l67.264 89.856-70.528 94.528a32.192 32.192 0 0 1-3.584 4.672 182.144 182.144 0 0 1-35.712 228.48 172.992 172.992 0 0 1-226.624 2.624 182.08 182.08 0 0 1-40.704-227.712 174.08 174.08 0 0 1 212.928-79.04l97.024-113.92-0.064 0.512z m-146.432 389.184a105.6 105.6 0 0 0 87.232-62.848c15.744-35.52 11.52-76.8-11.136-108.352a104.512 104.512 0 0 0-98.048-42.944 107.2 107.2 0 0 0-91.712 118.08c5.248 57.728 55.872 100.48 113.664 96.064z m516.224 0a104.448 104.448 0 0 0 97.92-43.008c22.656-31.552 26.88-72.768 11.136-108.288a104.96 104.96 0 0 0-200.96 33.344c-6.4 57.792 34.432 110.08 91.968 117.952z" fill={getIconColor(color, 0, '#222222')}/>
    </svg>);
};
Iconjietu.defaultProps = {
    size: 18,
};
export default Iconjietu;
//# sourceMappingURL=Iconjietu.js.map