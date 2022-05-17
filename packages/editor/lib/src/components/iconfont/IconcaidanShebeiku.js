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
var IconcaidanShebeiku = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M768 341.312l-0.064 128h85.376c23.616 0 42.688 19.136 42.688 42.688v298.688a42.688 42.688 0 0 1-42.688 42.624H170.688A42.688 42.688 0 0 1 128 810.688V512c0-23.552 19.072-42.688 42.688-42.688h533.248l0.064-128h64z m64 192H192v256h640v-256zM320 618.688V704H256V618.688h64z m128 0V704H384V618.688h64z m128 0V704H512V618.688h64z m160-400.192c41.216 0 78.592 16.768 105.6 43.776l-45.248 45.184a85.312 85.312 0 0 0-120.704 0.064l-45.248-45.248a148.864 148.864 0 0 1 105.6-43.776z m0-128l8.064 0.128 7.04 0.32 2.944 0.192 6.4 0.448 6.272 0.64c19.2 2.112 38.272 6.272 56.768 12.416l9.216 3.2 7.04 2.752 6.208 2.56 2.88 1.28c23.36 10.432 45.056 24 64.448 40.192l7.232 6.144 3.52 3.2 3.712 3.52 4.352 4.288-45.248 45.248a212.608 212.608 0 0 0-150.848-62.528c-58.88 0-112.256 23.936-150.848 62.528l-45.248-45.248 6.4-6.208 5.76-5.248 2.24-1.984c18.944-16.448 40.064-30.336 62.976-41.152l8.64-3.968 8.064-3.328 6.4-2.432a277.76 277.76 0 0 1 56.704-14.208l9.664-1.216 7.488-0.64 6.656-0.448 6.272-0.256 8.832-0.192z" fill={getIconColor(color, 0, '#333333')}/>
    </svg>);
};
IconcaidanShebeiku.defaultProps = {
    size: 18,
};
export default IconcaidanShebeiku;
//# sourceMappingURL=IconcaidanShebeiku.js.map