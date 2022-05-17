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
var Iconmima = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M768 341.333333h-42.666667V256c0-117.76-95.573333-213.333333-213.333333-213.333333S298.666667 138.24 298.666667 256v85.333333H256c-46.933333 0-85.333333 38.4-85.333333 85.333334v426.666666c0 46.933333 38.4 85.333333 85.333333 85.333334h512c46.933333 0 85.333333-38.4 85.333333-85.333334V426.666667c0-46.933333-38.4-85.333333-85.333333-85.333334zM379.733333 256c0-72.96 59.306667-132.266667 132.266667-132.266667 72.96 0 132.266667 59.306667 132.266667 132.266667v85.333333H379.733333V256zM768 853.333333H256V426.666667h512v426.666666z m-298.666667-256H341.333333v85.333334h341.333334v-85.333334h-213.333334z" fill={getIconColor(color, 0, '#333333')}/>
    </svg>);
};
Iconmima.defaultProps = {
    size: 18,
};
export default Iconmima;
//# sourceMappingURL=Iconmima.js.map