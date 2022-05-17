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
var Iconzhidutaishiguizepeizhi = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1152 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M212.48896 8C95.36896 8 0.00896 104.256 0.00896 224.32a211.52 211.52 0 0 0 212.48 213.12 211.52 211.52 0 0 0 212.544-213.12c0-120.064-95.36-216.32-212.608-216.32h0.064z m0.064 576.192a211.2 211.2 0 0 0-212.48 212.8 212.864 212.864 0 0 0 212.416 214.784 212.864 212.864 0 0 0 212.544-214.784 211.2 211.2 0 0 0-212.608-212.8h0.128zM548.10496 155.52h559.232A45.376 45.376 0 0 0 1152.00896 109.76a45.376 45.376 0 0 0-44.672-45.888H548.10496a45.376 45.376 0 0 0-44.8 45.888c-0.256 24.96 19.84 45.44 44.8 45.76z m559.232 166.08H548.10496a45.376 45.376 0 0 0-44.8 45.824 45.376 45.376 0 0 0 44.8 45.888h559.232A45.376 45.376 0 0 0 1152.00896 367.36a45.376 45.376 0 0 0-44.672-45.76z m0 286.4H548.10496a45.376 45.376 0 0 0-44.8 45.824c-0.256 24.96 19.84 45.44 44.8 45.824h559.232a45.376 45.376 0 0 0 44.672-45.824 45.376 45.376 0 0 0-44.672-45.824z m0 257.728H548.10496a45.376 45.376 0 0 0-44.8 45.824c-0.256 24.96 19.84 45.44 44.8 45.76h559.232a45.376 45.376 0 0 0 44.672-45.696 45.376 45.376 0 0 0-44.672-45.824z" fill={getIconColor(color, 0, '#096DD9')}/>
    </svg>);
};
Iconzhidutaishiguizepeizhi.defaultProps = {
    size: 18,
};
export default Iconzhidutaishiguizepeizhi;
//# sourceMappingURL=Iconzhidutaishiguizepeizhi.js.map