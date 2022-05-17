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
var Icontongbu = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1088 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M836.032 8c94.784 0 173.44 73.6 179.584 168.192l0.384 11.776v216.064a36.032 36.032 0 0 1-71.424 6.4l-0.576-6.4V188.032c0-55.68-42.24-102.208-97.6-107.52l-10.368-0.512H187.968c-55.616 0-102.144 42.24-107.52 97.664l-0.448 10.368v647.936c0 55.68 42.24 102.208 97.664 107.52l10.368 0.512h144a35.968 35.968 0 0 1 6.4 71.424l-6.4 0.576h-144A180.032 180.032 0 0 1 8.32 847.808l-0.384-11.776V187.968c0-94.784 73.6-173.44 168.192-179.584l11.776-0.384h648.064z m-264.96 999.68a36.032 36.032 0 0 0 4.608-4.672l103.168-123.776a35.968 35.968 0 0 0-27.712-59.008H584V568.192a36.032 36.032 0 0 0-72 0v252.032H444.928a35.968 35.968 0 0 0-27.776 59.008l103.168 123.84c12.8 15.296 35.456 17.28 50.688 4.544z m359.936 0a36.032 36.032 0 0 0 4.608-4.672l103.232-123.776a35.968 35.968 0 0 0-27.712-59.008H944V568.192a35.968 35.968 0 1 0-72 0v252.032h-67.136a35.968 35.968 0 0 0-27.712 59.008l103.168 123.84c12.8 15.296 35.456 17.28 50.688 4.544z" fill={getIconColor(color, 0, '#096DD9')}/>
    </svg>);
};
Icontongbu.defaultProps = {
    size: 18,
};
export default Icontongbu;
//# sourceMappingURL=Icontongbu.js.map