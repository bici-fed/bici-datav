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
var IconcaidanBanciguanli = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M811.072 512a42.24 42.24 0 0 1 42.24 42.24v342.208a42.24 42.24 0 0 1-42.24 42.24H212.928a42.24 42.24 0 0 1-42.24-42.24V554.24a42.24 42.24 0 0 1 42.24-42.24l129.792 0.064C387.84 551.872 447.104 576 512 576s124.16-24.128 169.28-63.936L811.072 512zM340.352 576H234.688v299.072h555.136V576h-105.472c-44.16 43.072-104.512 62.912-172.352 62.912S384 619.84 340.352 576zM512 85.312A213.312 213.312 0 1 1 512 512a213.312 213.312 0 0 1 0-426.688z m0 64A149.312 149.312 0 1 0 512 448a149.312 149.312 0 0 0 0-298.688z" fill={getIconColor(color, 0, '#333333')}/>
    </svg>);
};
IconcaidanBanciguanli.defaultProps = {
    size: 18,
};
export default IconcaidanBanciguanli;
//# sourceMappingURL=IconcaidanBanciguanli.js.map