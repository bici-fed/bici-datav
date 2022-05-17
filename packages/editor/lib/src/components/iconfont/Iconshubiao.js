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
var Iconshubiao = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M888.32 593.152l-44.352-332.544C823.872 110.08 676.096 0.768 512 0.768S200.128 110.016 179.968 260.48L135.68 593.024c-28.48 212.736 131.84 430.208 376.512 430.208 244.48 0 404.864-217.472 376.256-430.08z m-306.304-248.96a70.016 70.016 0 0 1-140.032 0v-157.44a70.016 70.016 0 0 1 140.032 0v157.44z" fill={getIconColor(color, 0, '#096DD9')}/>
    </svg>);
};
Iconshubiao.defaultProps = {
    size: 18,
};
export default Iconshubiao;
//# sourceMappingURL=Iconshubiao.js.map