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
var Iconweiguanzhu = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M512 52.337778c14.904889 0 28.672 7.395556 36.977778 19.512889l3.185778 5.461333 124.302222 251.790222 277.845333 40.391111a44.885333 44.885333 0 0 1 29.184 71.736889l-4.152889 4.778667-201.102222 195.925333 47.445333 276.764445a44.942222 44.942222 0 0 1-58.311111 50.062222l-6.712889-2.844445-248.547555-130.730666-248.490667 130.673778a44.714667 44.714667 0 0 1-65.649778-40.846223l0.625778-6.257777 47.274667-276.821334L44.828444 446.008889a44.942222 44.942222 0 0 1 18.659556-75.150222l6.200889-1.365334 277.845333-40.391111 124.302222-251.790222A44.885333 44.885333 0 0 1 512 52.280889z m126.691556 328.760889L512 124.472889l-126.691556 256.568889-283.363555 41.187555 205.084444 199.850667-48.298666 282.055111 253.383111-133.233778 253.326222 133.233778-48.355556-282.055111 205.027556-199.793778-283.420444-41.187555z" fill={getIconColor(color, 0, '#F7B500')}/>
    </svg>);
};
Iconweiguanzhu.defaultProps = {
    size: 18,
};
export default Iconweiguanzhu;
//# sourceMappingURL=Iconweiguanzhu.js.map