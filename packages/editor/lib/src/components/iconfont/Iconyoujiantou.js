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
var Iconyoujiantou = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M512 512m512 0a512 512 0 1 0-1024 0 512 512 0 1 0 1024 0Z" fill={getIconColor(color, 0, '#EBF5FF')}/>
      <path d="M555.598769 743.975385a14.769231 14.769231 0 0 1 0-20.873847l199.561846-199.522461a10.24 10.24 0 0 0 0-14.493539l-199.561846-199.56184601a14.769231 14.769231 0 1 1 20.873846-20.87384599l199.561847 199.522462a39.778462 39.778462 0 0 1 0 56.280615l-199.522462 199.522462a14.769231 14.769231 0 0 1-20.873846 0z m5.632-198.104616a29.538462 29.538462 0 1 1 0-59.076923 29.538462 29.538462 0 0 1 0 59.076923z m-295.384615 0a29.538462 29.538462 0 1 1 0-59.076923 29.538462 29.538462 0 0 1 0 59.076923z m196.923077 0a29.538462 29.538462 0 1 1 0-59.076923 29.538462 29.538462 0 0 1 0 59.076923z m-98.461539 0a29.538462 29.538462 0 1 1 0-59.07692301 29.538462 29.538462 0 0 1 0 59.07692301z" fill={getIconColor(color, 1, '#096DD9')}/>
    </svg>);
};
Iconyoujiantou.defaultProps = {
    size: 18,
};
export default Iconyoujiantou;
//# sourceMappingURL=Iconyoujiantou.js.map