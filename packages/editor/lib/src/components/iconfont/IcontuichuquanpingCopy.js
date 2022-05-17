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
var IcontuichuquanpingCopy = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M982.91256889 541.12711111c13.39847111 0 24.24832 10.92266667 24.24832 24.24832v60.73002667c0 13.39847111-10.92266667 24.24832-24.24832 24.24832H650.35377778v332.55879111c0 13.39847111-10.92266667 24.24832-24.24832 24.24832h-60.73002667a24.24832 24.24832 0 0 1-24.24832-24.24832v-393.216c0-26.86976 21.69969778-48.56945778 48.56945778-48.56945778h393.216z m-524.288-524.288c13.39847111 0 24.24832 10.92266667 24.24832 24.24832v393.216a48.56945778 48.56945778 0 0 1-48.56945778 48.56945778h-393.216a24.24832 24.24832 0 0 1-24.24832-24.24832v-60.73002667c0-11.65084445 8.30122667-21.48124445 19.36952889-23.73859555l4.87879111-0.50972445H373.64622222V41.08743111c0-13.39847111 10.92266667-24.24832 24.24832-24.24832h60.73002667z" fill={getIconColor(color, 0, '#ffffff')}/>
    </svg>);
};
IcontuichuquanpingCopy.defaultProps = {
    size: 18,
};
export default IcontuichuquanpingCopy;
//# sourceMappingURL=IcontuichuquanpingCopy.js.map