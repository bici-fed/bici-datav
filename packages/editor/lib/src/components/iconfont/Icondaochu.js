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
var Icondaochu = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M517.824 657.28c27.84 0 50.56 22.72 50.56 50.56v151.68a152.128 152.128 0 0 1-151.68 151.68h-252.8a152.128 152.128 0 0 1-151.68-151.68V151.68A152.128 152.128 0 0 1 163.968 0h252.8a152.128 152.128 0 0 1 151.68 151.68v151.68c0 27.776-22.72 50.56-50.56 50.56a50.688 50.688 0 0 1-50.56-50.56V151.68a50.688 50.688 0 0 0-50.56-50.56h-252.8a50.688 50.688 0 0 0-50.56 50.56v707.84c0 27.776 22.784 50.56 50.56 50.56h252.8c27.84 0 50.56-22.784 50.56-50.56v-151.68c0-27.84 22.784-50.56 50.56-50.56z m495.488-121.344c-1.92 1.92-3.2 3.776-3.84 4.416l-202.24 202.24a52.288 52.288 0 0 1-35.968 14.528 49.6 49.6 0 0 1-36.032-14.528 50.752 50.752 0 0 1 0-71.424l115.648-115.648H265.024a50.688 50.688 0 0 1-50.56-50.56c0-27.84 22.784-50.56 50.56-50.56h586.496l-115.648-115.648a50.752 50.752 0 0 1 0-71.424 50.752 50.752 0 0 1 71.424 0l202.24 202.24c2.56 1.92 4.416 5.056 6.272 7.552l1.92 3.84c0.64 1.92 1.92 3.136 2.56 5.056 0.64 1.92 0.64 3.136 1.28 5.056s1.28 3.136 1.28 4.416c1.216 6.272 1.216 13.248 0 19.584 0 1.92-0.64 3.2-1.28 4.416-0.64 1.92-1.28 3.2-1.92 5.056-0.64 1.92-1.92 3.2-2.56 5.056l-1.92 3.84v0.64l-1.856 1.856z" fill={getIconColor(color, 0, '#096DD9')}/>
    </svg>);
};
Icondaochu.defaultProps = {
    size: 18,
};
export default Icondaochu;
//# sourceMappingURL=Icondaochu.js.map