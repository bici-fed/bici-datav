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
var IconcaidanShujuyingyong = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M661.312 128a128 128 0 0 1 82.816 225.6l56.832 117.504a117.312 117.312 0 1 1-57.6 27.84l-56.896-117.44a128.64 128.64 0 0 1-43.52 1.216l-133.44 266.368a128 128 0 1 1-182.272 16.896L223.808 528.576a106.624 106.624 0 0 1-138.432-101.824 106.688 106.688 0 1 1 190.976 65.344l102.4 135.936a127.616 127.616 0 0 1 73.536-6.784l131.84-263.168A128 128 0 0 1 661.376 128z m-234.624 560.512a58.24 58.24 0 1 0 0 116.352 58.24 58.24 0 0 0 0-116.352z m394.624-155.2a53.312 53.312 0 1 0 0 106.688 53.312 53.312 0 0 0 0-106.688zM192 378.24a48.512 48.512 0 1 0 0 96.96 48.512 48.512 0 0 0 0-96.96z m469.312-180.352a58.24 58.24 0 1 0 0 116.352 58.24 58.24 0 0 0 0-116.352z" fill={getIconColor(color, 0, '#333333')}/>
    </svg>);
};
IconcaidanShujuyingyong.defaultProps = {
    size: 18,
};
export default IconcaidanShujuyingyong;
//# sourceMappingURL=IconcaidanShujuyingyong.js.map