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
var Iconliebiao = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M917.333333 298.666667v21.333333a21.333333 21.333333 0 0 1-21.333333 21.333333H320a21.333333 21.333333 0 0 1-21.333333-21.333333V298.666667a21.333333 21.333333 0 0 1 21.333333-21.333334H896a21.333333 21.333333 0 0 1 21.333333 21.333334zM181.333333 362.666667a53.333333 53.333333 0 1 0 0-106.666667 53.333333 53.333333 0 0 0 0 106.666667z m0 213.333333a53.333333 53.333333 0 1 0 0-106.666667 53.333333 53.333333 0 0 0 0 106.666667z m0 106.666667a53.333333 53.333333 0 1 1 0 106.666666 53.333333 53.333333 0 0 1 0-106.666666z m714.666667 21.333333a21.333333 21.333333 0 0 1 21.333333 21.333333v21.333334a21.333333 21.333333 0 0 1-21.333333 21.333333H320a21.333333 21.333333 0 0 1-21.333333-21.333333V725.333333a21.333333 21.333333 0 0 1 21.333333-21.333333H896z m0-213.333333a21.333333 21.333333 0 0 1 21.333333 21.333333v21.333333a21.333333 21.333333 0 0 1-21.333333 21.333334H320a21.333333 21.333333 0 0 1-21.333333-21.333334V512a21.333333 21.333333 0 0 1 21.333333-21.333333H896z" fill={getIconColor(color, 0, '#096DD9')}/>
    </svg>);
};
Iconliebiao.defaultProps = {
    size: 18,
};
export default Iconliebiao;
//# sourceMappingURL=Iconliebiao.js.map