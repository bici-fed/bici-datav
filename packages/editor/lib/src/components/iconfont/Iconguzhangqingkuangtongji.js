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
var Iconguzhangqingkuangtongji = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M444.905378 30.318293a54.301993 54.301993 0 0 1 60.634028 53.726354v392.202383c0 23.02558 18.420464 41.446044 41.446044 41.446045h392.202384c33.003332 0 58.33147 28.398216 52.958834 59.866508a490.700699 490.700699 0 0 1-510.400362 430.578351C229.999963 996.625144 25.839818 792.464999 14.327028 540.718655A491.851978 491.851978 0 0 1 444.905378 30.318293z m259.421537 684.627252H337.45267a37.224688 37.224688 0 0 0-36.840928 38.375967c0 21.490542 16.885426 38.375967 36.840928 38.375967h366.874245a37.736368 37.736368 0 0 0 36.840929-38.375967 37.736368 37.736368 0 0 0-36.840929-38.375967zM590.030493 0.001279l6.843715 0.38376a492.043858 492.043858 0 0 1 426.740753 426.740753 54.301993 54.301993 0 0 1-53.726354 60.634028H577.686224a41.254165 41.254165 0 0 1-41.446044-41.446044V54.111393c0-32.235812 28.398216-57.563951 60.634028-53.726354z" fill={getIconColor(color, 0, '#096DD9')}/>
    </svg>);
};
Iconguzhangqingkuangtongji.defaultProps = {
    size: 18,
};
export default Iconguzhangqingkuangtongji;
//# sourceMappingURL=Iconguzhangqingkuangtongji.js.map