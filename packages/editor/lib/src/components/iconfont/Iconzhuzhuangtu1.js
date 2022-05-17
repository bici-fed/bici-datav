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
var Iconzhuzhuangtu1 = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1145 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M72.282353 0l0.216847 831.247059H903.529412v72.282353H48.429176c-26.599906 0-48.188235-21.564235-48.188235-48.188236L0 0h72.282353z m108.423529 332.619294a24.094118 24.094118 0 0 1 24.094118 24.094118V746.917647a24.094118 24.094118 0 0 1-24.094118 24.094118h-24.094117a24.094118 24.094118 0 0 1-24.094118-24.094118V356.713412a24.094118 24.094118 0 0 1 24.094118-24.094118h24.094117z m216.847059-168.658823a24.094118 24.094118 0 0 1 24.094118 24.094117V746.917647a24.094118 24.094118 0 0 1-24.094118 24.094118h-24.094117a24.094118 24.094118 0 0 1-24.094118-24.094118V188.054588a24.094118 24.094118 0 0 1 24.094118-24.094117h24.094117z m216.847059 168.658823a24.094118 24.094118 0 0 1 24.094118 24.094118V746.917647a24.094118 24.094118 0 0 1-24.094118 24.094118h-24.094118a24.094118 24.094118 0 0 1-24.094117-24.094118V356.713412a24.094118 24.094118 0 0 1 24.094117-24.094118h24.094118z m216.847059-96.37647a24.094118 24.094118 0 0 1 24.094117 24.094117V746.917647a24.094118 24.094118 0 0 1-24.094117 24.094118h-24.094118a24.094118 24.094118 0 0 1-24.094117-24.094118V260.336941a24.094118 24.094118 0 0 1 24.094117-24.094117h24.094118z" fill={getIconColor(color, 0, '#333333')}/>
    </svg>);
};
Iconzhuzhuangtu1.defaultProps = {
    size: 18,
};
export default Iconzhuzhuangtu1;
//# sourceMappingURL=Iconzhuzhuangtu1.js.map