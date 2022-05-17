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
var Icontianjiatuxing = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M926.0032 163.9936H94.0032a31.9488 31.9488 0 0 0-32 32v640c0 17.7152 14.336 32 32 32h832c17.7152 0 32-14.336 32-32v-640a31.9488 31.9488 0 0 0-32-32z m-39.9872 632.0128H133.9904V235.9808h752.0256v560.0256z m-658.944-82.3296c3.1232 3.1232 8.192 3.1232 11.3152 0l172.544-172.4928 114.3808 114.5344c3.072 3.072 8.192 3.072 11.264 0l297.0112-297.216c3.072-3.072 3.072-8.192 0-11.264l-36.7616-36.864a8.0384 8.0384 0 0 0-11.3152 0l-254.464 254.6176L416.5632 450.56a8.0384 8.0384 0 0 0-11.3152 0l-214.8864 214.9888c-3.072 3.072-3.072 8.192 0 11.264l36.7104 36.9152z" fill={getIconColor(color, 0, '#333333')}/>
    </svg>);
};
Icontianjiatuxing.defaultProps = {
    size: 18,
};
export default Icontianjiatuxing;
//# sourceMappingURL=Icontianjiatuxing.js.map