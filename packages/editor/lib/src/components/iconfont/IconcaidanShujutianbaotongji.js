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
var IconcaidanShujutianbaotongji = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M896.448 170.688a42.24 42.24 0 0 1 42.24 42.24v598.144a42.24 42.24 0 0 1-42.24 42.24H127.552a42.24 42.24 0 0 1-42.24-42.24V212.928a42.24 42.24 0 0 1 42.24-42.24h768.896z m-21.76 64H149.312v554.624h725.376V234.688zM522.88 384a21.12 21.12 0 0 1 21.12 21.12v256.448a21.12 21.12 0 0 1-21.12 21.12h-21.76a21.12 21.12 0 0 1-21.12-21.12V405.12A21.12 21.12 0 0 1 501.12 384h21.76z m181.312 64a21.12 21.12 0 0 1 21.12 21.12v192.448a21.12 21.12 0 0 1-21.12 21.12h-21.76a21.12 21.12 0 0 1-21.12-21.12V469.12a21.12 21.12 0 0 1 21.12-21.12h21.76zM341.568 320a21.12 21.12 0 0 1 21.12 21.12v320.448a21.12 21.12 0 0 1-21.12 21.12h-21.76a21.12 21.12 0 0 1-21.12-21.12V341.12a21.12 21.12 0 0 1 21.12-21.12h21.76z" fill={getIconColor(color, 0, '#333333')}/>
    </svg>);
};
IconcaidanShujutianbaotongji.defaultProps = {
    size: 18,
};
export default IconcaidanShujutianbaotongji;
//# sourceMappingURL=IconcaidanShujutianbaotongji.js.map