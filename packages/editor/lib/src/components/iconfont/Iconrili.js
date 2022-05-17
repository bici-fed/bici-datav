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
var Iconrili = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1170 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M819.2 56.905143c14.336 0 26.038857 11.702857 26.038857 26.038857l-0.073143 38.912h202.898286c31.451429 0 57.197714 25.819429 57.197714 57.344v771.145143a57.417143 57.417143 0 0 1-57.197714 57.344H122.148571a57.417143 57.417143 0 0 1-57.197714-57.344V179.2c0-31.451429 25.746286-57.270857 57.197714-57.270857l202.825143-0.073143v-38.912c0-14.336 11.702857-26.038857 26.038857-26.038857 14.336 0 26.038857 11.702857 26.038858 26.038857l-0.073143 38.912h416.109714v-38.912c0-14.336 11.702857-26.038857 26.038857-26.038857z m-494.153143 117.028571L122.148571 174.08a5.193143 5.193143 0 0 0-5.193142 5.193143v771.145143c0 2.925714 2.340571 5.266286 5.193142 5.266285H1048.137143c2.852571 0 5.193143-2.340571 5.193143-5.266285V179.2a5.193143 5.193143 0 0 0-5.193143-5.193143h-202.898286v112.128c0 14.336-11.702857 26.038857-25.965714 26.038857a26.112 26.112 0 0 1-26.038857-26.038857V174.08h-416.182857l0.146285 112.128c0 14.336-11.702857 26.038857-26.038857 26.038857a26.112 26.112 0 0 1-26.038857-26.038857V174.08z m494.153143 384a26.112 26.112 0 0 1 0 52.150857H351.085714a26.112 26.112 0 0 1 0-52.150857h468.114286z" fill={getIconColor(color, 0, '#096DD9')}/>
    </svg>);
};
Iconrili.defaultProps = {
    size: 18,
};
export default Iconrili;
//# sourceMappingURL=Iconrili.js.map