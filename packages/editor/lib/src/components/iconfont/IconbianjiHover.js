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
var IconbianjiHover = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M257.728 752a40.448 40.448 0 0 0 5.952-0.512l168.192-29.44a9.792 9.792 0 0 0 5.312-2.816l423.936-423.936c3.84-3.84 3.84-10.24 0-14.08l-166.208-166.336a9.92 9.92 0 0 0-7.104-2.88 9.92 9.92 0 0 0-7.104 2.88L256.832 538.88a10.176 10.176 0 0 0-2.816 5.312l-29.504 168.192a33.92 33.92 0 0 0 33.216 39.68zM325.12 577.6l362.688-362.624 73.28 73.344-362.688 362.56-88.96 15.744 15.68-89.024z m554.88 258.368H144a32 32 0 0 0-32 32v36.032c0 4.416 3.584 8 8 8h784a8 8 0 0 0 8-8v-36.032a32 32 0 0 0-32-32z" fill={getIconColor(color, 0, '#096DD9')}/>
    </svg>);
};
IconbianjiHover.defaultProps = {
    size: 18,
};
export default IconbianjiHover;
//# sourceMappingURL=IconbianjiHover.js.map