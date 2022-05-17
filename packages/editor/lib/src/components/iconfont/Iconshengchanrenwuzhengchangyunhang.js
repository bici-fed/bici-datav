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
var Iconshengchanrenwuzhengchangyunhang = function (_a) {
    var size = _a.size, color = _a.color, _style = _a.style, rest = __rest(_a, ["size", "color", "style"]);
    var style = _style ? __assign(__assign({}, DEFAULT_STYLE), _style) : DEFAULT_STYLE;
    return (<svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill={getIconColor(color, 0, '#1EC622')}/>
      <path d="M512 93.090909a418.909091 418.909091 0 1 1 0 837.818182 418.909091 418.909091 0 0 1 0-837.818182zM386.327273 461.544727H252.834909v61.44h68.142546v156.392728c-24.017455 11.729455-49.710545 31.278545-73.728 55.296l45.800727 64.791272c23.458909-33.512727 50.269091-68.142545 67.584-68.142545 11.729455 0 30.72 16.756364 53.061818 29.044363 39.656727 22.341818 84.340364 29.044364 154.158545 29.044364 60.881455 0 149.131636-3.351273 191.022546-5.585454 0.558545-19.549091 12.288-54.178909 20.107636-73.169455-58.088727 8.378182-151.924364 13.405091-208.337454 13.405091-60.881455 0-110.592-2.792727-148.014546-25.134546-15.080727-8.936727-26.810182-17.314909-36.305454-22.900363V461.544727z m380.369454-38.539636H408.110545v61.998545h98.304c-18.432 46.359273-42.449455 88.250182-51.944727 101.096728-11.170909 15.639273-20.666182 25.693091-32.395636 29.044363 8.378182 18.432 20.107636 51.386182 23.458909 65.908364 0-1.675636 0.558545-2.792727 1.675636-4.468364v4.468364c21.224727-8.936727 49.710545-12.288 236.264728-30.161455 7.261091 15.080727 13.963636 29.044364 18.990545 40.773819l59.764364-30.72c-20.666182-41.890909-64.232727-111.709091-94.952728-163.095273l-55.296 25.134545c12.846545 21.783273 26.251636 46.359273 40.215273 70.935273l-134.609454 10.612364c24.576-35.746909 50.269091-78.196364 69.259636-119.528728h179.851636V423.005091zM308.130909 292.305455l-43.566545 41.890909c30.72 24.017455 75.403636 58.088727 96.069818 78.196363l46.917818-47.476363c-22.900364-19.549091-69.259636-51.386182-99.421091-72.610909z m422.260364 7.819636h-284.858182v61.44h284.858182v-61.44z" fill={getIconColor(color, 1, '#FFFFFF')}/>
    </svg>);
};
Iconshengchanrenwuzhengchangyunhang.defaultProps = {
    size: 18,
};
export default Iconshengchanrenwuzhengchangyunhang;
//# sourceMappingURL=Iconshengchanrenwuzhengchangyunhang.js.map