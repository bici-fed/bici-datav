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
var Iconjinyonggaiziduan = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M227.149913 21.014261l2.893913 3.873391 150.038261 227.016348A530.253913 530.253913 0 0 1 512 233.73913a530.610087 530.610087 0 0 1 463.471304 284.493913 33.391304 33.391304 0 0 1 0 33.391305 530.432 530.432 0 0 1-243.622956 232.759652l116.513391 176.261565a35.617391 35.617391 0 0 1-56.498087 43.097044l-2.938435-3.82887L170.651826 64.111304A35.617391 35.617391 0 0 1 227.149913 21.014261zM276.48 291.795478l37.175652 56.230957A461.289739 461.289739 0 0 0 116.290783 534.26087 461.467826 461.467826 0 0 0 512 768c25.243826-0.311652 50.131478-2.671304 74.529391-6.989913l39.713392 60.059826c-37.042087 8.592696-75.286261 13.267478-114.242783 13.712696A530.565565 530.565565 0 0 1 48.528696 550.288696a33.391304 33.391304 0 0 1 0-33.391305 530.342957 530.342957 0 0 1 227.951304-225.101913zM512 300.521739c-31.610435 0.400696-62.642087 4.006957-92.827826 10.596174l275.411478 416.768A461.334261 461.334261 0 0 0 907.664696 534.26087 461.467826 461.467826 0 0 0 512 300.521739z" fill={getIconColor(color, 0, '#096DD9')}/>
    </svg>);
};
Iconjinyonggaiziduan.defaultProps = {
    size: 18,
};
export default Iconjinyonggaiziduan;
//# sourceMappingURL=Iconjinyonggaiziduan.js.map