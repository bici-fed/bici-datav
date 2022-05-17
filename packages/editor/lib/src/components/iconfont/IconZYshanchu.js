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
var IconZYshanchu = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M512.512 81.009778a428.657778 428.657778 0 0 1 304.753778 126.293333 428.657778 428.657778 0 0 1 126.293333 304.753778 428.657778 428.657778 0 0 1-126.293333 304.753778 428.657778 428.657778 0 0 1-304.753778 126.293333 428.657778 428.657778 0 0 1-304.753778-126.293333A428.657778 428.657778 0 0 1 81.464889 512a428.657778 428.657778 0 0 1 126.293333-304.753778 428.657778 428.657778 0 0 1 304.753778-126.293333m0-66.673778a497.777778 497.777778 0 1 0 0.056889 995.555556 497.777778 497.777778 0 0 0-0.056889-995.555556zM234.723556 478.72h555.52v66.673778H234.723556V478.72z" fill={getIconColor(color, 0, '#E02020')}/>
    </svg>);
};
IconZYshanchu.defaultProps = {
    size: 18,
};
export default IconZYshanchu;
//# sourceMappingURL=IconZYshanchu.js.map