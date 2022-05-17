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
var Iconchakancaozuojilu = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M512 1024A512 512 0 1 1 512 0a512 512 0 0 1 0 1024z m56.704-538.88V288.384a39.36 39.36 0 0 0-39.36-39.424H411.2v324.928c0 21.76 17.6 39.36 39.36 39.36h118.144v-0.64h195.84c21.76 0 39.36-17.6 39.36-39.36V455.104H606.976c-18.56 0-34.048 12.8-38.272 30.016z" fill={getIconColor(color, 0, '#096DD9')}/>
    </svg>);
};
Iconchakancaozuojilu.defaultProps = {
    size: 18,
};
export default Iconchakancaozuojilu;
//# sourceMappingURL=Iconchakancaozuojilu.js.map