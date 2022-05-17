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
var Iconjiankangfengxianxiang = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M511.488 1013.248a27.072 27.072 0 0 1-15.36-4.608C371.712 933.376 281.6 870.912 215.04 790.528c-76.8-92.16-114.176-199.68-118.272-337.92v-2.56c0-7.68-0.512-14.848-0.512-22.016 0-7.168 0-14.848 0.512-22.016V263.68c0-16.384 13.312-30.208 30.208-30.208a413.248 413.248 0 0 0 358.4-208.384c5.12-9.216 15.36-15.36 26.112-15.36 10.752 0 20.992 5.632 26.112 15.36a414.08 414.08 0 0 0 358.912 208.384c16.384 0 30.208 13.312 30.208 30.208v188.928c0 2.048 0 4.096-0.512 5.632-10.24 292.864-172.032 413.184-398.848 550.912a34.816 34.816 0 0 1-15.872 4.096zM157.184 451.584c3.584 123.904 36.864 219.136 104.448 300.544 58.368 70.656 139.776 128 250.368 195.584 209.92-128 347.136-236.032 354.816-496.64 0-1.536 0-2.56 0.512-4.096V292.352a474.816 474.816 0 0 1-354.816-197.12 478.464 478.464 0 0 1-355.328 197.12V407.04c0 7.168-0.512 14.336-0.512 20.992 0 7.168 0 13.824 0.512 20.992v2.56z" fill={getIconColor(color, 0, '#096DD9')}/>
      <path d="M522.752 773.632A26.752 26.752 0 0 1 512 771.584a30.72 30.72 0 0 1-17.408-38.912l68.096-175.616H438.784a29.696 29.696 0 0 1-24.576-12.8 29.696 29.696 0 0 1-3.584-27.648l72.704-204.8a29.888 29.888 0 0 1 38.4-18.432 29.888 29.888 0 0 1 18.432 38.4l-58.88 165.376h125.44a29.44 29.44 0 0 1 24.576 13.312 29.568 29.568 0 0 1 3.072 27.648L550.4 754.688a28.8 28.8 0 0 1-27.648 18.944z" fill={getIconColor(color, 1, '#096DD9')}/>
    </svg>);
};
Iconjiankangfengxianxiang.defaultProps = {
    size: 18,
};
export default Iconjiankangfengxianxiang;
//# sourceMappingURL=Iconjiankangfengxianxiang.js.map