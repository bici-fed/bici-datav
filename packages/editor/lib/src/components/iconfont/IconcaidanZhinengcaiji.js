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
var IconcaidanZhinengcaiji = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M689.92 85.312c12.096 0 23.68 5.248 31.68 14.4l120.704 137.28a43.008 43.008 0 0 1 11.008 28.736v630.72a42.24 42.24 0 0 1-42.24 42.24H212.928a42.24 42.24 0 0 1-42.24-42.24V265.728c0-11.712 4.736-22.272 12.352-29.888l120.192-136.192a42.24 42.24 0 0 1 31.68-14.336h354.944z m99.392 202.176H234.688v587.2l186.432-0.064v-156.096H330.432a10.56 10.56 0 0 1-9.472-15.296l1.984-2.688L511.872 512l190.912 188.48a10.56 10.56 0 0 1-4.032 17.536l-3.328 0.512H602.816l-0.064 156.096h186.56V287.552zM512.064 587.136l-78.272 78.08h40.704v209.408h74.88l0.128-209.408h41.6l-79.04-78.08zM704.192 384a21.12 21.12 0 0 1 21.12 21.12v21.76a21.12 21.12 0 0 1-21.12 21.12H319.808a21.12 21.12 0 0 1-21.12-21.12v-21.76a21.12 21.12 0 0 1 21.12-21.12h384.384z m-25.92-234.688H346.56l-66.56 74.112h464.448l-66.176-74.112z" fill={getIconColor(color, 0, '#333333')}/>
    </svg>);
};
IconcaidanZhinengcaiji.defaultProps = {
    size: 18,
};
export default IconcaidanZhinengcaiji;
//# sourceMappingURL=IconcaidanZhinengcaiji.js.map