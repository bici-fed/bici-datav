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
var Iconbingtu = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M864 517.9904H506.0096V160a8.0384 8.0384 0 0 0-7.9872-7.9872h-26.0096a398.4384 398.4384 0 0 0-282.8288 117.0944 398.1824 398.1824 0 0 0-85.7088 127.0784 397.6192 397.6192 0 0 0-31.488 155.8016 398.4384 398.4384 0 0 0 117.0944 282.8288 398.1824 398.1824 0 0 0 127.1296 85.7088 397.6192 397.6192 0 0 0 155.8016 31.488 398.4384 398.4384 0 0 0 282.7776-117.0944 398.1824 398.1824 0 0 0 85.7088-127.1296 397.6192 397.6192 0 0 0 31.488-155.8016v-26.0096a8.0384 8.0384 0 0 0-7.9872-7.9872z m-158.3104 269.824a331.6224 331.6224 0 0 1-235.264 96.2048 329.8816 329.8816 0 0 1-233.216-97.2288 329.8816 329.8816 0 0 1-97.2288-234.8032c0-88.6784 34.5088-172.0832 97.2288-234.8032A329.1136 329.1136 0 0 1 438.016 221.696v364.288h364.288a329.3184 329.3184 0 0 1-96.6144 201.8304z m246.272-325.4272l-2.56-28.16a397.824 397.824 0 0 0-115.2-244.6336 399.36 399.36 0 0 0-245.248-114.9952l-28.2624-2.56a7.936 7.936 0 0 0-8.704 7.8848v384.1024c0 4.352 3.584 7.9872 7.9872 7.9872l384-1.024a7.9872 7.9872 0 0 0 8.0384-8.6016z m-332.1856-58.1632V147.6096a332.288 332.288 0 0 1 166.4 89.8048 330.1376 330.1376 0 0 1 90.0096 166.0928l-256.4096 0.7168z" fill={getIconColor(color, 0, '#333333')}/>
    </svg>);
};
Iconbingtu.defaultProps = {
    size: 18,
};
export default Iconbingtu;
//# sourceMappingURL=Iconbingtu.js.map