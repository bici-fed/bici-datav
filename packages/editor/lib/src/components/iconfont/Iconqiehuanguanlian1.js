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
var Iconqiehuanguanlian1 = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1280 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M304.810667 442.368a53.589333 53.589333 0 0 1-75.690667 75.690667l-213.333333-213.333334a53.333333 53.333333 0 0 1 0-75.690666l213.333333-213.333334a53.589333 53.589333 0 0 1 75.690667 75.690667L128.853333 266.922667l175.957334 175.445333zM53.76 320.256a53.333333 53.333333 0 1 1 0-106.666667h640a53.333333 53.333333 0 0 1 0 106.666667h-640zM975.786667 517.973333a53.589333 53.589333 0 1 1 75.690666-75.690666l213.333334 213.333333a53.333333 53.333333 0 0 1 0 75.690667l-213.333334 213.333333a53.589333 53.589333 0 0 1-75.690666-75.690667l175.957333-175.445333-175.957333-175.530667z m251.221333 122.197334a53.333333 53.333333 0 0 1 0 106.666666h-640a53.333333 53.333333 0 0 1 0-106.666666h640z" fill={getIconColor(color, 0, '#096DD9')}/>
    </svg>);
};
Iconqiehuanguanlian1.defaultProps = {
    size: 18,
};
export default Iconqiehuanguanlian1;
//# sourceMappingURL=Iconqiehuanguanlian1.js.map