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
var IconcaidanWangluozhuangtai = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M512 696.064c47.104 0 89.792 19.072 120.704 49.92L512 866.752l-120.704-120.64A170.112 170.112 0 0 1 512 696.064z m0-170.688c94.272 0 179.584 38.208 241.344 99.968l-45.248 45.312A276.48 276.48 0 0 0 512 589.376a276.224 276.224 0 0 0-196.096 81.28l-45.248-45.312 5.824-5.696A340.16 340.16 0 0 1 512 525.44z m0-170.688c138.048 0 263.36 54.656 355.456 143.552l6.592 6.4-45.312 45.248A446.336 446.336 0 0 0 512 418.688a446.208 446.208 0 0 0-309.888 124.48l-6.912 6.72-45.184-45.248A510.4 510.4 0 0 1 512 354.688z m42.56-169.344c68.992 4.288 137.408 19.008 202.752 44.16l13.056 5.12 5.376 2.24 14.592 6.336 4.352 1.92c58.432 26.624 112.512 61.312 160.704 102.528l10.24 8.96c4.608 4.032 9.088 8.128 13.504 12.288l7.552 7.168 8 7.936-45.248 45.248A616.448 616.448 0 0 0 512 248.064c-166.4 0-322.112 65.92-437.44 181.12L29.312 384l9.984-9.792 8.96-8.512 4.224-3.84a684.032 684.032 0 0 1 169.6-113.408l14.72-6.72 11.584-4.928 8.704-3.52 8.64-3.456a683.52 683.52 0 0 1 224.256-45.44l10.944-0.256L512 184.064c5.888 0 20.096 0.448 42.56 1.28z" fill={getIconColor(color, 0, '#333333')}/>
    </svg>);
};
IconcaidanWangluozhuangtai.defaultProps = {
    size: 18,
};
export default IconcaidanWangluozhuangtai;
//# sourceMappingURL=IconcaidanWangluozhuangtai.js.map