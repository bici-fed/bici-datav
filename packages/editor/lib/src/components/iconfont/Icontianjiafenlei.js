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
var Icontianjiafenlei = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M449.3312 543.880533l189.508267 189.986134h132.5056l0.068266-114.688a40.482133 40.482133 0 0 1 19.524267-35.293867l5.461333-2.730667a40.413867 40.413867 0 0 1 44.6464 9.352534l157.696 157.218133a40.96 40.96 0 0 1 0 57.821867l-157.696 157.149866a40.96 40.96 0 0 1-69.632-28.672l-0.068266-97.757866H617.813333a51.2 51.2 0 0 1-36.386133-14.813867l-204.8-204.8a51.4048 51.4048 0 1 1 72.704-72.772267zM105.813333 477.866667c-31.266133 0-48.264533-14.336-50.858666-43.008L54.613333 426.666667c0-34.133333 17.066667-51.2 51.2-51.2h285.627734l190.0544-189.986134A51.2 51.2 0 0 1 617.813333 170.666667h153.531734L771.413333 55.978667a40.482133 40.482133 0 0 1 19.524267-35.293867l5.461333-2.730667A40.482133 40.482133 0 0 1 841.045333 27.306667l157.696 157.149866a40.96 40.96 0 0 1 0 57.890134l-157.696 157.218133a40.96 40.96 0 0 1-69.632-28.672L771.345067 273.066667H638.839467L459.434667 452.949333c-6.280533 14.609067-19.114667 22.801067-38.2976 24.576L413.013333 477.866667h-307.2z" fill={getIconColor(color, 0, '#096DD9')}/>
    </svg>);
};
Icontianjiafenlei.defaultProps = {
    size: 18,
};
export default Icontianjiafenlei;
//# sourceMappingURL=Icontianjiafenlei.js.map