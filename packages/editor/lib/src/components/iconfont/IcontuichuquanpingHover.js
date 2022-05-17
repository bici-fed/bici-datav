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
var IcontuichuquanpingHover = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M925.888 537.6c11.776 0 21.312 9.6 21.312 21.312v53.376c0 11.776-9.6 21.312-21.312 21.312H633.6v292.288c0 11.776-9.6 21.312-21.312 21.312h-53.376a21.312 21.312 0 0 1-21.312-21.312v-345.6c0-23.616 19.072-42.688 42.688-42.688h345.6z m-460.8-460.8c11.776 0 21.312 9.6 21.312 21.312v345.6a42.688 42.688 0 0 1-42.688 42.688h-345.6a21.312 21.312 0 0 1-21.312-21.312v-53.376c0-10.24 7.296-18.88 17.024-20.864l4.288-0.448H390.4V98.112c0-11.776 9.6-21.312 21.312-21.312h53.376z" fill={getIconColor(color, 0, '#096DD9')}/>
    </svg>);
};
IcontuichuquanpingHover.defaultProps = {
    size: 18,
};
export default IcontuichuquanpingHover;
//# sourceMappingURL=IcontuichuquanpingHover.js.map