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
var Icontianjiaguanlian = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1260 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M957.833846 159.901538a40.172308 40.172308 0 0 1 27.569231 11.815385l256 261.513846c7.089231 7.108923 11.057231 16.738462 11.037538 26.781539V905.846154a116.627692 116.627692 0 0 1-116.588307 118.153846H279.630769a116.588308 116.588308 0 0 1-116.588307-118.153846V549.809231A37.809231 37.809231 0 0 1 200.861538 512a38.596923 38.596923 0 0 1 35.446154 37.809231V905.846154a40.172308 40.172308 0 0 0 40.172308 39.384615h859.372308a39.384615 39.384615 0 0 0 39.384615-39.384615l-0.009846-363.913846H916.086154a38.596923 38.596923 0 0 1-38.596923-38.596923l-0.009846-264.664616H530.116923a39.384615 39.384615 0 1 1 0-78.769231h427.716923zM956.248615 256l0.009847 208.738462h208.728615L956.248615 256zM200.861538 9.452308A38.596923 38.596923 0 0 1 236.307692 48.049231l-0.009846 113.427692H355.249231a39.384615 39.384615 0 1 1 0 78.769231H236.297846L236.307692 354.461538a38.596923 38.596923 0 0 1-35.446154 40.172308A37.809231 37.809231 0 0 1 163.052308 354.461538l-0.009846-114.215384H47.261538a39.384615 39.384615 0 1 1 0-78.769231h115.780924l0.009846-113.427692A37.809231 37.809231 0 0 1 200.861538 9.452308z" fill={getIconColor(color, 0, '#E0E7F5')}/>
    </svg>);
};
Icontianjiaguanlian.defaultProps = {
    size: 18,
};
export default Icontianjiaguanlian;
//# sourceMappingURL=Icontianjiaguanlian.js.map