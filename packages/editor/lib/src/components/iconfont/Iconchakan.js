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
var Iconchakan = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M854.5792 288.6144l-215.1936-215.1936a31.9488 31.9488 0 0 0-22.5792-9.4208H192a31.9488 31.9488 0 0 0-32 32v832c0 17.7152 14.336 32 32 32h640c17.7152 0 32-14.336 32-32V311.296a32.1536 32.1536 0 0 0-9.4208-22.6816z m-64.3584 37.376h-188.2112V137.7792l188.2112 188.2112z m1.792 562.0224H231.936V135.9872h302.0288v216.0128c0 23.1936 18.7904 41.984 41.984 41.984h216.0128v494.0288z m-263.936-416h-32.1536a11.8784 11.8784 0 0 0-11.6224 9.0624l-49.664 198.912-46.1312-198.656a12.0832 12.0832 0 0 0-11.7248-9.3184h-35.3792a12.032 12.032 0 0 0-11.6224 15.104l74.24 275.968a12.0832 12.0832 0 0 0 11.5712 8.9088h32c5.4272 0 10.24-3.584 11.6224-8.9088L512 566.1184l52.7872 196.9664a12.0832 12.0832 0 0 0 11.6224 8.9088h31.744c5.4272 0 10.24-3.584 11.6224-8.9088l74.4448-275.968a12.032 12.032 0 0 0-11.6224-15.104h-35.584a12.0832 12.0832 0 0 0-11.7248 9.2672l-45.7728 199.168-49.8176-199.3728a11.8784 11.8784 0 0 0-11.6224-9.0624z" fill={getIconColor(color, 0, '#333333')}/>
    </svg>);
};
Iconchakan.defaultProps = {
    size: 18,
};
export default Iconchakan;
//# sourceMappingURL=Iconchakan.js.map