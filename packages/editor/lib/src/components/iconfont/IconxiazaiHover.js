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
var IconxiazaiHover = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M972.8 640.128v276.992c0 30.592-25.792 55.36-57.6 55.424L108.8 972.8c-31.808 0-57.6-24.768-57.6-55.36v-276.992H137.6v248.512l748.928-0.32v-248.512H972.8zM524.288 51.2c15.936 0 28.8 12.416 28.8 27.712v552l161.344-155.136a29.632 29.632 0 0 1 38.016-2.304l2.688 2.304 20.416 19.584a26.88 26.88 0 0 1 2.368 36.48l-2.368 2.688-246.528 236.16a27.712 27.712 0 0 1-38.4 0L245.12 534.528a26.944 26.944 0 0 1 0-39.168l20.352-19.584a29.632 29.632 0 0 1 40.704 0l160.512 154.304V78.912c0-15.36 12.928-27.712 28.8-27.712h28.8z" fill={getIconColor(color, 0, '#096DD9')}/>
    </svg>);
};
IconxiazaiHover.defaultProps = {
    size: 18,
};
export default IconxiazaiHover;
//# sourceMappingURL=IconxiazaiHover.js.map