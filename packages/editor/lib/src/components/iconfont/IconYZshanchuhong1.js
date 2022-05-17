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
var IconYZshanchuhong1 = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M805.083429 1001.691429H219.428571c-49.225143 0-93.110857-42.934857-97.060571-96.109715V172.690286H902.582857l0.512 731.428571v1.462857c-4.388571 53.174857-48.274286 96.109714-98.011428 96.109715z m-610.011429-100.498286c1.901714 15.140571 14.628571 27.355429 24.356571 27.355428h586.093715c9.801143 0 22.454857-12.214857 24.429714-27.355428l-1.024-655.36H195.072v655.36zM60.928 172.690286h902.144c19.968 0 36.571429 16.603429 36.571429 36.571428 0 20.041143-16.603429 36.571429-36.571429 36.571429H60.928a36.864 36.864 0 0 1-36.571429-36.571429c0-19.968 16.603429-36.571429 36.571429-36.571428z m292.571429-146.285715h317.001142c19.968 0 36.571429 16.603429 36.571429 36.571429 0 20.041143-16.603429 36.571429-36.571429 36.571429H353.499429a36.864 36.864 0 0 1-36.571429-36.571429c0-19.968 16.603429-36.571429 36.571429-36.571429z m109.714285 475.428572v170.715428c0 19.968-16.530286 36.571429-36.571428 36.571429a36.864 36.864 0 0 1-36.571429-36.571429V501.76c0-19.968 16.603429-36.571429 36.571429-36.571429 20.041143 0 36.571429 16.603429 36.571428 36.571429z m170.715429 0v170.715428c0 19.968-16.603429 36.571429-36.571429 36.571429a36.864 36.864 0 0 1-36.571428-36.571429V501.76c0-19.968 16.530286-36.571429 36.571428-36.571429 19.968 0 36.571429 16.603429 36.571429 36.571429z" fill={getIconColor(color, 0, '#333333')}/>
    </svg>);
};
IconYZshanchuhong1.defaultProps = {
    size: 18,
};
export default IconYZshanchuhong1;
//# sourceMappingURL=IconYZshanchuhong1.js.map