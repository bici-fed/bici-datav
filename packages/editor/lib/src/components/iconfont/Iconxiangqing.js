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
var Iconxiangqing = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1365 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M1310.122667 397.056a759.722667 759.722667 0 0 0-127.744-178.688 720.981333 720.981333 0 0 0-1033.813334 0A759.722667 759.722667 0 0 0 20.821333 397.056a191.146667 191.146667 0 0 0 0 173.568c33.706667 65.450667 76.8 125.696 127.744 178.773333a720.981333 720.981333 0 0 0 1033.813334 0 759.722667 759.722667 0 0 0 127.744-178.773333 191.146667 191.146667 0 0 0 0-173.568zM665.514667 703.317333a219.392 219.392 0 1 1 0-438.869333 219.392 219.392 0 0 1 0 438.869333z" fill={getIconColor(color, 0, '#096DD9')}/>
    </svg>);
};
Iconxiangqing.defaultProps = {
    size: 18,
};
export default Iconxiangqing;
//# sourceMappingURL=Iconxiangqing.js.map