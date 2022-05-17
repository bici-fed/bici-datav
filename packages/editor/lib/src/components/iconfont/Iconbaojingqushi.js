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
var Iconbaojingqushi = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1170 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M919.259429 1013.833143c-222.939429-1.462857-445.878857-1.462857-668.891429 0-222.866286 1.097143-278.089143-93.696-165.522286-284.525714a55767.186286 55767.186286 0 0 0 334.336-574.537143c110.445714-192.219429 220.745143-192.219429 331.117715 0a62373.083429 62373.083429 0 0 0 334.336 574.537143c112.64 191.049143 57.417143 285.915429-165.376 284.525714zM585.069714 248.100571a51.492571 51.492571 0 0 0-52.955428 49.883429l26.550857 354.742857A38.838857 38.838857 0 0 0 585.142857 696.758857a38.838857 38.838857 0 0 0 26.550857-44.032l26.550857-354.742857a51.492571 51.492571 0 0 0-53.174857-49.883429z m0.292572 527.798858h-0.512a52.955429 52.955429 0 0 0 0 105.545142h0.512a52.955429 52.955429 0 0 0 0-105.545142z" fill={getIconColor(color, 0, '#096DD9')}/>
    </svg>);
};
Iconbaojingqushi.defaultProps = {
    size: 18,
};
export default Iconbaojingqushi;
//# sourceMappingURL=Iconbaojingqushi.js.map