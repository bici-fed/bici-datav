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
var Icontianjiaxiang = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M960 512a448 448 0 1 1-896.0512-0.0512A448 448 0 0 1 960 512z m-256 24.0128V487.936a8.0384 8.0384 0 0 0-7.9872-7.9872h-152.0128V327.9872a8.0384 8.0384 0 0 0-5.4784-7.5776l-2.56-0.4096h-47.9744a8.0384 8.0384 0 0 0-7.9872 7.9872v152.0128H327.9872a8.0384 8.0384 0 0 0-7.5776 5.4784l-0.4096 2.56v47.9744c0 4.4032 3.584 7.9872 7.9872 7.9872h152.0128v152.0128c0 3.5328 2.304 6.5024 5.4784 7.5776l2.56 0.4096h47.9744c4.4032 0 7.9872-3.584 7.9872-7.9872v-152.0128h152.0128a8.0384 8.0384 0 0 0 7.5776-5.4784l0.4096-2.56z" fill={getIconColor(color, 0, '#333333')}/>
    </svg>);
};
Icontianjiaxiang.defaultProps = {
    size: 18,
};
export default Icontianjiaxiang;
//# sourceMappingURL=Icontianjiaxiang.js.map