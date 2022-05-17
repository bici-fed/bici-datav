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
var Iconkeshihuakanban1 = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M961.088 936.128L787.2 762.432a436.416 436.416 0 0 0 73.216-117.44c23.04-54.464 34.752-112.384 34.752-172.032 0-59.52-11.712-117.568-34.752-172.032a438.784 438.784 0 0 0-94.72-140.352A440.64 440.64 0 0 0 453.376 31.168 441.92 441.92 0 0 0 60.864 269.568a38.208 38.208 0 1 0 67.84 35.2 364.672 364.672 0 0 1 324.544-197.184 365.824 365.824 0 0 1 365.44 365.376 365.632 365.632 0 0 1-365.312 365.312 364.48 364.48 0 0 1-324.672-197.568 38.208 38.208 0 1 0-67.84 35.2 443.968 443.968 0 0 0 159.744 172.608 440.96 440.96 0 0 0 232.768 66.24 438.848 438.848 0 0 0 279.04-99.2l174.592 174.592a38.336 38.336 0 0 0 54.208 0 38.4 38.4 0 0 0-0.128-54.016zM314.368 384.192l168.512 281.728a33.92 33.92 0 0 0 29.12 16.512c0.896 0 2.048 0 2.944-0.128a34.368 34.368 0 0 0 28.8-21.568l61.76-159.872h34.624a33.92 33.92 0 1 0 0-67.968H582.4a33.92 33.92 0 0 0-31.744 21.76l-45.12 116.736-161.088-269.44a33.92 33.92 0 0 0-57.92-0.64L185.536 460.8H86.848a33.92 33.92 0 1 0 0 67.968h117.376a33.92 33.92 0 0 0 28.672-15.872l81.472-128.64z" fill={getIconColor(color, 0, '#096DD9')}/>
    </svg>);
};
Iconkeshihuakanban1.defaultProps = {
    size: 18,
};
export default Iconkeshihuakanban1;
//# sourceMappingURL=Iconkeshihuakanban1.js.map