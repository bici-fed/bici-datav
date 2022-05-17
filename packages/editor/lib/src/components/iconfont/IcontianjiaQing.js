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
var IcontianjiaQing = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M512 64a448 448 0 1 1-0.0512 896.0512A448 448 0 0 1 512 64z m0 75.9808a372.0704 372.0704 0 0 0 0 744.0384 372.0704 372.0704 0 0 0 0-744.0384z m24.0128 180.0192c4.4032 0 7.9872 3.584 7.9872 7.9872v152.0128h152.0128c4.4032 0 7.9872 3.584 7.9872 7.9872v48.0256c0 4.4032-3.584 7.9872-7.9872 7.9872h-152.0128v152.0128c0 4.4032-3.584 7.9872-7.9872 7.9872H487.936a8.0384 8.0384 0 0 1-7.9872-7.9872v-152.0128H327.9872a8.0384 8.0384 0 0 1-7.9872-7.9872V487.936c0-4.4032 3.584-7.9872 7.9872-7.9872h152.0128V327.9872c0-4.4032 3.584-7.9872 7.9872-7.9872z" fill={getIconColor(color, 0, '#333333')}/>
    </svg>);
};
IcontianjiaQing.defaultProps = {
    size: 18,
};
export default IcontianjiaQing;
//# sourceMappingURL=IcontianjiaQing.js.map