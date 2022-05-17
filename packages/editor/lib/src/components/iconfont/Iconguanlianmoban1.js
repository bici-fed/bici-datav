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
var Iconguanlianmoban1 = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M577.53292 774.758364l-95.845889 95.914155a230.740103 230.740103 0 0 1-164.248724 67.993237 230.876635 230.876635 0 0 1-164.248724-67.993237 232.515027 232.515027 0 0 1 0-328.497448L249.172004 446.260916l-60.347411-60.347412L92.842172 481.82766a317.984437 317.984437 0 0 0 0 449.192271A315.663383 315.663383 0 0 0 317.438307 1023.998635c84.855014 0 164.521789-33.04089 224.596135-92.978704l95.914156-95.914156-60.347412-60.347411zM446.188554 249.1761L542.034442 153.398478a230.740103 230.740103 0 0 1 164.180458-68.061504 230.740103 230.740103 0 0 1 164.248724 67.993238 232.583293 232.583293 0 0 1 0 328.497448l-95.845889 95.914155 60.279146 60.279145 95.914155-95.845889a317.984437 317.984437 0 0 0 0-449.192271A315.526851 315.526851 0 0 0 706.2149 0.004096a315.390318 315.390318 0 0 0-224.596135 93.04697L385.841142 188.896955l60.347412 60.347412z m295.866155 65.74045a42.529907 42.529907 0 0 1-12.561 30.105439l-393.009104 393.07737a42.666439 42.666439 0 1 1-60.347411-60.347411l393.07737-393.009104a42.666439 42.666439 0 0 1 72.840145 30.173706z" fill={getIconColor(color, 0, '#096DD9')}/>
    </svg>);
};
Iconguanlianmoban1.defaultProps = {
    size: 18,
};
export default Iconguanlianmoban1;
//# sourceMappingURL=Iconguanlianmoban1.js.map