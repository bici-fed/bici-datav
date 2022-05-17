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
var Iconxinjian = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M750.9504 0C925.2352 0 1024 98.816 1024 273.0496v477.9008C1024 924.7744 925.184 1024 750.9504 1024H273.0496C98.304 1024 0 924.7744 0 750.9504V273.0496C0 98.7648 98.816 0 273.0496 0zM511.7952 307.2a38.656 38.656 0 0 0-38.6048 34.5088v130.048H342.016a38.5536 38.5536 0 0 0-34.816 38.2464c0.0512 19.8144 15.104 36.352 34.816 38.2464h131.584v130.5088A38.1952 38.1952 0 0 0 512 716.8c21.1968 0 38.4-17.0496 38.4-38.0416v-130.5088h131.584a38.5536 38.5536 0 0 0 34.816-38.2464 38.5536 38.5536 0 0 0-34.816-38.2464h-131.584v-130.048A38.656 38.656 0 0 0 511.7952 307.2z" fill={getIconColor(color, 0, '#096DD9')}/>
    </svg>);
};
Iconxinjian.defaultProps = {
    size: 18,
};
export default Iconxinjian;
//# sourceMappingURL=Iconxinjian.js.map