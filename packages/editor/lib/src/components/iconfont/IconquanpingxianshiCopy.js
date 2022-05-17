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
var IconquanpingxianshiCopy = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M599.38133333 41.08743111v60.73002667c0 13.39847111-10.92266667 24.24832-24.24832 24.24832H126.06577778v449.06723555c0 13.39847111-10.92266667 24.24832-24.24832 24.24832h-60.73002667a24.24832 24.24832 0 0 1-24.24832-24.24832v-509.72444444c0-26.86976 21.69969778-48.56945778 48.56945778-48.56945778h509.72444444c13.39847111 0 24.24832 10.92266667 24.24832 24.24832zM424.61866667 982.91256889v-60.73002667a24.24832 24.24832 0 0 1 24.24832-24.24832H897.93422222V448.86698667c0-13.39847111 10.92266667-24.24832 24.24832-24.24832h60.73002667c13.39847111 0 24.24832 10.92266667 24.24832 24.24832v509.72444444a48.56945778 48.56945778 0 0 1-48.56945778 48.56945778h-509.72444444a24.24832 24.24832 0 0 1-24.24832-24.24832z" fill={getIconColor(color, 0, '#ffffff')}/>
    </svg>);
};
IconquanpingxianshiCopy.defaultProps = {
    size: 18,
};
export default IconquanpingxianshiCopy;
//# sourceMappingURL=IconquanpingxianshiCopy.js.map