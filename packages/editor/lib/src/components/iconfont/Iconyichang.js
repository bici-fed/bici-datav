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
var Iconyichang = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M507.686788 0C227.452121 0 0 225.093818 0 502.411636s227.452121 502.380606 507.686788 502.380606c280.265697 0 507.717818-225.062788 507.717818-502.380606C1015.404606 225.093818 787.952485 0 507.655758 0z m-50.796606 703.332848c0-27.741091 22.55903-50.20703 50.269091-50.20703h1.05503a50.269091 50.269091 0 0 1 0 100.476121h-1.05503a50.269091 50.269091 0 0 1-50.269091-50.269091z m0-201.448727V301.955879a50.796606 50.796606 0 1 1 101.531151 0v199.928242a50.796606 50.796606 0 1 1-101.531151 0z" fill={getIconColor(color, 0, '#FAAD14')}/>
    </svg>);
};
Iconyichang.defaultProps = {
    size: 18,
};
export default Iconyichang;
//# sourceMappingURL=Iconyichang.js.map