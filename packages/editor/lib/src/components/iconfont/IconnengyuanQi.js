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
var IconnengyuanQi = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M386.112 17.792a9.024 9.024 0 0 1 13.504-8.224l46.464 27.36c63.68 37.568 114.624 91.456 151.296 160.512 44.352 83.136 64.576 159.52 60.416 227.264a6.624 6.624 0 0 0 2.24 5.408c1.696 1.568 3.616 1.792 4.864 1.664a7.04 7.04 0 0 0 4.608-2.24c23.744-26.432 40.48-53.312 49.6-79.648l14.624-41.952a9.088 9.088 0 0 1 14.624-3.712l32.736 30.016a390.912 390.912 0 0 1 126.912 288.128 389.44 389.44 0 0 1-116.096 277.76 392.192 392.192 0 0 1-125.888 84.032c-20.352 8.48-41.184 15.232-62.464 20.224l0.48-7.232c3.936-79.648-42.56-171.2-139.456-274.688 14.88 97.216-7.264 217.28-82.016 266.784l2.144 4.928a395.264 395.264 0 0 1-237.568-218.912 387.232 387.232 0 0 1-31.136-153.024c0-60.064 14.08-120 40.736-173.568a396.672 396.672 0 0 1 112.832-136.704 332.608 332.608 0 0 0 53.44-51.84 320.8 320.8 0 0 0 52.864-91.712c10.112-27.104 14.4-59.744 12.704-96.64z" fill={getIconColor(color, 0, '#F74B35')}/>
    </svg>);
};
IconnengyuanQi.defaultProps = {
    size: 18,
};
export default IconnengyuanQi;
//# sourceMappingURL=IconnengyuanQi.js.map