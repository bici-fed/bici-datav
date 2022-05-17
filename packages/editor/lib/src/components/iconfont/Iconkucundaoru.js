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
var Iconkucundaoru = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M926.72 512v350.72a64 64 0 0 1-64 64h-704a64 64 0 0 1-64-64v-704a64 64 0 0 1 64-64H448V0H128a128 128 0 0 0-128 128v768a128 128 0 0 0 128 128h768a128 128 0 0 0 128-128V512h-97.28zM399.36 48.64a48 48 0 0 0 24.32 42.24 47.36 47.36 0 0 0 48.64 0A48.64 48.64 0 1 0 399.36 48.64zM926.72 512A48.64 48.64 0 1 0 1024 512a48.64 48.64 0 0 0-97.28 0z m-109.44-79.36a49.28 49.28 0 0 0-68.48 0L613.12 568.32a571.52 571.52 0 0 1-4.48-64 474.24 474.24 0 0 1 236.8-410.24L796.8 7.68A568.96 568.96 0 0 0 512 501.76v39.68l-108.8-108.8a48.64 48.64 0 0 0-69.12 0 49.92 49.92 0 0 0 0 69.12l207.36 207.36a49.92 49.92 0 0 0 69.12 0l206.72-207.36a49.28 49.28 0 0 0 0-69.12z m-44.8-384a48 48 0 0 0 24.32 42.24 47.36 47.36 0 0 0 48.64 0 48 48 0 0 0 24.32-42.24 48.64 48.64 0 0 0-24.32-42.24 50.56 50.56 0 0 0-48.64 0 48.64 48.64 0 0 0-24.32 42.24z" fill={getIconColor(color, 0, '#096DD9')}/>
    </svg>);
};
Iconkucundaoru.defaultProps = {
    size: 18,
};
export default Iconkucundaoru;
//# sourceMappingURL=Iconkucundaoru.js.map