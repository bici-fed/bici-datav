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
var Iconzhengchang = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M300.916364 159.650909a60.509091 60.509091 0 0 0-21.178182-79.825454c-27.694545-16.290909-63.534545-8.145455-79.825455 17.92 0 0 0 1.629091-1.629091 1.62909a751.802182 751.802182 0 0 0-42.356363 410.53091s-188.974545 557.149091 407.272727 488.727272c99.374545-11.403636 226.443636-84.712727 255.767273-140.101818 17.92-24.436364 14.661818-58.647273-6.516364-81.454545-24.436364-21.178182-60.276364-17.92-81.454545 6.516363-37.469091 43.985455-104.261818 47.243636-146.618182 9.774546-43.985455-37.469091-47.243636-104.261818-9.774546-146.618182 37.469091-43.985455 104.261818-47.243636 146.618182-9.774546 13.032727 11.403636 22.807273 26.065455 29.323637 40.727273 8.145455 30.952727 40.727273 48.872727 71.68 40.727273 30.952727-8.145455 48.872727-40.727273 40.727272-71.68-1.629091-3.258182-1.629091-6.516364-3.258182-8.145455a222.813091 222.813091 0 0 0-206.894545-141.730909 299.380364 299.380364 0 0 0-118.923636 19.549091 479.604364 479.604364 0 0 1 237.847272-239.476363c32.581818-9.774545 50.501818-42.356364 42.356364-74.938182-9.774545-32.581818-42.356364-50.501818-74.938182-42.356364-9.774545 3.258182-185.716364 40.727273-320.930909 281.832727A456.890182 456.890182 0 0 1 569.716364 143.36c26.065455-17.92 32.581818-55.389091 14.661818-81.454545C566.458182 35.84 530.618182 29.323636 502.923636 47.243636c-8.145455 6.516364-179.2 123.810909-224.814545 397.498182-19.549091-96.116364-11.403636-195.490909 22.807273-285.090909z" fill={getIconColor(color, 0, '#7EB348')}/>
    </svg>);
};
Iconzhengchang.defaultProps = {
    size: 18,
};
export default Iconzhengchang;
//# sourceMappingURL=Iconzhengchang.js.map