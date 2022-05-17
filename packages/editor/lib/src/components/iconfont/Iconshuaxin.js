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
var Iconshuaxin = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M102.6048 480.802133a386.184533 386.184533 0 0 1 113.186133-264.874666 385.024 385.024 0 0 1 273.749334-113.390934 384.068267 384.068267 0 0 1 273.408 113.4592c11.127467 11.127467 21.572267 22.9376 31.266133 35.293867l-67.720533 52.906667a9.0112 9.0112 0 0 0 3.413333 15.837866l197.632 48.401067a9.0112 9.0112 0 0 0 11.127467-8.669867l0.887466-203.502933a8.942933 8.942933 0 0 0-14.472533-7.099733l-63.488 49.5616A472.405333 472.405333 0 0 0 17.066667 480.324267a9.0112 9.0112 0 0 0 9.0112 9.216h67.515733c4.9152 0 8.874667-3.8912 9.0112-8.738134z m850.466133 8.738134h-67.515733a9.0112 9.0112 0 0 0-9.0112 8.8064 384.955733 384.955733 0 0 1-113.186133 264.874666 385.2288 385.2288 0 0 1-273.681067 113.322667 385.024 385.024 0 0 1-304.878933-148.6848l67.720533-52.906667a9.0112 9.0112 0 0 0-3.413333-15.837866L51.541333 610.7136a9.0112 9.0112 0 0 0-11.127466 8.669867L39.594667 823.022933c0 7.509333 8.669867 11.810133 14.472533 7.099734l63.488-49.629867a472.405333 472.405333 0 0 0 844.526933-281.668267 9.0112 9.0112 0 0 0-9.0112-9.284266z" fill={getIconColor(color, 0, '#096DD9')}/>
    </svg>);
};
Iconshuaxin.defaultProps = {
    size: 18,
};
export default Iconshuaxin;
//# sourceMappingURL=Iconshuaxin.js.map