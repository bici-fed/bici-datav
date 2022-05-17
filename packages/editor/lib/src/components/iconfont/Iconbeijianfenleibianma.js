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
var Iconbeijianfenleibianma = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1260 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M465.368615 14.808615h160.610462V997.218462h-160.689231V14.808615z m249.462154 0h107.126154V997.218462h-107.126154V14.808615z m458.988308 0h80.187077V997.218462h-80.187077V14.808615z m-891.195077 0h80.187077V997.218462H282.624V14.808615z m614.872615 0h187.313231V997.218462h-187.313231V14.808615zM6.301538 14.808615h187.313231V997.218462H6.301538V14.808615z" fill={getIconColor(color, 0, '#096DD9')}/>
    </svg>);
};
Iconbeijianfenleibianma.defaultProps = {
    size: 18,
};
export default Iconbeijianfenleibianma;
//# sourceMappingURL=Iconbeijianfenleibianma.js.map