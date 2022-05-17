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
var IconmeiqiTianranqi = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M912.298667 545.28a562.816 562.816 0 0 0-24.490667-129.152c-19.498667-60.8-48.64-118.784-82.048-163.413333a29.013333 29.013333 0 0 0-39.466667-6.272 26.368 26.368 0 0 0-6.485333 37.845333c29.909333 39.978667 56.149333 92.458667 73.984 147.797333 11.477333 35.712 19.114667 76.16 22.101333 117.034667 10.88 148.821333-52.992 270.464-176.426666 339.413333-20.224-159.488-149.162667-211.541333-155.093334-213.888a29.354667 29.354667 0 0 0-24.405333 1.450667c-112.213333 59.818667-144.938667 160.128-154.453333 216.277333-111.061333-56.064-178.56-161.621333-178.56-283.306666 0-81.92 42.496-157.866667 130.005333-232.021334 11.648-9.856 23.466667-19.584 35.328-29.269333 64.256-52.608 130.773333-106.965333 164.266667-189.738667 3.669333-8.96 6.826667-17.024 9.514666-24.32 59.178667 39.936 187.306667 147.754667 228.864 354.048 2.986667 14.72 17.877333 24.32 33.109334 21.504 15.36-2.816 25.386667-17.066667 22.4-31.744C733.013333 192.384 526.506667 79.786667 503.04 67.84l-2.474667-1.237333a28.885333 28.885333 0 0 0-37.546666 12.544 26.624 26.624 0 0 0-2.944 11.776c-2.645333 9.984-13.653333 40.96-16.170667 47.445333-28.373333 70.058667-86.613333 117.674667-148.309333 168.106667a2891.093333 2891.093333 0 0 0-36.096 29.909333c-98.901333 83.925333-149.077333 175.701333-149.077334 272.725333 0 156.586667 95.488 290.346667 249.173334 349.013334a29.098667 29.098667 0 0 0 26.453333-2.816 26.752 26.752 0 0 0 12.288-22.613334c0-5.546667 0.426667-131.626667 116.48-202.026666 30.677333 16.896 110.805333 73.216 110.805333 201.045333a26.88 26.88 0 0 0 12.928 22.784c8.106667 4.992 18.261333 5.76 27.008 1.92 167.978667-73.045333 260.266667-226.773333 246.784-411.093333M474.794667 116.693333" fill={getIconColor(color, 0, '#333333')}/>
    </svg>);
};
IconmeiqiTianranqi.defaultProps = {
    size: 18,
};
export default IconmeiqiTianranqi;
//# sourceMappingURL=IconmeiqiTianranqi.js.map