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
var Icondaoruyibiao = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M773.824 657.28c27.84 0 50.56 22.72 50.56 50.56v151.68a152.128 152.128 0 0 1-151.68 151.68h-508.8a152.128 152.128 0 0 1-151.68-151.68V151.68A152.128 152.128 0 0 1 163.968 0h508.8a152.128 152.128 0 0 1 151.68 151.68v151.68c0 27.776-22.72 50.56-50.56 50.56a50.688 50.688 0 0 1-50.56-50.56V151.68a50.688 50.688 0 0 0-50.56-50.56h-508.8a50.688 50.688 0 0 0-50.56 50.56v707.84c0 27.776 22.784 50.56 50.56 50.56h508.8c27.84 0 50.56-22.784 50.56-50.56v-151.68c0-27.84 22.784-50.56 50.56-50.56zM224.896 535.936c1.92 1.92 3.2 3.776 3.84 4.416l202.24 202.24a52.288 52.288 0 0 0 35.968 14.528c13.312 0 25.92-4.48 36.032-14.528a50.752 50.752 0 0 0 0-71.424L387.328 555.52h585.856c27.776 0 50.56-22.784 50.56-50.56a50.688 50.688 0 0 0-50.56-50.56H386.688L502.4 338.752a50.752 50.752 0 0 0 0-71.424 50.752 50.752 0 0 0-71.36 0l-202.24 202.24c-2.56 1.92-4.48 5.056-6.4 7.552l-1.856 3.84c-0.64 1.92-1.92 3.136-2.56 5.056-0.64 1.92-0.64 3.136-1.216 5.056-0.64 1.92-1.28 3.136-1.28 4.416a51.072 51.072 0 0 0 0 19.584c0 1.92 0.64 3.2 1.28 4.416 0.64 1.92 1.28 3.2 1.92 5.056 0.64 1.92 1.92 3.2 2.56 5.056l1.856 3.84v0.64l1.92 1.856z" fill={getIconColor(color, 0, '#096DD9')}/>
    </svg>);
};
Icondaoruyibiao.defaultProps = {
    size: 18,
};
export default Icondaoruyibiao;
//# sourceMappingURL=Icondaoruyibiao.js.map