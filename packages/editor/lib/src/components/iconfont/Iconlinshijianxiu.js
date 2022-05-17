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
var Iconlinshijianxiu = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill={getIconColor(color, 0, '#F7B500')}/>
      <path d="M512 93.090909a418.909091 418.909091 0 1 1 0 837.818182 418.909091 418.909091 0 0 1 0-837.818182z m244.084364 439.947636h-285.416728v260.282182h63.674182v-26.810182h154.717091v24.576h67.025455v-258.048z m-233.472-263.633454c-17.314909 73.728-48.593455 145.221818-91.601455 190.464v-181.527273H365.661091v509.393455H431.010909v-318.929455c16.756364 9.495273 40.215273 25.134545 51.944727 35.188364 24.576-28.485818 47.476364-65.908364 67.025455-107.799273h216.715636V332.520727h-192.698182c5.585455-16.756364 10.612364-32.954182 15.080728-50.269091l-66.466909-12.846545z m-191.581091 64.232727h-61.44v396.008727h61.44V333.637818z m252.462545 263.074909v108.357818H534.341818V596.712727h49.152z m105.565091 0v108.357818h-45.242182V596.712727h45.242182z m-88.250182-196.608l-43.008 39.656728c33.512727 26.251636 75.403636 64.232727 96.628364 85.457454l44.125091-47.476364a1030.795636 1030.795636 0 0 0-97.745455-77.637818z" fill={getIconColor(color, 1, '#FFFFFF')}/>
    </svg>);
};
Iconlinshijianxiu.defaultProps = {
    size: 18,
};
export default Iconlinshijianxiu;
//# sourceMappingURL=Iconlinshijianxiu.js.map