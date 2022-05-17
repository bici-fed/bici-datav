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
var IconquanpingxianshiHover = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M588.8 98.112v53.376c0 11.776-9.6 21.312-21.312 21.312H172.8v394.688c0 11.776-9.6 21.312-21.312 21.312h-53.376a21.312 21.312 0 0 1-21.312-21.312v-448c0-23.616 19.072-42.688 42.688-42.688h448c11.776 0 21.312 9.6 21.312 21.312zM435.2 925.888v-53.376a21.312 21.312 0 0 1 21.312-21.312H851.2V456.512c0-11.776 9.6-21.312 21.312-21.312h53.376c11.776 0 21.312 9.6 21.312 21.312v448a42.688 42.688 0 0 1-42.688 42.688h-448a21.312 21.312 0 0 1-21.312-21.312z" fill={getIconColor(color, 0, '#096DD9')}/>
    </svg>);
};
IconquanpingxianshiHover.defaultProps = {
    size: 18,
};
export default IconquanpingxianshiHover;
//# sourceMappingURL=IconquanpingxianshiHover.js.map