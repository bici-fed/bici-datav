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
var IconcaidanGongyibianzhi = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M650.624 763.392c7.552 20.416 18.944 38.976 33.216 54.784L512 917.376l-171.84-99.2c14.272-15.808 25.6-34.368 33.216-54.784L512 843.392l138.624-80zM214.336 597.312a106.688 106.688 0 1 1 0 213.376 106.688 106.688 0 0 1 0-213.376z m597.312 0a106.688 106.688 0 1 1 0 213.376 106.688 106.688 0 0 1 0-213.376z m-597.312 64a42.688 42.688 0 1 0 0 85.376 42.688 42.688 0 0 0 0-85.376z m597.312 0a42.688 42.688 0 1 0 0 85.376 42.688 42.688 0 0 0 0-85.376z m-462.464-417.92c6.592 20.8 16.96 39.808 30.4 56.32L243.456 378.24v157.696a171.712 171.712 0 0 0-64 0.704V341.312l169.728-97.92z m325.632 0l169.728 97.92v195.392a171.52 171.52 0 0 0-64-0.704V378.24l-136.192-78.528a170.24 170.24 0 0 0 30.464-56.32z m-161.792-158.08a106.688 106.688 0 1 1 0 213.376 106.688 106.688 0 0 1 0-213.376z m0 64a42.688 42.688 0 1 0 0 85.376 42.688 42.688 0 0 0 0-85.376z" fill={getIconColor(color, 0, '#333333')}/>
    </svg>);
};
IconcaidanGongyibianzhi.defaultProps = {
    size: 18,
};
export default IconcaidanGongyibianzhi;
//# sourceMappingURL=IconcaidanGongyibianzhi.js.map