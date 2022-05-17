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
var Iconzhuzhuangtu = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M888.0128 792.0128H199.9872V167.936a8.0384 8.0384 0 0 0-7.9872-7.9872H135.9872a8.0384 8.0384 0 0 0-7.9872 7.9872V856.064c0 4.4032 3.584 7.9872 7.9872 7.9872h752.0256c4.4032 0 7.9872-3.584 7.9872-7.9872v-56.0128a8.0384 8.0384 0 0 0-7.9872-7.9872zM288 711.9872h56.0128c4.4032 0 7.9872-3.584 7.9872-7.9872v-144.0256a8.0384 8.0384 0 0 0-7.9872-7.9872H288a8.0384 8.0384 0 0 0-7.9872 7.9872v144.0256c0 4.4032 3.584 7.9872 7.9872 7.9872z m152.0128 0h56.0128c4.352 0 7.9872-3.584 7.9872-7.9872V384a8.0384 8.0384 0 0 0-7.9872-7.9872H440.0128a8.0384 8.0384 0 0 0-7.9872 7.9872v320c0 4.4032 3.584 7.9872 7.9872 7.9872z m152.0128 0h55.9616c4.4032 0 7.9872-3.584 7.9872-7.9872V461.9776a8.0384 8.0384 0 0 0-7.9872-7.9872h-56.0128a8.0384 8.0384 0 0 0-7.9872 7.9872v242.0224c0 4.4032 3.584 7.9872 7.9872 7.9872z m151.9616 0h56.0128c4.4032 0 7.9872-3.584 7.9872-7.9872V303.9744a8.0384 8.0384 0 0 0-7.9872-7.9872h-56.0128a8.0384 8.0384 0 0 0-7.9872 8.0384v399.9744c0 4.4032 3.584 7.9872 7.9872 7.9872z" fill={getIconColor(color, 0, '#333333')}/>
    </svg>);
};
Iconzhuzhuangtu.defaultProps = {
    size: 18,
};
export default Iconzhuzhuangtu;
//# sourceMappingURL=Iconzhuzhuangtu.js.map