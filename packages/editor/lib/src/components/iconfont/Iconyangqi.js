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
var Iconyangqi = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M757.76 571.178667c31.317333 0.341333 56.746667 10.325333 76.245333 29.994666 19.84 19.498667 29.909333 44.245333 30.250667 74.24 0 24.021333-7.338667 45.354667-22.016 64l-117.248 146.986667h139.264V938.666667h-207.786667v-49.237334l142.293334-178.005333c5.504-7.168 9.216-13.824 11.221333-20.010667 1.365333-5.845333 2.005333-11.349333 2.005333-16.512 0-13.653333-4.266667-25.6-12.757333-35.754666-8.832-10.154667-21.333333-15.36-37.461333-15.744-14.336 0-26.282667 4.608-35.754667 13.781333-9.813333 9.130667-15.701333 22.058667-17.493333 38.741333h-52.053334c1.365333-30.336 11.52-55.424 30.549334-75.264a97.450667 97.450667 0 0 1 70.741333-29.482666zM384 85.333333a256 256 0 0 1 256 256v341.333334a256 256 0 1 1-512 0V341.333333a256 256 0 0 1 256-256z m0 64a192 192 0 0 0-191.786667 182.954667L192 341.333333v341.333334a192 192 0 0 0 383.786667 9.045333L576 682.666667V341.333333A192 192 0 0 0 384 149.333333z" fill={getIconColor(color, 0, '#333333')}/>
    </svg>);
};
Iconyangqi.defaultProps = {
    size: 18,
};
export default Iconyangqi;
//# sourceMappingURL=Iconyangqi.js.map