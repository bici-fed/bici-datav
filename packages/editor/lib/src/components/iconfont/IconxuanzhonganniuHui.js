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
var IconxuanzhonganniuHui = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M512 64C264.590222 64 64 264.590222 64 512S264.590222 960 512 960 960 759.409778 960 512 759.409778 64 512 64z m193.507556 301.710222l-210.602667 291.982222a31.800889 31.800889 0 0 1-51.712 0l-124.700445-172.8a8.021333 8.021333 0 0 1 6.513778-12.686222h46.904889c10.183111 0 19.911111 4.892444 25.884445 13.283556l71.196444 98.816 157.212444-217.998222c5.973333-8.305778 15.587556-13.312 25.884445-13.312h46.933333c6.485333 0 10.268444 7.395556 6.485334 12.714666z" fill={getIconColor(color, 0, '#000000')} fill-opacity=".2"/>
    </svg>);
};
IconxuanzhonganniuHui.defaultProps = {
    size: 18,
};
export default IconxuanzhonganniuHui;
//# sourceMappingURL=IconxuanzhonganniuHui.js.map