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
var Iconyiguanzhu1 = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M990.549333 400.042667a44.885333 44.885333 0 0 0-36.238222-30.549334l-277.845333-40.391111-124.302222-251.790222A44.885333 44.885333 0 0 0 512 52.280889c-17.066667 0-32.597333 9.784889-40.163556 25.031111L347.591111 329.102222l-277.845333 40.391111A44.942222 44.942222 0 0 0 44.828444 446.008889l201.045334 195.925333-47.274667 276.764445a44.942222 44.942222 0 0 0 65.024 47.217777l248.490667-130.730666 248.547555 130.673778a45.169778 45.169778 0 0 0 47.217778-3.356445 44.942222 44.942222 0 0 0 17.806222-43.804444l-47.445333-276.764445 201.102222-195.925333a45.169778 45.169778 0 0 0 11.207111-45.966222z" fill={getIconColor(color, 0, '#F7B500')}/>
    </svg>);
};
Iconyiguanzhu1.defaultProps = {
    size: 18,
};
export default Iconyiguanzhu1;
//# sourceMappingURL=Iconyiguanzhu1.js.map