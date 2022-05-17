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
var Iconfenxi = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M311.3984 1018.7776a30.208 30.208 0 0 1 0-60.416h429.4656a30.208 30.208 0 0 1 0 60.416H311.3984zM888.4224 47.2064H163.84a120.832 120.832 0 0 0-120.832 120.832v557.7728a120.832 120.832 0 0 0 120.832 120.7808h724.6848a120.832 120.832 0 0 0 120.7296-120.832V167.9872a120.832 120.832 0 0 0-120.832-120.832h0.0512z m-44.032 246.8864l-232.8576 273.92a42.2912 42.2912 0 0 1-62.9248 1.6896L417.1264 430.592l-165.9392 150.528a30.1568 30.1568 0 0 1-40.6016-44.6464l179.0976-162.56a42.3424 42.3424 0 0 1 59.1872 2.2016l129.7408 137.6256 219.7504-258.7136a30.208 30.208 0 0 1 45.9776 39.1168z" fill={getIconColor(color, 0, '#FFFFFF')}/>
    </svg>);
};
Iconfenxi.defaultProps = {
    size: 18,
};
export default Iconfenxi;
//# sourceMappingURL=Iconfenxi.js.map