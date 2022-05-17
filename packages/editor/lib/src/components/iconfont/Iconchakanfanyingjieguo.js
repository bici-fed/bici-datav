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
var Iconchakanfanyingjieguo = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M122.759228 0H933.646758v990.147765a33.129412 33.129412 0 0 1-32.406589 33.852235H90.35264V33.852235A33.129412 33.129412 0 0 1 122.759228 0z m118.964706 315.934118c35.84 0 64.873412-30.298353 64.873412-67.704471 0-37.345882-29.033412-67.704471-64.873412-67.704471S176.850522 210.823529 176.850522 248.229647c0 37.406118 29.033412 67.704471 64.873412 67.704471z m124.325647-135.408942a16.564706 16.564706 0 0 0-16.263529 16.926118v118.482824h481.159529c8.975059 0 16.263529-7.589647 16.26353-16.865883V180.464941H365.989346zM193.053816 406.226824a16.564706 16.564706 0 0 0-16.263529 16.865882v118.543059h654.155294c8.975059 0 16.263529-7.589647 16.26353-16.926118V406.226824H192.993581z m0 225.641411a16.564706 16.564706 0 0 0-16.263529 16.926118v118.482823h654.155294c8.975059 0 16.263529-7.589647 16.26353-16.865882V631.868235H192.993581z" fill={getIconColor(color, 0, '#096DD9')}/>
    </svg>);
};
Iconchakanfanyingjieguo.defaultProps = {
    size: 18,
};
export default Iconchakanfanyingjieguo;
//# sourceMappingURL=Iconchakanfanyingjieguo.js.map