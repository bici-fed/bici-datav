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
var IconcaidanShebeiguanli = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M308.544 149.312l407.872 0.64c7.04 0 13.632 3.712 17.216 9.856l204.416 352.96a19.776 19.776 0 0 1 0 19.776l-203.456 352.384a19.776 19.776 0 0 1-17.152 9.856l-407.872-0.576a19.84 19.84 0 0 1-17.152-9.92L88 531.392a19.776 19.776 0 0 1 0-19.84l203.392-352.32a19.776 19.776 0 0 1 17.152-9.92z m34.432 59.456a19.776 19.776 0 0 0-17.152 9.856L156.608 511.68a19.776 19.776 0 0 0 0 19.776l170.048 293.504a19.84 19.84 0 0 0 17.216 9.92l339.2 0.448c7.04 0 13.568-3.712 17.152-9.856l169.152-293.056a19.776 19.776 0 0 0 0-19.776l-169.984-293.504a19.84 19.84 0 0 0-17.216-9.92z m168.896 135.232a181.312 181.312 0 1 1 0 362.624 181.312 181.312 0 0 1 0-362.624z m0 68.224a113.088 113.088 0 1 0 0 226.176 113.088 113.088 0 0 0 0-226.176z" fill={getIconColor(color, 0, '#333333')}/>
    </svg>);
};
IconcaidanShebeiguanli.defaultProps = {
    size: 18,
};
export default IconcaidanShebeiguanli;
//# sourceMappingURL=IconcaidanShebeiguanli.js.map