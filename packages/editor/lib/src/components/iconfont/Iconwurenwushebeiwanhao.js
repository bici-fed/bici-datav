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
var Iconwurenwushebeiwanhao = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill={getIconColor(color, 0, '#E0F0D9')}/>
      <path d="M512 93.090909a418.909091 418.909091 0 1 1 0 837.818182 418.909091 418.909091 0 0 1 0-837.818182zM381.858909 274.432c-31.278545 83.223273-84.898909 163.653818-141.312 214.481455 11.729455 16.197818 31.837091 53.620364 38.539636 69.818181 15.639273-14.522182 30.72-31.837091 45.800728-50.269091v283.741091h65.349818v-111.709091c15.080727 13.405091 34.629818 34.629818 45.242182 49.152 45.242182-41.890909 86.574545-101.655273 118.970182-169.239272v232.913454h65.908363V549.236364c30.161455 70.376727 69.259636 134.609455 112.826182 177.617454 11.170909-17.314909 33.512727-41.332364 49.710545-53.061818-53.061818-45.800727-101.655273-122.88-133.492363-202.193455h116.736V406.807273h-145.780364V280.576h-65.908363V406.807273H412.578909v64.791272h115.618909c-32.395636 79.313455-82.664727 156.951273-137.960727 202.193455V413.509818c22.341818-37.981091 41.890909-78.754909 57.530182-117.853091l-65.908364-21.224727z" fill={getIconColor(color, 1, '#1EC622')}/>
    </svg>);
};
Iconwurenwushebeiwanhao.defaultProps = {
    size: 18,
};
export default Iconwurenwushebeiwanhao;
//# sourceMappingURL=Iconwurenwushebeiwanhao.js.map