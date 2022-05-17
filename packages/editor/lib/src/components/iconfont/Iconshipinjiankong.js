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
var Iconshipinjiankong = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M1003.31102 528.384v383.937306h-84.114285v-151.301224h-192.491102a94.500571 94.500571 0 0 0-12.49698-111.260735h205.00898v-121.375347h84.093387zM46.330776 645.705143l150.193632 158.908081-47.81453 22.235429c-19.414204 9.299592-36.466939 12.747755-49.862531-1.400163l-78.785306-83.382857c-13.374694-14.168816-9.048816-30.197551 1.400163-49.904327l24.868572-46.456163z m512.668734-526.628572c8.902531 0.20898 17.345306 3.970612 23.510204 10.44898l152.450613 160.496327a33.58302 33.58302 0 0 1-1.191184 47.521959l-205.259755 195.040653 78.074775 94.124408a95.106612 95.106612 0 0 0-49.653551 49.862531l-79.370449-95.64996-213.117387 202.501225a33.58302 33.58302 0 0 1-47.501062-1.191184L64.428408 621.714286a33.58302 33.58302 0 0 1 1.253878-47.521959L534.987755 128.313469a33.58302 33.58302 0 0 1 24.011755-9.257796zM644.284082 649.717551a64.156735 64.156735 0 1 1 0 128.334367 64.156735 64.156735 0 0 1 0-128.313469z" fill={getIconColor(color, 0, '#CCCCCC')}/>
    </svg>);
};
Iconshipinjiankong.defaultProps = {
    size: 18,
};
export default Iconshipinjiankong;
//# sourceMappingURL=Iconshipinjiankong.js.map