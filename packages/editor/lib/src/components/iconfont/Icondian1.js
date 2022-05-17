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
var Icondian1 = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M765.525333 398.208A25.6 25.6 0 0 0 742.4 384h-169.813333l161.024-260.992a24.32 24.32 0 0 0 0.341333-25.045333A25.728 25.728 0 0 0 711.68 85.333333h-245.76a25.6 25.6 0 0 0-23.765333 15.658667l-184.32 448a24.32 24.32 0 0 0 2.56 23.168c4.778667 6.826667 12.714667 10.922667 21.205333 10.922667h116.650667L257.706667 947.669333a24.576 24.576 0 0 0 11.178666 30.336 26.112 26.112 0 0 0 32.597334-5.845333l460.8-547.541333a24.32 24.32 0 0 0 3.285333-26.410667zM360.064 823.893333l99.114667-256.938666a24.32 24.32 0 0 0-2.944-22.912 25.813333 25.813333 0 0 0-21.034667-10.709334H319.402667l163.84-398.208h183.210666l-161.066666 260.949334a24.32 24.32 0 0 0-0.341334 25.088 25.728 25.728 0 0 0 22.314667 12.586666h161.024L360.064 823.893333z" fill={getIconColor(color, 0, '#333333')}/>
    </svg>);
};
Icondian1.defaultProps = {
    size: 18,
};
export default Icondian1;
//# sourceMappingURL=Icondian1.js.map