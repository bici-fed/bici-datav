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
var Iconfenzhijiedian = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1100 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M451.095782 541.468972l193.876881 194.348409h135.643087V618.485325a41.415937 41.415937 0 0 1 19.254088-35.679005l6.365638-3.300701c15.717623-6.444225 33.871478-2.671996 45.659695 9.666339l161.341401 160.791284a41.887466 41.887466 0 0 1 0 59.255439l-161.341401 160.791284a41.887466 41.887466 0 0 1-71.279421-29.313367v-100.121259h-157.176231a52.418273 52.418273 0 0 1-37.172178-15.167507L376.672837 615.891917a52.654037 52.654037 0 0 1 74.422945-74.422945zM99.571142 473.883192c-31.749599 0-49.117572-14.460213-51.946744-43.302051L47.152869 421.464919c0-34.893123 17.446562-52.339685 52.418273-52.339685h292.269201L586.267341 174.619649A52.418273 52.418273 0 0 1 623.439519 159.530731h157.176231V42.120086a41.415937 41.415937 0 0 1 19.254088-35.679004l6.365638-3.300701c15.717623-6.522814 33.871478-2.671996 45.659695 9.58775l161.341401 160.869872a41.887466 41.887466 0 0 1 0 59.176851L851.895171 393.723315a41.887466 41.887466 0 0 1-71.279421-29.313367V264.288689H644.972663L461.469414 448.420643c-6.365637 14.774566-19.254088 23.104906-38.508177 24.991021L413.923604 473.883192h-314.352462z" fill={getIconColor(color, 0, '#515151')}/>
    </svg>);
};
Iconfenzhijiedian.defaultProps = {
    size: 18,
};
export default Iconfenzhijiedian;
//# sourceMappingURL=Iconfenzhijiedian.js.map