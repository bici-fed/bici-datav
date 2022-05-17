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
var Iconbingzhuangtu = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1126 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M465.454545 0v465.454545h465.454546c0 257.070545-208.384 465.454545-465.454546 465.454546S0 722.525091 0 465.454545 208.384 0 465.454545 0z m-69.818181 75.962182l-3.677091 0.674909C208.570182 111.080727 69.818182 272.058182 69.818182 465.454545c0 218.507636 177.128727 395.636364 395.636363 395.636364 193.396364 0 354.373818-138.752 388.817455-322.141091l0.651636-3.677091H442.181818a46.545455 46.545455 0 0 1-46.545454-46.545454V75.962182zM523.636364 0c222.370909 0 403.130182 178.222545 407.202909 399.616L930.909091 407.272727h-69.818182c0-183.924364-147.130182-333.474909-330.123636-337.384727L523.636364 69.818182V0z" fill={getIconColor(color, 0, '#333333')}/>
    </svg>);
};
Iconbingzhuangtu.defaultProps = {
    size: 18,
};
export default Iconbingzhuangtu;
//# sourceMappingURL=Iconbingzhuangtu.js.map