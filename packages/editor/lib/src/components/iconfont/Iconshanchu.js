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
var Iconshanchu = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M359.9872 184.0128h-7.9872c4.4032 0 7.9872-3.584 7.9872-7.9872v7.9872h304.0256v-7.9872c0 4.352 3.584 7.9872 7.9872 7.9872h-7.9872V256h71.9872V175.9744c0-35.2768-28.672-64-64-64h-320c-35.328 0-64 28.7232-64 64V256h71.9872V184.0128zM864 256H160a31.9488 31.9488 0 0 0-32 32v32c0 4.4032 3.584 7.9872 7.9872 7.9872h60.416l24.6784 523.008a64.0512 64.0512 0 0 0 63.8976 61.0304h454.0416c34.2016 0 62.2592-26.8288 63.8976-61.0304l24.6784-523.008h60.416c4.4032 0 7.9872-3.584 7.9872-7.9872v-32A31.9488 31.9488 0 0 0 864 256z m-132.7104 583.9872H292.7104l-24.2176-512h487.0144l-24.2176 512zM373.6576 394.4448h71.68v358.4h-71.68v-358.4z m204.9536 1.2288h71.68v358.4h-71.68v-358.4z" fill={getIconColor(color, 0, '#333333')}/>
    </svg>);
};
Iconshanchu.defaultProps = {
    size: 18,
};
export default Iconshanchu;
//# sourceMappingURL=Iconshanchu.js.map