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
var Iconshijifankui = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M490.189927 53.927036v80.822291h-408.207181v808.222913h815.049121V549.30488h81.504912v420.767402c0 29.762263-24.369559 53.858774-54.404871 53.858773H54.336608A54.131822 54.131822 0 0 1 0 970.00402V107.854071c0-29.762263 24.369559-53.927036 54.336608-53.927035h435.853319z m295.643027-38.090236a54.74618 54.74618 0 0 1 76.658305-0.273048l145.261686 142.121631 3.413103 3.549627a53.517463 53.517463 0 0 1-3.071793 72.835629l-532.853721 530.191501a27.304828 27.304828 0 0 1-19.249904 7.9184h-184.30759a27.304828 27.304828 0 0 1-19.181642-7.9184 26.826994 26.826994 0 0 1-7.986662-19.045118V564.390798c0-7.099255 2.867007-13.993724 7.986662-19.045118L785.832954 15.8368z" fill={getIconColor(color, 0, '#096DD9')}/>
    </svg>);
};
Iconshijifankui.defaultProps = {
    size: 18,
};
export default Iconshijifankui;
//# sourceMappingURL=Iconshijifankui.js.map