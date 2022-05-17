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
var Icontongdao0 = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M512 85.312a426.688 426.688 0 1 1 0 853.376A426.688 426.688 0 0 1 512 85.312z m0 64a362.688 362.688 0 1 0 0 725.376A362.688 362.688 0 0 0 512 149.312zM448 341.376c4.608 0 9.152 1.536 12.8 4.288l199.104 149.76a21.312 21.312 0 0 1 0 34.112L460.8 678.4a21.312 21.312 0 0 1-34.112-17.088V362.752c0-11.776 9.536-21.376 21.312-21.376z" fill={getIconColor(color, 0, '#222222')}/>
    </svg>);
};
Icontongdao0.defaultProps = {
    size: 18,
};
export default Icontongdao0;
//# sourceMappingURL=Icontongdao0.js.map