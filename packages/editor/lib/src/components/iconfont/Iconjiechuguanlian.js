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
var Iconjiechuguanlian = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M556.982825 747.081341L464.457177 839.533846a222.500412 222.500412 0 0 1-158.354173 65.609096 222.646698 222.646698 0 0 1-158.354172-65.609096 224.25584 224.25584 0 0 1 0-316.708345l92.452505-92.452506-58.14853-58.221672-92.525648 92.525648a306.614638 306.614638 0 0 0 0 433.078548A304.420354 304.420354 0 0 0 306.103004 987.428598a304.274068 304.274068 0 0 0 216.502703-89.673079l92.525648-92.525648-58.14853-58.14853zM430.080059 240.347988l92.525648-92.452505a222.500412 222.500412 0 0 1 158.354172-65.609096c59.830814 0 116.077631 23.259412 158.354173 65.609096a224.25584 224.25584 0 0 1 0 316.708345l-92.452505 92.452506 58.148529 58.221672 92.452506-92.525648a306.614638 306.614638 0 0 0 0-433.078548A304.274068 304.274068 0 0 0 681.033022 0.000731a304.200926 304.200926 0 0 0-216.502702 89.673079L371.931529 182.199458l58.14853 58.14853z m392.557433 623.688698a40.959971 40.959971 0 0 1-29.110836-12.068563l-658.285244-658.285244a41.106256 41.106256 0 1 1 58.221673-58.221673l658.285244 658.285244a41.106256 41.106256 0 0 1-29.110837 70.217093z" fill={getIconColor(color, 0, '#E02020')}/>
    </svg>);
};
Iconjiechuguanlian.defaultProps = {
    size: 18,
};
export default Iconjiechuguanlian;
//# sourceMappingURL=Iconjiechuguanlian.js.map