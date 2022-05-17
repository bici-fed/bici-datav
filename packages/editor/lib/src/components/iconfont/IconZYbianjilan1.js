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
var IconZYbianjilan1 = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M1021.539159 512.206492V921.607167A102.563487 102.563487 0 0 1 919.402309 1024H102.13685A102.563487 102.563487 0 0 1 0 921.607167V102.635162A102.563487 102.563487 0 0 1 102.13685 0.412984h357.521641c30.71785 0 51.196416 20.478567 51.196416 51.196417s-20.563894 51.196416-51.196416 51.196416H153.162612c-30.547195 0-51.025762 20.478567-51.025762 51.196416V870.410751c0 30.71785 20.478567 51.196416 51.025762 51.196416h715.128608c30.71785 0 51.111089-20.478567 51.111089-51.196416v-358.374914c0-30.71785 20.478567-51.196416 51.025761-51.196416 30.632522 0 51.025762 20.478567 51.025762 51.196416h0.085327z m-10.239283-501.724879c20.478567 25.598208 15.358925 61.4357-10.239284 81.914266L439.265251 655.47113c-15.358925 25.598208-45.991447 35.837491-71.504328 20.478567-25.598208-15.358925-35.752164-46.076775-20.478566-71.674983 5.119642-5.119642 10.239283-15.358925 20.478566-20.478566L924.436623 20.806224c20.478567-25.598208 61.350372-25.598208 86.863253-10.239284z" fill={getIconColor(color, 0, '#333333')}/>
    </svg>);
};
IconZYbianjilan1.defaultProps = {
    size: 18,
};
export default IconZYbianjilan1;
//# sourceMappingURL=IconZYbianjilan1.js.map