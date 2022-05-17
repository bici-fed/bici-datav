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
var Icontongbubaojingguize = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M634.88 729.6H145.92C79.36 729.6 25.6 675.84 25.6 609.28V145.92C25.6 79.36 79.36 25.6 145.92 25.6h488.96c66.56 0 120.32 53.76 120.32 120.32v35.84c0 25.6-20.48 46.08-46.08 46.08-25.6 0-46.08-20.48-46.08-46.08v-35.84c0-15.36-12.8-28.16-28.16-28.16H145.92c-15.36 0-28.16 12.8-28.16 28.16v463.36c0 15.36 12.8 28.16 28.16 28.16h488.96c15.36 0 28.16-12.8 28.16-28.16V524.8c0-25.6 20.48-46.08 46.08-46.08 25.6 0 46.08 20.48 46.08 46.08v84.48c0 66.56-53.76 120.32-120.32 120.32zM414.72 1024c-66.56 0-120.32-53.76-120.32-120.32v-33.28c0-25.6 20.48-46.08 46.08-46.08 25.6 0 46.08 20.48 46.08 46.08v33.28c0 15.36 12.8 28.16 28.16 28.16h488.96c15.36 0 28.16-12.8 28.16-28.16V440.32c0-15.36-12.8-28.16-28.16-28.16H414.72c-15.36 0-28.16 12.8-28.16 28.16V524.8c0 25.6-20.48 46.08-46.08 46.08-25.6 0-46.08-20.48-46.08-46.08V440.32C294.4 373.76 348.16 320 414.72 320h488.96C970.24 320 1024 373.76 1024 440.32v463.36c0 66.56-53.76 120.32-120.32 120.32H414.72z" fill={getIconColor(color, 0, '#096DD9')}/>
    </svg>);
};
Icontongbubaojingguize.defaultProps = {
    size: 18,
};
export default Icontongbubaojingguize;
//# sourceMappingURL=Icontongbubaojingguize.js.map