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
var Iconxinzengyibiao = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M512 0a512.576 512.576 0 0 1 512 512 512 512 0 1 1-512-512z m0 111.424a400.576 400.576 0 0 0 0 801.152A401.152 401.152 0 0 0 912.576 512 400.576 400.576 0 0 0 512 111.424z m11.712 177.728c30.72 0 55.68 24.96 55.68 55.68V456.32h111.424a55.68 55.68 0 1 1 0 111.488h-111.36v111.36a55.68 55.68 0 1 1-111.488 0v-111.36h-111.36a55.68 55.68 0 1 1 0-111.488h111.36V344.96c0-30.784 24.96-55.744 55.68-55.744z" fill={getIconColor(color, 0, '#096DD9')}/>
    </svg>);
};
Iconxinzengyibiao.defaultProps = {
    size: 18,
};
export default Iconxinzengyibiao;
//# sourceMappingURL=Iconxinzengyibiao.js.map