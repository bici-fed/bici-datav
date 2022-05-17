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
var Iconzhexiantu1 = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1145 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M72.282353 0l0.216847 831.247059H903.529412v72.282353H48.429176c-26.599906 0-48.188235-21.564235-48.188235-48.188236L0 0h72.282353z m775.348706 512.915576l15.420235 18.480189a24.094118 24.094118 0 0 1-3.011765 33.948611l-193.307105 161.67153a24.094118 24.094118 0 0 1-24.335059 3.927341l-259.734589-103.098729-128.566211 107.291106a24.094118 24.094118 0 0 1-33.924518-3.059953l-15.420235-18.480189a24.094118 24.094118 0 0 1 3.035859-33.948611l150.564141-125.674918a24.094118 24.094118 0 0 1 24.335059-3.903247l259.6864 103.074635 171.309176-143.239529a24.094118 24.094118 0 0 1 33.924518 3.011764z m-1.831153-472.051952l19.082541 14.697411a24.094118 24.094118 0 0 1 4.433318 33.755859L654.083012 369.362824a24.094118 24.094118 0 0 1-22.81713 9.13167l-256.144564-39.996235-169.622589 251.132988a24.094118 24.094118 0 0 1-31.033223 7.926965l-2.409412-1.445647-19.974023-13.492706a24.094118 24.094118 0 0 1-6.481318-33.442635l186.753506-276.504095a24.094118 24.094118 0 0 1 23.708612-10.312282L614.159059 302.622118l197.812706-257.373365a24.094118 24.094118 0 0 1 33.804047-4.409224z" fill={getIconColor(color, 0, '#333333')}/>
    </svg>);
};
Iconzhexiantu1.defaultProps = {
    size: 18,
};
export default Iconzhexiantu1;
//# sourceMappingURL=Iconzhexiantu1.js.map