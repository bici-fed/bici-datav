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
var Iconyaqi = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M888.661333 545.706667c27.776 0.426667 52.010667 9.301333 72.661334 26.624l-50.645334 60.330666c-14.677333-11.52-29.866667-17.322667-45.653333-17.322666-17.792 0-33.024 5.76-45.653333 17.322666-14.250667 11.349333-21.589333 29.653333-22.058667 55.04V896h-69.632v-346.026667h69.674667v36.693334h1.28c22.912-27.306667 52.906667-40.96 90.026666-40.96zM405.205333 128L682.666667 896h-71.424l-71.808-198.784H221.610667L155.989333 896H85.290667L338.816 128h66.389333z m-31.829333 109.525333l-129.578667 392.490667h271.36l-141.781333-392.533333z" fill={getIconColor(color, 0, '#333333')}/>
    </svg>);
};
Iconyaqi.defaultProps = {
    size: 18,
};
export default Iconyaqi;
//# sourceMappingURL=Iconyaqi.js.map