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
var IconcaidanJichushuju = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M461.632 432.128l24.448 24.448a21.12 21.12 0 0 1 0 29.888l-59.968 59.904-0.576 0.448 66.368 66.56 60.544-60.544a21.12 21.12 0 0 1 29.824 0l24.448 24.448a21.12 21.12 0 0 1 0 29.824l-59.968 59.968-0.576 0.448 36.608 36.608a42.24 42.24 0 0 1 0 59.712l-90.88 90.88a213.376 213.376 0 0 1-275.84 22.016 8.512 8.512 0 0 1-1.536 1.92l-59.968 59.968a21.12 21.12 0 0 1-29.824 0l-24.448-24.448a21.12 21.12 0 0 1 0-29.888l59.904-59.968 3.136-2.496a213.376 213.376 0 0 1 26.88-268.8l90.88-90.88a42.24 42.24 0 0 1 59.712 0l30.464 30.528 0.256-0.32 60.224-60.16a21.12 21.12 0 0 1 29.888 0zM310.912 522.88L235.52 598.208a149.312 149.312 0 0 0-3.584 207.488l3.584 3.712c57.088 57.088 148.928 58.24 207.488 3.584l3.648-3.584 75.456-75.392-211.2-211.2z m573.44-422.528a21.12 21.12 0 0 1 29.824 0l24.448 24.448a21.12 21.12 0 0 1 0 29.824l-59.968 59.968a8.384 8.384 0 0 1-1.92 1.536 213.376 213.376 0 0 1-22.08 275.84l-90.816 90.88a42.24 42.24 0 0 1-59.712 0l-241.92-241.984a42.24 42.24 0 0 1 0-59.776L552.96 190.272a213.376 213.376 0 0 1 268.864-26.944l2.56-3.136z m-78.656 131.648a149.312 149.312 0 0 0-207.488 3.584L522.88 310.912l211.2 211.2 75.392-75.456 3.584-3.648a149.312 149.312 0 0 0-3.584-207.488z" fill={getIconColor(color, 0, '#333333')}/>
    </svg>);
};
IconcaidanJichushuju.defaultProps = {
    size: 18,
};
export default IconcaidanJichushuju;
//# sourceMappingURL=IconcaidanJichushuju.js.map