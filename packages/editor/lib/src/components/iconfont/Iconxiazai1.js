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
var Iconxiazai1 = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M505.7024 660.992c3.1744 4.096 9.4208 4.096 12.5952 0l112.0256-141.6704a7.9872 7.9872 0 0 0-6.2976-12.9024H549.888V167.936a8.0384 8.0384 0 0 0-7.9872-7.9872H481.8944a8.0384 8.0384 0 0 0-7.9872 7.9872V506.368H399.9744c-6.656 0-10.3936 7.68-6.2976 12.9024l112.0256 141.824z m372.2752-34.9696h-59.9552a8.0384 8.0384 0 0 0-8.0384 7.9872v154.0096H214.016v-154.0096a8.0384 8.0384 0 0 0-8.0384-7.9872H146.0224a8.0384 8.0384 0 0 0-8.0384 7.9872v197.9904c0 17.7152 14.336 32 32 32h684.032c17.664 0 32-14.336 32-32v-197.9904a8.0384 8.0384 0 0 0-8.0384-7.9872z" fill={getIconColor(color, 0, '#333333')}/>
    </svg>);
};
Iconxiazai1.defaultProps = {
    size: 18,
};
export default Iconxiazai1;
//# sourceMappingURL=Iconxiazai1.js.map