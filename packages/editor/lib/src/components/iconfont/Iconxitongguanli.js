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
var Iconxitongguanli = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M570.88 128l0.064 65.28c45.44 8.32 87.488 26.176 124.16 51.328l34.56-34.56a16.832 16.832 0 0 1 23.744 0l71.488 71.488-46.272 46.336c25.472 36.736 43.52 78.976 51.968 124.608h48.576c9.28 0 16.832 7.616 16.832 16.896v101.12l-65.024 0.064a322.944 322.944 0 0 1-51.84 125.696l33.664 33.664c5.44 5.44 6.4 13.76 2.752 20.224l-2.752 3.584-71.36 71.424-45.44-45.44a322.176 322.176 0 0 1-125.056 51.904v47.552a16.832 16.832 0 0 1-12.992 16.384l-3.84 0.448H453.056v-64.384a322.176 322.176 0 0 1-125.312-52.096l-33.6 33.6-3.584 2.752a16.896 16.896 0 0 1-16.64 0l-3.584-2.752-71.424-71.552 45.632-45.696A322.944 322.944 0 0 1 193.28 571.52h-48.384a16.832 16.832 0 0 1-16.384-13.056L128 554.624v-101.12h65.216c8.384-45.952 26.432-88.448 51.968-125.376l-33.92-34.048a16.832 16.832 0 0 1 0-23.808l71.296-71.424 46.016 46.016a322.176 322.176 0 0 1 124.48-51.584v-48.448c0-9.28 7.552-16.832 16.832-16.832h101.056z m-58.368 177.152A206.72 206.72 0 0 0 305.984 512a206.72 206.72 0 0 0 206.528 206.848A206.72 206.72 0 0 0 719.104 512a206.72 206.72 0 0 0-206.592-206.848z" fill={getIconColor(color, 0, '#A6A6A6')}/>
    </svg>);
};
Iconxitongguanli.defaultProps = {
    size: 18,
};
export default Iconxitongguanli;
//# sourceMappingURL=Iconxitongguanli.js.map